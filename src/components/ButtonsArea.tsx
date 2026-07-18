import React, { type Dispatch, type SetStateAction } from "react";

import TopBtns from "./TopBtns";
import BottomBtns from "./BottomBtns";
import RightBtns from "./RightBtns";

import "./../style/columns.scss";

function ButtonsArea({
	setTextValue,
	textValue,
}: {
	setTextValue: Dispatch<SetStateAction<string>>;
	textValue: string;
}) {
	return (
		<div className="grid-container">
			<div className="column-left">
				<TopBtns updateText={setTextValue} textValue={textValue} />
				<BottomBtns updateText={setTextValue} textValue={textValue} />
			</div>
			<div className="column-right">
				<RightBtns updateText={setTextValue} textValue={textValue} />
			</div>
		</div>
	);
}

export default ButtonsArea;
