import { useLocation, useParams } from "react-router";

import AnswerQuestion from "./AnswerQuestion";
import ChoiceQuestion from "./ChoiceQuestion";
import NavBack from "../../../layout/NavBack";
import React from "react";
import { getURLParameters } from "../../../utils";
import { marxObj } from "../../../data/marx";

const Maks = () => {
  const parmas = useParams();
  const location = useLocation();
  const query = getURLParameters(decodeURIComponent(location.search));
  const randerResult = {
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
        {randerResult[marxObj[parmas.id].cate]}
      </div>
    </NavBack>
  );
};

export default Maks;
