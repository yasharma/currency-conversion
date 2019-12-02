import React from "./node_modules/react";
import { GenerateHtmlContent } from "./GenerateHtmlContent";
import { Answer } from '../../models/entities/IQuestion';

type QuizMCQOptionsProps = {
	options: Array<Answer>;
	isArabic: boolean;
	showAnswers: boolean;
	toggleAnswers: () => void;
};

export const QuizMCQOptions = (props: QuizMCQOptionsProps) => {
	const optionStyle = (option: any) => {
		if (!props.showAnswers) return "option";
		return "option " + (option.correct ? "correct" : "wrong");
	};

	return (
		<div className="option-row">
			{props.options.map((option, key) => {
				const optionValues = (
					<GenerateHtmlContent
						content={option.body}
						styleClassName={`generate-content ${props.isArabic ? 'preview-arabic-question':''}`}
					/>
				);
				return (
					<div
						className={optionStyle(option)}
						key={option.id}
						id={option.id}
						onClick={props.toggleAnswers}
					>
						<span key={option.id} id={option.id}/>
						{optionValues}
					</div>
				);
			})}
		</div>
	);
};
