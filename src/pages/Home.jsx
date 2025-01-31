import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import logements from "../datas/logements.json"
import Card from "../components/Card/Card";

export default function Home() {
	return (
		<>
			<Banner />
			<div className="cards-container">
				{logements.map((logement) => (
					<Link
						to={`/logement/${logement.id}`}
						key={logement.id}
					>
						<Card title={logement.title} cover={logement.cover} />
					</Link>
				))}
			</div>
		</>
	);
}

console.log(logements)