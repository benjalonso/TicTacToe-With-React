import React, { useState } from "react";
import "animate.css";

const Home = () => {
	const [symbol, setSymbol] = useState("X");
	// Lista de componentes necesarios:
	// Componente de tablero
	// Componente de inicio del juego
	// Componente de reseteo
	// Posibles opciones de juego
	// Función que determine al ganador
	// Función de jugadores

	return (
		<>
			<h1 id="tittle" className="animate__jackInTheBox">
				Tic Tac Toe in React.js
			</h1>
			<div className="container ">
				<table className="table table-borderless mt-5 ">
					<tbody className="g-2">
						<tr>
							<td key={1} className="borderR" id="borderB">
								{symbol}
							</td>
							<td key={2} className="borderR" id="borderB">
								{symbol}
							</td>
							<td key={3} id="borderB">
								{symbol}
							</td>
						</tr>
						<tr>
							<td key={4} className="borderR" id="borderB">
								{symbol}{" "}
							</td>
							<td key={5} className="borderR" id="borderB">
								{symbol}
							</td>
							<td key={6} id="borderB">
								{symbol}
							</td>
						</tr>
						<tr>
							<td key={7} className="borderR ">
								{symbol}
							</td>
							<td key={8} className="borderR ">
								{symbol}
							</td>
							<td key={9}>{symbol}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Home;
