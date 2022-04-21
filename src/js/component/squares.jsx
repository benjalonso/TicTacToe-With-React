import React, { useState } from "react";
import "animate.css";

const Square = ({value, onClick}) => {
	const [symbol, setSymbol] = useState("X");


	return (
		<>
			<button onClick={onClick}>
				{value}
			</button>
		</>
	);
};

export default Reset;
