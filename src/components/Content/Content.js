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
				<Container></Container>
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
