import { Divider, Result } from "antd-mobile";
import { getURLParameters, rangeRandom } from "../../../utils";
import { useLocation, useParams } from "react-router";

import AnswerQuestion from "./AnswerQuestion";
import ChoiceQuestion from "./ChoiceQuestion";
import NavBack from "../../../layout/NavBack";
import React from "react";
import { marxObj } from "../../../data/marx";

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

const Maks = () => {
  const parmas = useParams();
  const location = useLocation();
  const query = getURLParameters(decodeURIComponent(location.search));
  const hacCate = marxObj[parmas.id]; // 是否存在分类题库

  const randerResult = hacCate && {
    chioce: (
      <ChoiceQuestion
        title={marxObj[parmas.id].title}
        questions={marxObj[parmas.id].questions}
      />
    ),
    answer: (
      <AnswerQuestion
        title={marxObj[parmas.id].title}
        questions={marxObj[parmas.id].questions}
      />
    ),
  };

  return (
    <NavBack query={query}>
      <div style={{ margin: "0 15px 20px" }}>
        {hacCate ? (
          randerResult[marxObj[parmas.id].cate]
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
    </NavBack>
  );
};

export default Maks;
