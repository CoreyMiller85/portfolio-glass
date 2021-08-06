import React from "react";
import Section from "../Section/Section";
const Contact = () => {
	return (
		<Section title="Contact Me">
			<form>
				<label htmlFor="name">
					Name:
					<input type="text" name="name" />
				</label>
				<label htmlFor="email">
					Email:
					<input type="email" name="email" />
				</label>
				<label htmlFor="message">
					Message:
					<textarea
						rows="5"
						id="message-box"
						name="message-box"
						class="messageBox"
						placeholder="Type your message here"
						pattern="^[a-zA-Z1-9].*"
						required=""
					></textarea>
				</label>
				<button>Send</button>
			</form>
		</Section>
	);
};

export default Contact;
