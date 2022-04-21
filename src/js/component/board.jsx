import React, { useState } from "react";
import Square from "./squares";
import "animate.css";

const Board = () => {
	const [symbol, setSymbol] = useState("    ");

	return (
		<>
			<div className="container ">
				<table className="table table-borderless mt-5 ">
					<tbody className="g-2">
						<tr>
							<td
								
								className="x-hover borderR"
								id="borderB">
								{symbol}
							</td>
							<td
								
								className="o-hover borderR"
								id="borderB">
								{symbol}
							</td>
							<td  className="x-hover" id="borderB">
								{symbol}
							</td>
						</tr>
						<tr>
							<td
								
								className="o-hover borderR"
								id="borderB">
								{symbol}{" "}
							</td>
							<td
								
								className="x-hover borderR"
								id="borderB">
								{symbol}
							</td>
							<td  className="o-hover" id="borderB">
								{symbol}
							</td>
						</tr>
						<tr>
							<td className="borderR ">
								{symbol}
							</td>
							<td  className="borderR ">
								{symbol}
							</td>
							<td>{symbol}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Board;
