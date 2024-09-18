/*
 * 无缝轮播图
 *
 * 关键：前后拼接最后一个和第一个，通过开关动画延时实现无缝
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-18 11:45:44
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useState } from "react";
import cx from "classnames";
import { genRandomColor } from "../../utils";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import "./index.scss";
import { useMount } from "hooks/useMount";

interface ICircleCarouselProps {
  /** 多少个轮博片 */
  number: number;
}

function CircleCarousel(props: ICircleCarouselProps) {
  const { number = 3 } = props;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentColors, setCurrentColors] = useState([] as string[]);
  const [transitionDuration, setTransitionDuration] = useState(0.5);
  useMount(() => {
    const colors: string[] = [];
    Array.from({ length: number }, () => {
      colors.push(genRandomColor());
    })
    setCurrentColors(colors);
  })
  const handleClick = (index: number) => {
    setCurrentIndex(index);
  }

  const handleLeft = () => {
    if (number <= 1) return;
    if (currentIndex === 1) {
      setCurrentIndex(0);

      // 下一帧无延迟的回到真实的最后一个
      requestAnimationFrame(() => {
        setCurrentIndex(number);
        setTransitionDuration(0);

        // 下一帧恢复延时动画
        requestAnimationFrame(() => {
          setTransitionDuration(0.5);
        });
      });
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleRight = () => {
    if (number <= 1) return;
    if (currentIndex === number) {
      setCurrentIndex(number + 1);
      
      requestAnimationFrame(() => {
        setTransitionDuration(0);
        setCurrentIndex(1);

        requestAnimationFrame(() => {
          setTransitionDuration(0.5);
        });
      });
      
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="circle-carousel">
      <div
        className="circle-carousel-container"
        style={{ transform: `translateX(${-currentIndex * 100}%)`, transitionDuration: `${transitionDuration}s` }}
      >
        <div
            className="circle-carousel-container-item"
            style={{ backgroundColor: currentColors[number - 1] }}
          >
            {number}
          </div>
        {Array.from({ length: number }, (_, index) => (
          <div
            className="circle-carousel-container-item"
            style={{ backgroundColor: currentColors[index] }}
            key={index}
          >
            {index + 1}
          </div>
        ))}
        <div
            className="circle-carousel-container-item"
            style={{ backgroundColor: currentColors[0] }}
          >
            {1}
          </div>
      </div>

      <div className="circle-carousel-indicator">
        {Array.from({ length: number }, (_, index) => (
          <div
            className={cx(
              "circle-carousel-indicator-item",
              index + 1 === currentIndex && "circle-carousel-indicator-item-active"
            )}
            key={index}
            onClick={() => handleClick(index + 1)}
          ></div>
        ))}
      </div>

      {/* 无缝轮播的关键，就是左右两个箭头 */}
      <div className="circle-carousel-arrow left" onClick={handleLeft}><LeftOutlined /></div>
      <div className="circle-carousel-arrow right" onClick={handleRight}><RightOutlined /></div>
    </div>
  );
}

export default CircleCarousel;
