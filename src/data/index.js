import { historyRouterList } from "./history";
import { marxRouterList } from "./marx";
import { societyRouterList } from "./society";

// 1.马克思
const marxFilterArr = [
  // 先屏蔽真题
  515, 516, 523, 524, 525, 526, 527, 1017, 1326, 1327, 1642, 1744,
];

const marxChildren = marxRouterList.results
  .filter((f) => !marxFilterArr.includes(f.id))
  .map(({ title, id }) => ({
    name: title,
    id,
    path: "/course/subject",
  }));

// 2.近代史
const historyFilterArr = [
  // 先屏蔽真题
  43, 29, 925, 40, 46, 624, 625, 25, 1324, 1325, 1635, 1747,
];
const historyChildren = historyRouterList.results
  .filter((f) => !historyFilterArr.includes(f.id))
  .map(({ title, id }) => ({
    name: title,
    id,
    path: "/course/subject",
  }));

// 2.毛概
const societyFilterArr = [1343, 1018, 1019, 1328, 1329, 1643, 1743];
const societyChildren = societyRouterList.results
  .filter((f) => !societyFilterArr.includes(f.id))
  .map(({ title, id }) => ({
    name: title,
    id,
    path: "/course/subject",
  }));

// 首页目录及其展开列表
export const contentsList = [
  {
    path: "/marx",
    key: "marx",
    children: marxChildren,
    name: "马克思主义基本原理概论（03709）",
    description:
      "马克思主义基本原理概论（03709）是高等教育自学考试各专业本科阶段的一门公共基础课。本课程共7章内容，重点在第1章、第2章、第3章、第4章、第5章、第6章；次重点在第7章。",
  },
  {
    path: "/history",
    key: "history",
    children: historyChildren,
    name: "中国近现代史纲要（03708）",
    description:
      "中国近现代史（03708）是高等教育自学考试各专业本科阶段的一门公共基础课。本课程共11章内容，重点在第1章、第2章、第3章、第5章、第6章、第8章、第11章；次重点在第4章、第7章、第9章、第10章。",
  },
  {
    path: "/society",
    key: "society",
    children: societyChildren,
    name: "毛泽东思想和中国特色社会主义思想概论（12656）",
    description: "毛泽东思想和中国特色社会主义思想概论（12656）是高等教育自学考试各专业专科阶段的一门公共基础课。",
  },
];
