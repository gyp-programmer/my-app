/*
 * 共用的工具函数
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 14:21:47
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

/**
 * 是否为开发环境
 * @returns {boolean} true为是
 */
export function isDev() {
    return process.env.NODE_ENV === 'development';
}

/**
 * 是否为函数
 * @param value 传入的参数
 * @returns {boolean}
 */
export function isFunction(value: unknown) {
    return typeof value === 'function';
}
