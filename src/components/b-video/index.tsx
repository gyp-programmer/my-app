/*
 * 复原b站短视频
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-21 17:55:22
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  LeftOutlined,
  UsergroupDeleteOutlined,
  SearchOutlined,
  MoreOutlined,
  CompressOutlined,
  DesktopOutlined,
  LikeFilled,
  MessageFilled,
  StarFilled,
  PushpinFilled,
  PlayCircleOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";
import { Slider, Input, Divider } from "antd";
import IconComponent from "../icon-component";
import "./index.scss";
import { Link } from "react-router-dom";
import { useMount } from "hooks/useMount";
import { useUnMount } from "hooks/useUnMount";

const className = "b-video";

/** 格式化时间为时分秒 */
export function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export function isMobile() {
  return (
    (typeof window !== "undefined" &&
      typeof navigator !== "undefined" &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )) ||
    typeof window.ontouchstart !== "undefined"
  );
}

function BVideo() {
  /** 是否开启弹幕 */
  const [danmu, setDanmu] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const moveAreaRef = React.useRef<HTMLDivElement>(null);
  const isCanSlider = useRef(false);
  const firstPoint = useRef(0);

  const handleVideoLoaded = (e: any) => {
    setTotalTime(Math.floor(e.target?.duration || 0));
  };

  const handleTimeUpdate = (e: any) => {
    setCurrentTime(Math.floor(e.target?.currentTime || 0));
  };

  const handleVideoEnded = () => {
    setIsPlay(false);
    setCurrentTime(0);
    videoRef.current?.pause();
  };

  const handleMouseMove = useCallback(
    (e: any) => {
      if (!videoRef.current) return;
      if (!isCanSlider.current) return;

      const clientX = isMobile() ? e.touches[0].clientX : e.clientX;

      /** 为=0 直接进入下一次 mousemove */
      if (firstPoint.current === 0 || !firstPoint.current) {
        firstPoint.current = clientX;
        return;
      }

      const { width = 0 } = moveAreaRef.current?.getBoundingClientRect() || {};
      const percent = (clientX - firstPoint.current) / width;

      if (currentTime < totalTime && currentTime >= 0) {
        if (!videoRef.current) return;
        let updateValue =
          Math.floor(totalTime * percent) > 12
            ? 12
            : Math.floor(totalTime * percent);
        updateValue = updateValue > 0 ? updateValue : 0;
        setCurrentTime(updateValue);
        videoRef.current.currentTime = updateValue;
      }
    },
    [currentTime, totalTime],
  );

  const openSliderFunc = () => {
    isCanSlider.current = true;
  };

  const handleMouseUp = () => {
    isCanSlider.current = false;
    firstPoint.current = 0;
  };

  /** 由于需要在监听事件中读取state，所以在 useEffect 中监听，动态更新state */
  useEffect(() => {
    if (!moveAreaRef.current) return;

    /** 判断是否为手机端 利用touch事件是否存在 */
    if (isMobile()) {
      moveAreaRef.current.addEventListener("touchmove", handleMouseMove);
    } else {
      moveAreaRef.current.addEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  useMount(() => {
    if (!moveAreaRef.current) return;
    if (isMobile()) {
      moveAreaRef.current.addEventListener("touchstart", openSliderFunc);
      moveAreaRef.current.addEventListener("touchend", handleMouseUp);
      moveAreaRef.current.addEventListener("touchcancel", handleMouseUp);
    } else {
      moveAreaRef.current.addEventListener("mousedown", openSliderFunc);
      moveAreaRef.current.addEventListener("mouseup", handleMouseUp);
      moveAreaRef.current.addEventListener("mouseleave", handleMouseUp);
    }
  });

  useMount(() => {
    if (!videoRef.current) return;

    videoRef.current.addEventListener("loadeddata", handleVideoLoaded);

    videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

    videoRef.current.addEventListener("ended", handleVideoEnded);
  });

  useUnMount(() => {
    videoRef.current?.removeEventListener("loadeddata", handleVideoLoaded);
    videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    videoRef.current?.removeEventListener("ended", handleVideoEnded);

    if (isMobile()) {
      moveAreaRef.current?.removeEventListener("touchmove", handleMouseMove);
      moveAreaRef.current?.removeEventListener("touchstart", openSliderFunc);
      moveAreaRef.current?.removeEventListener("touchend", handleMouseUp);
      moveAreaRef.current?.removeEventListener("touchcancel", handleMouseUp);
    } else {
      moveAreaRef.current?.removeEventListener("mousemove", handleMouseMove);
      moveAreaRef.current?.removeEventListener("mouseup", handleMouseUp);
      moveAreaRef.current?.removeEventListener("mouseleave", handleMouseUp);
      moveAreaRef.current?.removeEventListener("mousedown", openSliderFunc);
    }
  });

  const handleChangeSlider = (value: number) => {
    setCurrentTime(value);
  };

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (isPlay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlay(!isPlay);
  };

  const handleBlur = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    videoRef.current.currentTime = currentTime;
    setIsPlay(true);
  };

  return (
    <div className={className}>
      {/* 顶部区域 */}
      <div className={`${className}-top`}>
        <div className={`${className}-top-left`}>
          <Link to="/">
            <LeftOutlined />
          </Link>
          <div className={`${className}-top-left-title`}>
            <UsergroupDeleteOutlined />
            <span>36人正在看</span>
          </div>
        </div>
        <div className={`${className}-top-right`}>
          <SearchOutlined />
          <MoreOutlined />
        </div>
      </div>

      {/* 视频区域 */}
      <div className={`${className}-video`} ref={moveAreaRef}>
        <video controls={false} ref={videoRef}>
          <source
            src="https://www.runoob.com/try/demo_source/movie.mp4"
            type="video/mp4"
          />
          您的浏览器不支持 HTML5 video 标签。
        </video>

        <div className={`${className}-video-controls`}>
          <span onClick={handlePlay}>
            {isPlay ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
          </span>

          {!isPlay && (
            <div className={`${className}-video-controls-time`}>
              <span className="current">{formatTime(currentTime)}</span>
              <span className="divider">/</span>
              <span className="total">{formatTime(totalTime)}</span>
            </div>
          )}
        </div>
      </div>

      {/* 底部区域 */}
      <div className={`${className}-bottom`}>
        {/* 观看区域 */}
        <div className={`${className}-bottom-watch`}>
          <div className={`${className}-bottom-watch-left`}>
            <div className="top">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
              <div className="right">
                <div className="title">
                  <span>不聪明的亚子</span>
                  <span className="miss">+关注</span>
                </div>
                <div>520 粉丝</div>
              </div>
            </div>
            <div className="bottom">
              一定要看的视频 <span>#经典永不过时</span>
            </div>
          </div>
          <div className={`${className}-bottom-watch-right`}>
            <div className={`${className}-bottom-watch-right-like`}>
              <LikeFilled />
              <span className="text">120</span>
            </div>
            <div className={`${className}-bottom-watch-right-like`}>
              <MessageFilled />
              <span className="text">12</span>
            </div>
            <div className={`${className}-bottom-watch-right-like`}>
              <StarFilled />
              <span className="text">1200</span>
            </div>
            <div className={`${className}-bottom-watch-right-like`}>
              <PushpinFilled />
              <span className="text">2</span>
            </div>
          </div>
        </div>

        {/* 操作区域 */}
        <div className={`${className}-bottom-operation`}>
          <Slider
            tooltip={{
              open: false,
            }}
            value={currentTime}
            max={totalTime}
            className={`${className}-bottom-operation-progress`}
            onChange={handleChangeSlider}
            onChangeComplete={handleBlur}
            style={{ visibility: !isPlay ? "visible" : "hidden" }}
          ></Slider>

          <div className={`${className}-bottom-operation-other`}>
            <div className={`${className}-bottom-operation-other-bullet`}>
              <Input placeholder="发弹幕" />
              <Divider type="vertical" />
              <IconComponent
                icon={
                  danmu ? "icon-bofangqi-danmukai" : "icon-bofangqi-danmuguan"
                }
                className="icon-danmu"
                onClick={() => setDanmu(!danmu)}
              />
            </div>
            <CompressOutlined />
            <DesktopOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BVideo;
