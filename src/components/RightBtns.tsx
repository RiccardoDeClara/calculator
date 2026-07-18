import React, { type Dispatch, type SetStateAction } from "react";

import { Button } from "react-magic-ui";
import "./../style/buttons.css";
import { checkUpdateText } from "./commons/commons.js";

// Libraries
import * as math from "mathjs";

function RightBtns({
	updateText,
	textValue,
}: {
	updateText: Dispatch<SetStateAction<string>>;
	textValue: string;
}) {
	const resolveMath = () => {
		try {
			const expression = textValue
				.replaceAll("÷", "/")
				.replaceAll("x", "*")
				.replaceAll(",", ".");

			const result = math.evaluate(expression);
			updateText(String(result));
		} catch (e) {
			updateText("Error");
			console.error(e);
		}
	};

	return (
		<>
			<Button
				rounded={true}
				className={"orangeBtn"}
				onClick={() => checkUpdateText(textValue, "÷", updateText)}
			>
				÷
			</Button>
			<Button
				rounded={true}
				className={"orangeBtn"}
				onClick={() => checkUpdateText(textValue, `x`, updateText)}
			>
				x
			</Button>
			<Button
				rounded={true}
				className={"orangeBtn"}
				onClick={() => checkUpdateText(textValue, `-`, updateText)}
			>
				-
			</Button>
			<Button
				rounded={true}
				className={"orangeBtn"}
				onClick={() => checkUpdateText(textValue, `+`, updateText)}
			>
				+
			</Button>
			<Button
				rounded={true}
				className={"orangeBtn"}
				onClick={() => resolveMath()}
			>
				=
			</Button>
		</>
	);
}

export default RightBtns;
