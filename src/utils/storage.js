const __userinfo = "__userinfo__";
const __collapse = "__collapse__";
const __activeKey = "__activeKey__";

/** 保存用户名和密码 */
export const getUserInfo = () =>
  JSON.parse(localStorage.getItem(__userinfo) || "{}");
export const setUserInfo = (userinfo) =>
  localStorage.setItem(__userinfo, JSON.stringify(userinfo));
export const removeUserInfo = () => localStorage.removeItem(__userinfo);

/** 保存菜单展开 */
export const getCollapse = () => localStorage.getItem(__collapse) || null;
export const setCollapse = (collapse) =>
  localStorage.setItem(__collapse, collapse);
export const removeCollapse = () => localStorage.removeItem(__collapse);

/** 保存点击的文章id */
export const getActiveTitle = () => Number(localStorage.getItem(__activeKey));
export const setActiveTitle = (id) => localStorage.setItem(__activeKey, id);
export const removeActiveTitle = () => localStorage.removeItem(__activeKey);
