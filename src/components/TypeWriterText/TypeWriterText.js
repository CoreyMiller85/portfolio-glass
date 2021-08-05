import Typewriter from "typewriter-effect";
import "./_TypeWriterText.scss";

const TypeWriterText = (props) => {
	return (
		<div className="typewriter">
			{" "}
			<Typewriter
				options={{
					strings: ["React Developer", "Corey Miller"],
					autoStart: true,
					loop: true,
				}}
			/>
		</div>
	);
};

export default TypeWriterText;
