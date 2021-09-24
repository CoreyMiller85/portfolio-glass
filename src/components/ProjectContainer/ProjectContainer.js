import React from "react";
import mtgServerIMG from "../../img/mtg-server.png";
import { Link } from "react-router";

const styles = {
	thumb: {
		backgroundImage: `url(${mtgServerIMG})`,
	},
};

const ProjectContainer = () => {
	const handleGitButton = (e) => {
		e.preventDefault();
		window.open("https://github.com/CoreyMiller85/mtg-api-server", "_blank");
	};
	return (
		<div className="project-container">
			<div className="project-container__thumb" style={styles.thumb}></div>
			<div className="project-container__details">
				<div>CastR Magic:The Gathering Database Server</div>
				<div>
					<p>Powered by: MongoDB, Express, Axios</p>
					<p>
						This is a server for my Caster App, this server controls the API end
						points for searching my extensive MongoDB database of all printed
						Magic: The Gathering cards. It also controls the user database that
						is used for authentication and creating a repo of each users
						collected cards if they so choose. *Warning* Heroku Free Dyno, Will
						take time to spin up
					</p>
				</div>
				<div>
					<button
						onClick={(e) => handleGitButton(e)}
						className="project-container__github-btn"
					>
						GitHub
					</button>
					<button disabled>LiveLink</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectContainer;
