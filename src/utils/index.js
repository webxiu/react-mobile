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

/** 范围随机 */
export const rangeRandom = (start, end) => {
  return parseInt(Math.random() * (start - end + 1) + end);
};

export const formatDate = (d, format) => {
  const date = new Date(d);
  var paddNum = function (num) {
    num += "";
    return num.replace(/^(\d)$/, "0$1");
  };
  // 指定格式字符
  var cfg = {
    yyyy: date.getFullYear(), // 年 : 4位
    yy: date.getFullYear().toString().substring(2), // 年 : 2位
    M: paddNum(date.getMonth() + 1), // 月 : 如果1位的时候不补0
    MM: paddNum(date.getMonth() + 1), // 月 : 如果1位的时候补0
    d: paddNum(date.getDate()), // 日 : 如果1位的时候不补0
    dd: paddNum(date.getDate()), // 日 : 如果1位的时候补0
    hh: paddNum(date.getHours()), // 时
    mm: paddNum(date.getMinutes()), // 分
    ss: paddNum(date.getSeconds()), // 秒
  };
  format || (format = "yyyy-MM-dd hh:mm:ss");
  return format.replace(/([a-z])(\1)*/gi, function (m) {
    return cfg[m];
  });
};
