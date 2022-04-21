import React, { useState } from "react";
import "animate.css";

const Welcome = () => {
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
		</>
	);
};

export default Welcome;
