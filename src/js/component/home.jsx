import React, { useState } from "react";
import Board from "./board.jsx";
import Welcome from "./welcome.jsx";
import Reset from "./reset.jsx";
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
			<Welcome />
			<Board />
			<Reset />
		</>
	);
};

export default Home;
