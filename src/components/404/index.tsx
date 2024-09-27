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

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleClick}>
          Back Home
        </Button>
      }
    />
  );
}

export default NotFound;
