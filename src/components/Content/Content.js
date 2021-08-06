import React from "react";
import Contact from "../Contact/Contact";
import Container from "../Container/Container";
import HeroImage from "../HeroImage/HeroImage";
import Jobs from "../Jobs/Jobs";
import Section from "../Section/Section";

function Content() {
	return (
		<div className="content">
			<HeroImage />
			<Section title="About Me">
				<Container>
					<p>
						I am Corey Miller, a Charlotte NC fullstack web developer. I have
						been working with HTML, CSS, and JavaScript since 2018 creating full
						stack web apps. I have completed the “Full-Stack Tech Degree” from
						Team Treehouse which is a rigorous bootcamp focusing on the MERN
						stack. I am an avid learner and enjoy learning new ways to code and
						solve problems on a daily basis. I am very interested in working on
						a team in the greater Charlotte area full time as a web developer.
					</p>
				</Container>
			</Section>
			<Section title="Projects">
				<Container>
					<Jobs />
				</Container>
			</Section>
			<Section title="Skills"></Section>
			<Contact />
		</div>
	);
}

export default Content;
