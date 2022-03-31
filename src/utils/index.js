/**
 * 工具方法
 */
/** 判断是否PC端 */
export const isPc = () => {
  const reg =
    /phone|pad|pod|iPhone|iPod|ios|iPad|Anddroid|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/;
  if (navigator.userAgent.match(reg)) {
    return "Mobile";
  } else {
    return "PC";
  }
};
/** 获取地址栏参数 */
export const getURLParameters = (url) => {
  const params = url.match(/([^?=&]+)(=([^&]*))/g) || [];
  const res = params.reduce((a, v) => {
    const val = decodeURIComponent(v.slice(v.indexOf("=") + 1));
    a[v.slice(0, v.indexOf("="))] = val;
    return a;
  }, {});
  return res;
};

/** 函数节流 */
export const throttle = (func, delay = 120) => {
  let prev = Date.now();
  return (...args) => {
    const now = Date.now();
    if (now - prev >= delay) {
      func.call(null, ...args);
      prev = Date.now();
    }
  };
};

/** 函数防抖 */
export const debounce = (func, wait = 120) => {
  let timer = null;
  return (...args) => {
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(func.bind(null, ...args), wait);
  };
};
