const __userinfo = "__userinfo__";
const __collapse = "__collapse__";
const __activeKey = "__activeKey__";
const __view_pos = "__view_pos__";

/** 保存用户名和密码 */
export const getUserInfo = () =>
  JSON.parse(localStorage.getItem(__userinfo) || "{}");
export const setUserInfo = (userinfo) => {
  const userInfo = getUserInfo();
  localStorage.setItem(
    __userinfo,
    JSON.stringify({ ...userInfo, ...userinfo })
  );
};
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

/** 根据文章id存储浏览位置 */
export const getViewPos = (articleId) => {
  const posObj = JSON.parse(localStorage.getItem(__view_pos) || "{}");
  const pos = articleId ? posObj[articleId] : posObj;
  return pos;
};
export const setViewPos = ({ id, pos, name, ...rest }) => {
  const posObj = getViewPos();
  const newObj = { ...posObj, [id]: { pos, name, ...rest } };
  localStorage.setItem(__view_pos, JSON.stringify(newObj));
};
export const removeViewPos = () => localStorage.removeItem(__view_pos);
