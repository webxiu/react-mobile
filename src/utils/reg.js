// 正则表达式
export default {
  // 中文 2位数以上
  zhCN: /^[\u4e00-\u9fa5]{1,24}$/,
  noZhCn: /^[^\u4e00-\u9fa5]{1,200}$/,
  en: /^[a-zA-Z]{3,24}$/,
  // 英文加数字 3位数以上
  enNumber: /^[a-zA-Z0-9]{3,}$/,
  // 字母数字下划线
  enNumberCode: /^[a-zA-Z0-9_-]+$/,
  enNumberCode1: /^[a-zA-Z0-9_-]{1,50}$/,
  Mobile: /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/,
  // 整数
  Number: /^(0|[1-9][0-9]*){1,}$/,
  // 用户名
  userAuth: /^[a-zA-Z0-9_]{5,12}$/,
  // 4-6位数组或字母
  authCode: /^[a-zA-Z_-\d]{4}$/,
  // 密码
  password: /^[a-zA-Z0-9_]{6,12}$/,
  // 数字与小数
  numberDecimal: /^[0-9]+(.[0-9]{1,4})?$/,
  // 字母数字下划线短划线
  currency: /^[0-9a-zA-Z_-]{1,}$/,
  // QQ号码
  qqNumber: /^[1-9][0-9]{4,10}$/,
};
