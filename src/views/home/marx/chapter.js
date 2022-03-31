import AnswerQuestion from "./AnswerQuestion";
import ChoiceQuestion from "./ChoiceQuestion";
import NavBack from '../../../layout/NavBack'
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
			title={marxObj[parmas.id].title}
			questions={marxObj[parmas.id].questions}
		/>,
	}

	return <NavBack>
		<div style={{ marginBottom: 20 }}>
			{randerResult[marxObj[parmas.id].cate]}
		</div>
	</NavBack >
};

export default Maks;
