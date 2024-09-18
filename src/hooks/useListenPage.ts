/*
 * 监听用户是否活跃
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-14 09:21:22
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import { useState } from "react";
import { useMount } from "./useMount";
import { useUnMount } from "./useUnMount";
import { debounce } from '../utils';

const defaultDelay = 10000;

interface IUseListenPage {
    /** 空闲时间, 默认10s不操作就进入不活跃状态 */
    delay?: number;
    /** 是否页面不可见时，设置为不活跃 */
    isHidden?: boolean;
}

export function useListenPage(props: IUseListenPage) {
    const { delay = defaultDelay, isHidden = false } = props;
    const [isActive, setIsActive] = useState(true);
    let timer: any = null;
    const startListener = () => { 
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            if (isActive) {
                setIsActive(false);
            }
        }, delay);
    }

    const handleAction = () => {
        setIsActive(true);
        /** 重新开启监听 */
        startListener();
    }

    const handleVisibilityChange = () => {
        if (document.hidden && isActive && isHidden) {// 页面不可见时，设置为不活跃
            setIsActive(false);
        }
    }

    useMount(() => {
        /** 开始监听 */
        startListener();
        /** 监听页面是否可见 */
        window.addEventListener("visibilitychange", handleVisibilityChange)
        /** 监听 滚动 鼠标 键盘事件 */
        window.addEventListener("scroll", debounce(handleAction));
        window.addEventListener("mousemove", debounce(handleAction));
        window.addEventListener("keydown", debounce(handleAction));
        window.addEventListener("click", debounce(handleAction));
    })

    useUnMount(() => {
        /** 移除监听 */
        window.removeEventListener("visibilitychange", handleVisibilityChange)
        window.removeEventListener("scroll", debounce(handleAction));
        window.removeEventListener("mousemove", debounce(handleAction));
        window.removeEventListener("keydown", debounce(handleAction));
        window.removeEventListener("click", debounce(handleAction));
    })

    return isActive;
}
