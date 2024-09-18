/*
 * 屏保组件
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-14 09:56:49
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useEffect, useState } from 'react';
import './index.scss';

function ScreenSaver() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="screen-saver">
      <div className="time">{time.split(' ')[1]}</div>
      <div className="date">{time.split(' ')[0]}</div>
    </div>
  );
}

export default ScreenSaver;
