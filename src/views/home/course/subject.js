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

  const randerResult = hacCate && {
    chioce: (
      <ChoiceQuestion
        title={resultObj[parmas.id].title}
        questions={resultObj[parmas.id].questions}
      />
    ),
    answer: (
      <AnswerQuestion
        title={resultObj[parmas.id].title}
        questions={resultObj[parmas.id].questions}
      />
    ),
  };

  useEffect(() => {
    const res = getViewPos(parmas.id);
    if (!posRef.current || !res) return;
    posRef.current.scrollTop = res.pos;
    Toast.show({
      duration: 2000,
      position: "top",
      content: "已回到上次浏览位置",
    });
  }, [posRef, parmas]);

  const onScroll = throttle((e) => {
    const { scrollTop } = e.target;
    setViewPos({ id: parmas.id, pos: scrollTop, name: query.name });
  }, 300);

  // NavBack高度83px
  return (
    <NavBack query={query}>
      <div
        className="flex-col ui-h-100"
        style={{ marginTop: 83, overflowY: "auto" }}
        onScroll={onScroll}
        ref={posRef}
      >
        <div className="flex-1" style={{ margin: "0 10px" }}>
          {hacCate ? (
            randerResult[resultObj[parmas.id].cate]
          ) : (
            <Result
              status="info"
              title="暂无数据"
              description={descList[rangeRandom(0, descList.length - 1)]}
            />
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
