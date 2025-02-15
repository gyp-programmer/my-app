/*
 * 前端OCR插件 使用
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2025-02-14 16:50:06
 *
 * Copyright © 2019-2025 bvox.com. All Rights Reserved.
 */
import React, { useEffect, useState } from "react";
import Tesseract from "tesseract.js";
import {
  Image,
  Result,
  Spin,
  FloatButton,
  Modal,
  Upload,
  UploadFile,
  GetProp,
  UploadProps,
  Alert,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import testImg from "../../assets/test-tesseract.jpeg";
import Header from "../header";
import { File } from "groq-sdk/_shims";
import { copyToClipboard } from "utils";
import "./index.scss";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

export default function TesseractComp() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [dLoading, setDLoading] = useState(false);
  const [dText, setDText] = useState("");

  useEffect(() => {
    document.title = "识别图片内的文字";
    Tesseract.recognize(testImg, "chi_sim", {
      logger: _m => {
        //console.log(m, "图片的文字获取")
      },
    }).then(({ data }) => {
      setLoading(false);
      setText(data.text);
    });
  }, []);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  // 自定义请求，不上传，所以默认请求成功
  const handleCustomeRequest = (options: any) => {
    const { onSuccess } = options;
    onSuccess();
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (!newFileList.length) return;
    setTimeout(() => {
      setDLoading(true);
      setDText("正在解析中...");
      if (!fileList[0]) return;
      const url = fileList[0].originFileObj as File;

      // 解析图片
      Tesseract.recognize(url, "chi_sim", {
        logger: _m => {},
      })
        .then(({ data }) => {
          setDText(data.text);
        })
        .catch(() => {
          message.error("解析失败");
        })
        .finally(() => {
          setDLoading(false);
        });
    }, 500);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
        color: "var(--ant-color-text-base)",
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleClose = () => {
    setIsModalOpen(false);
    // 重置数据
    setDLoading(false);
    setDText("");
    setFileList([]);
    setPreviewImage("");
    setPreviewOpen(false);
  };

  const handleOk = () => {
    if (!dText) {
      message.warning("暂无可复制内容");
      return;
    }
    copyToClipboard(dText, {
      success: () => {
        message.success("复制成功");
      },
    });
  };

  const renderModalContent = () => {
    return (
      <>
        <Upload
          action="#"
          listType="picture-card"
          accept="image/*"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          customRequest={handleCustomeRequest}
        >
          {fileList.length == 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: "none" }}
            preview={{
              visible: previewOpen,
              onVisibleChange: visible => setPreviewOpen(visible),
              afterOpenChange: visible => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
        <Spin spinning={dLoading}>
          <Alert
            message={dText || "暂无数据解析"}
            type="success"
            style={{ marginTop: 20 }}
          />
        </Spin>
      </>
    );
  };

  return (
    <div className="tesseract-main">
      <Header name="光学字符识别-图像中文字识别" />
      <div className="my-tesseract">
        <h1>示例</h1>
        <Image width={400} src={testImg} />
        {loading ? (
          <Spin spinning={loading}>
            <div className="loading-container"></div>
          </Spin>
        ) : (
          <Result status="success" title="图片获取的文章" subTitle={text} />
        )}

        <Modal
          title="上传图片解析文字"
          open={isModalOpen}
          onCancel={handleClose}
          onOk={handleOk}
          cancelText="关闭"
          okText="复制"
        >
          {renderModalContent()}
        </Modal>

        <FloatButton
          icon={<PlusOutlined />}
          type="primary"
          style={{ insetInlineEnd: 24 }}
          tooltip="上传图片，解析文字"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
    </div>
  );
}
