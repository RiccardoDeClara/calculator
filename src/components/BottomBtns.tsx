import React, { type Dispatch, type SetStateAction } from "react";

import { Button } from "react-magic-ui";
import "./../style/buttons.css";
import { checkUpdateText } from "./commons/commons.js";

function BottomBtns({
	updateText,
	textValue,
}: {
	updateText: Dispatch<SetStateAction<string>>;
	textValue: string;
}) {
	const firstRow = ["7", "8", "9"];
	const secondRow = ["4", "5", "6"];
	const thirdRow = ["1", "2", "3"];
	const fourthRow = ["", "0", ","];
	// const fourthRow = ["+/-", "0", ","];

	return (
		<>
			<div className="row">
				{firstRow.map((button, index) => (
					<Button
						rounded={true}
						key={index}
						onClick={() => checkUpdateText(textValue, `${button}`, updateText)}
					>
						{button}
					</Button>
				))}
			</div>
			<div className="row">
				{secondRow.map((button, index) => (
					<Button
						rounded={true}
						key={index}
						onClick={() => checkUpdateText(textValue, `${button}`, updateText)}
					>
						{button}
					</Button>
				))}
			</div>
			<div className="row">
				{thirdRow.map((button, index) => (
					<Button
						rounded={true}
						key={index}
						onClick={() => checkUpdateText(textValue, `${button}`, updateText)}
					>
						{button}
					</Button>
				))}
			</div>
			<div className="row">
				{fourthRow.map((button, index) => (
					<Button
						rounded={true}
						key={index}
						onClick={() => checkUpdateText(textValue, `${button}`, updateText)}
					>
						{button}
					</Button>
				))}
			</div>
		</>
	);
}

export default BottomBtns;
