import { useState } from "react";
import { Card } from "react-magic-ui";
import "./App.css";

// libraries
import "react-magic-ui/dist/react-magic-ui.css";

// components
import ButtonsArea from "./components/ButtonsArea";
import OperationsArea from "./components/OperationsArea";

function App() {
	const [textValue, setTextValue] = useState("");

	return (
		<>
			<Card align="center" justify="center" size="small" className="mainCard">
				<OperationsArea textValue={textValue} />
				<ButtonsArea setTextValue={setTextValue} textValue={textValue} />
			</Card>
		</>
	);
}

export default App;
