/*
 * 初实useSyncExternalStore
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 11:15:50
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
interface IStore {
  listeners: Array<() => void>;
  [x: string]: any;
}

const store: IStore = {
  count: 0,
  listeners: [],
  subscribe(listener: () => void) {
    store.listeners.push(listener);

    return () => {
      store.listeners = store.listeners.filter(item => item !== listener);
    };
  },
  getSnapshot() {
    return store.count;
  },
  dispatch() {
    store.count += 1;
    // 触发监听渲染页面
    store.listeners.forEach(listener => listener());
  },
};

export default store;
