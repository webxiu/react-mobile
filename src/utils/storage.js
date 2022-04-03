const __userinfo = "__userinfo__";
const __collapse = "__collapse__";
const __activeKey = "__activeKey__";
const __view_pos = "__view_pos__";
const __history = "__history__";

/** ==================== 保存用户名和密码 ==================== */
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

/** ==================== 保存菜单展开 ==================== */
export const getCollapse = () => localStorage.getItem(__collapse) || null;
export const setCollapse = (collapse) => {
  const col = localStorage.setItem(__collapse, collapse);
  return col;
};

export const removeCollapse = () => localStorage.removeItem(__collapse);

/** ==================== 保存点击的文章id ==================== */
export const getActiveTitle = () => Number(localStorage.getItem(__activeKey));
export const setActiveTitle = (id) => localStorage.setItem(__activeKey, id);
export const removeActiveTitle = () => localStorage.removeItem(__activeKey);

/** ==================== 保存浏览位置 ==================== */
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

/** ==================== 存储浏览历史 ==================== */
export const getHistory = () => {
  const oList = JSON.parse(localStorage.getItem(__history) || "[]");
  return oList;
};

export const setHistory = (option) => {
  const oList = getHistory();
  const idx = oList.findIndex((item) => item.id === option.id);
  if (idx > -1) {
    oList.splice(idx, 1);
  }
  const list = [option, ...oList];
  localStorage.setItem(__history, JSON.stringify(list));
};

export const removeHistory = (id) => {
  const oList = getHistory();
  const newList = oList.filter((item) => item.id !== id);
  localStorage.setItem(__history, JSON.stringify(newList));
  return newList;
};
export const clearHistory = () => localStorage.removeItem(__history);
