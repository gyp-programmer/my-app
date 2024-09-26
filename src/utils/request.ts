/*
 * 封装axios请求
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-04 14:19:04
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL || '';

const request = axios.create({
    baseURL,
    timeout: 3000
});

/** 请求拦截器 */
request.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/** 响应拦截器 */
request.interceptors.response.use(
    response => {
        const res = response.data;
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);

export default request;
