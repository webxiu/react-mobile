const __userinfo = '__userinfo__'

/** 保存用户名和密码 */
export const getUserInfo = () => JSON.parse(localStorage.getItem(__userinfo) || '{}');
export const setUserInfo = (userinfo) => localStorage.setItem(__userinfo, JSON.stringify(userinfo));
export const removeUserInfo = () => localStorage.removeItem(__userinfo);
