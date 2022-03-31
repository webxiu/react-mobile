import { useLocation, useParams } from "react-router";

import AnswerQuestion from "./AnswerQuestion";
import ChoiceQuestion from "./ChoiceQuestion";
import NavBack from "../../../layout/NavBack";
import React from "react";
import { Result } from "antd-mobile";
import { getURLParameters } from "../../../utils";
import { marxObj } from "../../../data/marx";

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
      <div style={{ marginBottom: 20 }}>
        {hacCate ? (
          randerResult[marxObj[parmas.id].cate]
        ) : (
          <Result
            status="info"
            title="暂无数据"
            description="书到用时方恨少, 学到天明不是梦"
          />
        )}
      </div>
    </NavBack>
  );
};

export default Maks;
