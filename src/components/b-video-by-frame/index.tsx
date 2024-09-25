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
  LoadingOutlined,
} from "@ant-design/icons";
import { Slider, Input, Divider, Progress } from "antd";
import IconComponent from "../icon-component";
import "./index.scss";
import { Link } from "react-router-dom";
import { useMount } from "hooks/useMount";
import { useUnMount } from "hooks/useUnMount";

const className = "b-video-by-frame";

/** 1s渲染60次 计算1帧多少秒 */
const muchFrameBySecond = parseFloat((1 / 60).toFixed(4));

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
        navigator.userAgent
      )) ||
    typeof window.ontouchstart !== "undefined"
  );
}

function BVideoByFrame() {
  /** 是否开启弹幕 */
  const [danmu, setDanmu] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  // 当前帧数
  const [currentFrame, setCurrentFrame] = useState(0);
  const [frames, setFrames] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  /** 加载进度 */
  const [progress, setProgress] = useState(0);
  /** 等待加载中 */
  const [isWaiting, setIsWaiting] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const moveAreaRef = React.useRef<HTMLDivElement>(null);

  /** 开始滑动时，当前的帧数 */
  const currentFrameRef = useRef(0);

  /** 设置开关，用来控制是否正在拖拽进度条 */
  const isDragging = useRef(false);

  const isCanSlider = useRef(false);
  const firstPoint = useRef(0);

  const handleVideoLoaded = (e: any) => {
    const { duration = 0 } = e.target || {};
    setTotalTime(Math.floor(duration));
    /** 计算多少帧 */
    const n = Math.floor(duration / muchFrameBySecond);
    setFrames(n);
  };

  const handleTimeUpdate = useCallback(
    (e: any) => {
      /** 如果拖拽进度条，那么该事件就不执行 */
      if (isDragging.current) return;
      const value = e.target?.currentTime || 0;
      setCurrentTime(Math.floor(value));
      const currentF =
        (value * muchFrameBySecond) / muchFrameBySecond > 0 &&
        value / muchFrameBySecond < 1
          ? 1
          : Math.round(value / muchFrameBySecond);
      setCurrentFrame(currentF);
    },
    [isDragging]
  );

  const handleVideoEnded = () => {
    setIsPlay(false);
    setCurrentTime(0);
    setCurrentFrame(0);
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
        const updateValue =
          currentFrameRef.current + Math.round(frames * percent) < 0
            ? 0
            : currentFrameRef.current + Math.round(frames * percent);

        /** 丝滑渲染 */
        if (!videoRef.current) return;
        /** 当前帧数 */
        const currentT =
          updateValue * muchFrameBySecond > 0 &&
          updateValue * muchFrameBySecond < 1
            ? 1
            : Math.round(updateValue * muchFrameBySecond);

        setCurrentTime(currentT > totalTime ? totalTime : currentT);
        setCurrentFrame(updateValue);
        // 当时间大于总时间，则播放结束 并且设置当前时间为真正的总时间
        videoRef.current.currentTime =
          currentT > totalTime ? videoRef.current.duration : currentT;
        /** 拉到进度条最后，直接 播放视频 触发ended事件 */
        if (currentT >= totalTime) {
          playVideo();
        }
      }
    },
    [currentTime, totalTime, frames]
  );

  const openSliderFunc = useCallback(() => {
    if (!isDragging.current) {
      isDragging.current = true;
    }
    // 记录上一次的当前时间 下次滑动的起点
    currentFrameRef.current = currentFrame;

    isCanSlider.current = true;
  }, [currentFrame]);

  const handleMouseUp = () => {
    isCanSlider.current = false;
    firstPoint.current = 0;
    isDragging.current = false;
  };

  const handleProgress = (e: any) => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/TimeRanges
    // TimeRanges 接口用来表示一组时间范围，主要目的是跟踪供<audio> 和<video> 元素加载使用的媒体哪些部分已经被缓冲。

    if (!e.target) return;
    // 保证索引存在 https://developer.mozilla.org/zh-CN/docs/Web/API/TimeRanges/end
    try {
      const a =
        e.target.buffered.end(e.target.buffered.length - 1) /
        e.target?.duration;
      setProgress(a * 100);
    } catch (err: any) {
      // INDEX_SIZE_ERR 不存在指定索引值的时间范围 设置为最大值
      setProgress(100);
    }
  };

  /** 由于需要在监听事件中读取state，所以在 useEffect 中监听，动态更新state */
  useEffect(() => {
    if (!moveAreaRef.current) return;

    /** 判断是否为手机端 利用touch事件是否存在 */
    if (isMobile()) {
      /**
       * [Violation] Added non-passive event listener to a scroll-blocking <some> event.
       * Consider marking event handler as 'passive' to make the page more responsive. See <URL>
       * https://chromestatus.com/feature/5745543795965952
       */
      moveAreaRef.current.addEventListener("touchmove", handleMouseMove, {
        passive: true,
      });
      moveAreaRef.current.addEventListener("touchstart", openSliderFunc, {
        passive: true,
      });
    } else {
      moveAreaRef.current.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
      moveAreaRef.current.addEventListener("mousedown", openSliderFunc, {
        passive: true,
      });
    }
    if (!videoRef.current) return;
    videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
  }, [handleMouseMove, handleTimeUpdate]);

  useMount(() => {
    if (!moveAreaRef.current) return;
    if (isMobile()) {
      moveAreaRef.current.addEventListener("touchend", handleMouseUp);
      moveAreaRef.current.addEventListener("touchcancel", handleMouseUp);
    } else {
      moveAreaRef.current.addEventListener("mouseup", handleMouseUp);
      moveAreaRef.current.addEventListener("mouseleave", handleMouseUp);
    }
  });

  useMount(() => {
    if (!videoRef.current) return;
    isPlay && videoRef.current.play();

    videoRef.current.addEventListener("loadeddata", handleVideoLoaded);

    videoRef.current.addEventListener("ended", handleVideoEnded);
    videoRef.current.addEventListener("progress", handleProgress);
    videoRef.current.addEventListener("waiting", () => {
      setIsWaiting(true);
    });
    videoRef.current.addEventListener("playing", () => {
      setIsWaiting(false);
    });
  });

  useUnMount(() => {
    videoRef.current?.removeEventListener("loadeddata", handleVideoLoaded);
    videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    videoRef.current?.removeEventListener("ended", handleVideoEnded);
    videoRef.current?.removeEventListener("progress", handleProgress);

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
    if (!isDragging.current) {
      isDragging.current = true;
    }
    setCurrentFrame(value);
    setCurrentTime(
      value * muchFrameBySecond > 0 && value * muchFrameBySecond < 1
        ? 1
        : Math.round(value * muchFrameBySecond)
    );
    // 在监听的timeupdate事件中，更新即可
    if (!videoRef.current) return;
    videoRef.current.currentTime = value * muchFrameBySecond;
  };

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (isPlay) {
      videoRef.current.pause();
    } else {
      playVideo();
    }
    /** 主动触发播放图标，关闭拖拽状态 */
    isDragging.current = false;
    setIsPlay(!isPlay);
  };

  const handleBlur = () => {
    /** 主动触发播放图标，关闭拖拽状态 */
    isDragging.current = false;
    if (!videoRef.current) return;
    playVideo();
    setIsPlay(true);
  };

  /**
   * 处理浏览器自动播放策略 导致play()会报错
   * @abstract NotAllowedError: play() failed because the user didn't interact with the document first
   */
  const playVideo = () => {
    if (!videoRef.current) return;
    const promise = videoRef.current.play();
    if (promise) {
      promise
        .then(() => {
          // Autoplay started!
        })
        .catch(() => {
          // 暂不需要做处理
        });
    }
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
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            type="video/mp4"
          />
          您的浏览器不支持 HTML5 video 标签。
        </video>

        <div className={`${className}-video-controls`}>
          <span onClick={handlePlay}>
            {!isWaiting ? (
              isPlay ? (
                <PauseCircleOutlined />
              ) : (
                <PlayCircleOutlined />
              )
            ) : (
              <LoadingOutlined />
            )}
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
            value={currentFrame}
            max={frames}
            className={`${className}-bottom-operation-progress`}
            onChange={handleChangeSlider}
            onChangeComplete={handleBlur}
            // style={{visibility: !isPlay ? 'visible' : 'hidden'}}
          ></Slider>
          <div className={`${className}-bottom-operation-progress-bar`}>
            <Progress
              strokeColor={"gray"}
              size={{ height: 5 }}
              percent={progress}
              showInfo={false}
            />
          </div>
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

export default BVideoByFrame;
