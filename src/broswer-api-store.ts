/*
 * 浏览器的外部数据
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-02 11:31:37
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
const browserApiStore = {
  getSnapshot() {
    return navigator.onLine;
  },
  subscribe(listener: () => void) {
    window.addEventListener("online", listener);
    window.addEventListener("offline", listener);

    return () => {
      window.removeEventListener("online", listener);
      window.removeEventListener("offline", listener);
    };
  },
};

export default browserApiStore;
