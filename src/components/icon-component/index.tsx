/*
 * svg组件
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-20 11:35:35
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React from 'react';
import './index.scss';

interface IIconProps {
  icon: string;
  className?: string;
}

function IconComponent(props: IIconProps) {
  const { className, icon } = props;
  return (
    <svg className={`icon ${className}`}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
}

export default IconComponent;
