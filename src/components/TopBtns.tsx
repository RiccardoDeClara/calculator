import React, { type Dispatch, type SetStateAction } from "react";

import { Button } from "react-magic-ui";
import "./../style/buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { checkUpdateText } from "./commons/commons.js";

function TopBtns({
	updateText,
	textValue,
}: {
	updateText: Dispatch<SetStateAction<string>>;
	textValue: string;
}) {
	const removeLast = () => {
		if (!Number(textValue)) {
			updateText("");
			return;
		}
		updateText(textValue.slice(0, -1));
	};

	return (
		<div className="row">
			<Button
				rounded={true}
				className={"grayBtn row"}
				onClick={() => {
					removeLast();
				}}
			>
				<FontAwesomeIcon
					icon={faDeleteLeft}
					style={{ color: "rgb(255, 255, 255)" }}
				/>
			</Button>
			<Button
				rounded={true}
				className={"grayBtn"}
				onClick={() => updateText("")}
			>
				C
			</Button>
			<Button
				rounded={true}
				className={"grayBtn"}
				onClick={() => checkUpdateText(textValue, `%`, updateText)}
			>
				%
			</Button>
		</div>
	);
}

export default TopBtns;
