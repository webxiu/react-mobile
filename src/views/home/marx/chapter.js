import AnswerQuestion from "./AnswerQuestion";
import ChoiceQuestion from "./ChoiceQuestion";
import NavBack from '../../../components/NavBack'
import React from "react";
import { marxObj } from "../../../config";
import { useParams } from "react-router";

const Maks = () => {
	const parmas = useParams();

	const randerResult = {
		chioce: <ChoiceQuestion
			title={marxObj[parmas.id].title}
			questions={marxObj[parmas.id].questions}
		/>,
		answer: <AnswerQuestion
			title={marxObj.title}
			questions={marxObj[parmas.id].questions}
		/>,
	}

	return <NavBack>
		{randerResult[marxObj[parmas.id].cate]}
	</NavBack >
};

export default Maks;
