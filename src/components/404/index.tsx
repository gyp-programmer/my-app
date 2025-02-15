/*
 * 404页面
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-11 10:12:32
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { ResultStatusType } from "antd/es/result";

interface IProps {
  subTitle?: string;
  title?: string;
  status?: ResultStatusType;
  extra?: React.ReactNode;
}

function NotFound(props: IProps) {
  const {
    subTitle = "Sorry, the page you visited does not exist.",
    title = "404",
    status = "404",
    extra,
  } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      extra={
        extra || (
          <Button type="primary" onClick={handleClick}>
            Back Home
          </Button>
        )
      }
    />
  );
}

export default NotFound;
