import { Divider, Result, Toast } from "antd-mobile";
import React, { useEffect, useRef } from "react";
import { getURLParameters, rangeRandom } from "../../../utils";
import { getViewPos, setViewPos } from "../../../utils/storage";
import { useLocation, useParams } from "react-router";

import AnswerQuestion from "./AnswerQuestion";
import ChoiceQuestion from "./ChoiceQuestion";
import NavBack from "../../../layout/NavBack";
// 近代史
import { historyObj } from "../../../data/history";
// 马克思
import { marxObj } from "../../../data/marx";
// 毛概
import { societyObj } from "../../../data/society";
import { throttle } from "../../../utils";

const descList = [
  "书到用时方恨少, 学到天明不是梦",
  "喧嚣繁华惑心志, 能甘寂寞是英雄",
  "囊萤映雪锥刺骨, 犹似教鞭催奋读",
  "春风吹战鼓擂, 今年高考谁怕谁",
  "十年磨剑三日锋, 数载人生在其中",
  "书山有路勤为径, 学海无涯苦作舟",
  "玉不琢不成器, 人不学不知道",
  "与其临渊羡鱼, 不如退而结网",
];

const classCate = { marx: marxObj, history: historyObj, society: societyObj };

const Maks = () => {
  const posRef = useRef(null);
  const parmas = useParams();
  const location = useLocation();
  const query = getURLParameters(decodeURIComponent(location.search));
  const resultObj = classCate[query.course];
  const hacCate = resultObj[parmas.id]; // 是否存在分类题库
  const contentRef = useRef(null);

  const randerResult = hacCate && {
    chioce: <ChoiceQuestion title={resultObj[parmas.id].title} questions={resultObj[parmas.id].questions} />,
    answer: <AnswerQuestion title={resultObj[parmas.id].title} questions={resultObj[parmas.id].questions} />,
  };

  useEffect(() => {
    const res = getViewPos(parmas.id);
    if (!posRef.current || !res) return;
    posRef.current.scrollTop = res.pos;
    Toast.show({
      duration: 2000,
      position: "top",
      content: "欢迎回来, 已回到上次浏览位置",
    });

    // 内容不够时候直接设置100%
    if (posRef.current && contentRef.current) {
      const bh = posRef.current.offsetHeight;
      const ch = contentRef.current.offsetHeight;
      if (ch < bh) {
        setViewPos({ id: parmas.id, pos: bh, name: query.name, percent: 100 });
      }
    }
  }, [posRef, parmas, query]);

  const onScroll = throttle((e) => {
    const { scrollTop, offsetHeight, scrollHeight } = e.target;
    const scrollPos = scrollTop + offsetHeight;
    let s = 0;
    if (scrollTop < offsetHeight) s = offsetHeight;
    if (scrollPos >= 100) s = scrollPos;
    let percent = Math.floor((s / scrollHeight) * 100);
    setViewPos({ id: parmas.id, pos: scrollTop, name: query.name, percent });
  }, 0);

  // NavBack高度83px
  return (
    <NavBack query={query}>
      <div className="flex-col ui-h-100" style={{ marginTop: 83, overflowY: "auto" }} onScroll={onScroll} onLoad={onScroll} ref={posRef}>
        <div style={{ margin: "0 10px" }} ref={contentRef}>
          {hacCate ? (
            randerResult[resultObj[parmas.id].cate]
          ) : (
            <Result status="info" title="暂无数据" description={descList[rangeRandom(0, descList.length - 1)]} />
          )}
          <Divider
            style={{
              color: "#1677ff",
              borderColor: "#1677ff",
              borderStyle: "dashed",
            }}
          >
            没有更多了
          </Divider>
        </div>
      </div>
    </NavBack>
  );
};

export default Maks;
