/*
 * mock请求统一定义
 * 
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-04 14:26:05
 * 
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
import Mock from 'mockjs';

const random = Mock.Random;

const mocks = [
    {
        url: '/api/user/list',
        type: 'get',
        response: () => {
            return {
                code: 200,
                data: Array.from({length: 10}, _ => ({
                    name: random.cname(),
                    age: random.integer(18, 60),
                    sex: random.boolean() ? '男' : '女',
                    avatar: random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
                }))
            }
        }
    }
];

export default mocks;

