import Typewriter from "typewriter-effect";
import "./_TypeWriterText.scss";

const TypeWriterText = (props) => {
	return (
		<div className="typewriter">
			{" "}
			<h6>
				<Typewriter
					options={{
						strings: ["React", "Node", "Front-End", "Full-Stack"],
						autoStart: true,
						loop: true,
					}}
				/>
				<span className="developer">Developer</span>
			</h6>
		</div>
	);
};

export default TypeWriterText;
