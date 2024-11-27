/*
 * 通过service-worker处理资源请求劫持
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-14 17:40:41
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */


// 该监听函数中，可以初始化缓存并添加离线应用所需的文件
self.addEventListener('install', e => {
	console.log('Service Worker --- Install');
})

// 缓存请求 post请求不支持存储在cacheStorage 这里采用indexDB存储
self.addEventListener('fetch', e => {
	const req = e.request;
	console.log(self.location.origin, 'FETCH---请求', req);
	// if (req.url.startsWith(self.location.origin)) { // 静态资源请求 或者是同源请求 采用缓存优先
	// 	const method = e.request.method
	// 	if (!['GET', 'POST'].includes(method)) {
	// 		return;
	// 	}
	// 	e.respondWith(
	// 		caches.match(e.request).then(res => {
	// 			// console.log('Service Worker Fetch', e.request.url);
	// 			return res || fetch(e.request).then(response => {
	// 				return caches.open(cacheName).then(cache => {
	// 					console.log(cache, '酷酷酷')
	// 					cache.put(e.request, response.clone());
	// 					return response;
	// 				})
	// 			})
	// 		})
	// 	)
	// } else { // 后端请求  采用网络优先
	// 	const method = e.request.method
	// 	if (!['GET', 'POST'].includes(method)) {
	// 		return;
	// 	}
	// 	e.respondWith(
	// 		caches.match(e.request).then(res => {
	// 			// console.log('Service Worker Fetch', e.request.url);
	// 			if (method === 'GET') {
	// 				return fetch(e.request).then(response => {
	// 					return caches.open(cacheName).then(cache => {
	// 						cache.put(e.request, response.clone());
	// 						return response;
	// 					});
	// 				}).catch(err => {
	// 					console.log('get出错', err);
	// 					return res;
	// 				})
	// 			} else {
	// 				return fetch(e.request).then(async response => {
	// 					console.log(response, '工卡肯定是')
	// 					return await store.putPostCache(e.request.url, response.clone());
	// 				}).catch(async err => {
	// 					console.log('出错', err);
	// 					const result = await store.readDataToTable(e.request.url);
	// 					console.log(result, '响应数据')
	// 					return deSerializeResponse(result);
	// 				})
	// 			}
	// 		})
	// 	)
	// }
})

