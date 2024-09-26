/*
 * gpt
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-18 16:21:57
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useRef, useState, useEffect } from "react";
import Header from "../header";
import IconComponent from "../icon-component";
import { Input, Button, message, Select } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import {
  getGroqChatCompletion,
  TChatMessage,
  getModels,
  TModelResponse,
  TModel,
  defaultModel,
} from "../../utils/groq";
import "./index.scss";
import marked from '../../utils/marked';
import { useMount } from "hooks/useMount";

const className = "gpt-container";
const { Search } = Input;

function Gpt() {
  /** 消息集合 */
  const [messages, setMessages] = useState([] as TChatMessage[]);
  /** 消息发送中 */
  const [loading, setLoading] = useState(false);
  /** 问题集合 */
  const [questionList, setQuestionList] = useState([] as string[]);
  /** 模型列表 */
  const [modelList, setModelList] = useState([] as TModel[]);
  const [currentModel, setCurrentModel] = useState(defaultModel);
  const [searchText, setSearchText] = useState("");
  const messageRef = useRef<HTMLDivElement>(null);  
  const [messageApi, contextHolder] = message.useMessage();
  const handleAnswer = async () => {
    if (!searchText) {
      messageApi.error("请输入问题");
      return;
    }
    setLoading(true);
    setQuestionList([...questionList, searchText]);
    const res = await getGroqChatCompletion({
      question: searchText,
      model: currentModel,
    });
    const parseRES = await marked.parse(res.choices[0].message.content || '');
    setMessages([...messages, {...res, parseContent: parseRES}]);
    setLoading(false);
    setSearchText("");
  };

  const handleChange = (value: string) => {
    setCurrentModel(value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (!messageRef.current) return;
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }, 0);
  }, [messages]);

  useMount(() => {
    getModels().then((res: TModelResponse) => {
      setModelList(res.data);
    });
  });

  return (
    <div>
      <Header name="gpt对话" />
      <div className={className}>
        <div className={`${className}-top`}>
          <IconComponent
            icon="icon-dianzan_kuai"
            className={`${className}-top-icon`}
          />
          <span>供应商：groq, 使用的模型为</span>
          <Select
            value={currentModel}
            style={{ width: 220 }}
            onChange={handleChange}
            fieldNames={{ label: "id", value: "id" }}
            options={modelList as any}
            size="small"
          />
        </div>
        <div className={`${className}-content`}>
          <div className={`${className}-content-messages`} ref={messageRef}>
            {messages.map((item, ind) => (
              <div
                className={`${className}-content-messages-item`}
                key={item.id}
              >
                <div className={`${className}-content-messages-item-title`}>
                  {questionList[ind]}
                </div>
                <div className={`${className}-content-messages-item-content`} dangerouslySetInnerHTML={{__html: item.parseContent}}>
                  
                </div>
              </div>
            ))}
          </div>

          <div className={`${className}-content-text`}>
            <Search
              placeholder="ask anything..."
              loading={loading}
              value={searchText}
              onSearch={handleAnswer}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button icon={<ArrowUpOutlined />} onClick={() => handleAnswer()} />
          </div>
        </div>
      </div>
      {contextHolder}
    </div>
  );
}

export default Gpt;
