import Typewriter from "typewriter-effect";
import "./_TypeWriterText.scss";

const TypeWriterText = (props) => {
	return (
		<div className="typewriter">
			{" "}
			<Typewriter
				onInit={(typewriter) => {
					typewriter

						.typeString("Corey Miller")

						.pauseFor(1000)
						.deleteAll()
						.typeString("React Developer")
						.start();
				}}
			/>
		</div>
	);
};

export default TypeWriterText;
