import Particles from "react-tsparticles";
import TypeWriterText from "../TypeWriterText/TypeWriterText";
import "./_HeroParticles.scss";

const HeroParticles = () => {
	const particlesInit = (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		<div className="particles">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: "transparent",
						},
					},
					fpsLimit: 60,
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 6,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 5,
						},
					},
					detectRetina: true,
				}}
			/>
			<TypeWriterText className="testblah" />
		</div>
	);
};

export default HeroParticles;
