import React from "react";
import { useParams } from "react-router-dom";

export default function ficheLogement() {
	const { id } = useParams();

	// Simuler la récupération des données à partir de l'ID
	const logement = logements.find((logement) => logement.id === id);

	if (!logement) {
		return <h1>Logement introuvable</h1>;
	}

	return (
		<div>
			<h1>{logement.title}</h1>
			<img src={logement.cover} alt={logement.title} />
			<p>{logement.description}</p>
		</div>
	);
}
