/*
 * GROQ提供的语言大模型
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-20 14:33:27
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import Groq from "groq-sdk";
import { ChatCompletion } from 'groq-sdk/resources/chat/completions';
import { ModelListResponse, Model } from 'groq-sdk/resources/models';

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY || "";

const groq = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true });

export const defaultModel = "llama3-8b-8192";

const lover = ['简雯雯', 'jammy', '蚊子大人', '酒鬼蚊子']

export const getModels = async () => {
  return await groq.models.list();
};

/** 创建对话 */
interface IChatCompletionParams {
  model?: string;
  question: string;
}

export async function getGroqChatCompletion(params: IChatCompletionParams) {
  const { question, model = defaultModel } = params;
  // 如果question中包含lover中的一项
  if (lover.some(item => question.includes(item))) {
    return await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: question + ', 用中文回答，并且加上"我爱你老婆-jammy"',
        },
      ],
      model,
    });
  }
  return await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: question + ', 用中文回答',
      },
    ],
    model,
  });
}

export type TChatMessage = ChatCompletion & {
    parseContent: string;
};
export type TModelResponse = ModelListResponse;
export type TModel = Model;
