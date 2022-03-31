const __userinfo = '__userinfo__'
const __collapse = '__collapse__'

/** 获取用户名和密码 */
export const getUserInfo = () => JSON.parse(localStorage.getItem(__userinfo) || '{}');
/** 设置用户名和密码 */
export const setUserInfo = (userinfo) => localStorage.setItem(__userinfo, JSON.stringify(userinfo));
/** 移出用户名和密码 */
export const removeUserInfo = () => localStorage.removeItem(__userinfo);


/** 保存首页菜单展开 */
export const getCollapse = () => localStorage.getItem(__collapse) || null;
/** 设置首页菜单展开 */
export const setCollapse = (collapse) => localStorage.setItem(__collapse, collapse);
/** 移出首页菜单展开 */
export const removeCollapse = () => localStorage.removeItem(__collapse);
