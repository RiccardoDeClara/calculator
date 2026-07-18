import React from "react";

import "./../style/columns.scss";
import "./../style/operationArea.scss";

function OperationsArea({ textValue }: { textValue: string }) {
	return <input type="text" value={textValue} className="operationArea" />;
}

export default OperationsArea;
