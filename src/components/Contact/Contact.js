import React from "react";
import Section from "../Section/Section";
import "./_Contact.scss";
const Contact = () => {
	return (
		<Section title="Contact Me">
			<form className="contact__form">
				<label htmlFor="name" className="contact__name-label">
					Name:
					<input type="text" name="name" className="contact__name-input" />
				</label>
				<label htmlFor="email" className="contact__email-label">
					Email:
					<input type="email" name="email" className="contact__email-input" />
				</label>
				<label htmlFor="message" className="contact__message-label">
					Message:
					<textarea
						rows="5"
						id="message-box"
						name="message-box"
						className="contact__message-textarea"
						placeholder="Type your message here"
						pattern="^[a-zA-Z1-9].*"
						required=""
					></textarea>
				</label>
				<button className="contact__button">Send</button>
			</form>
		</Section>
	);
};

export default Contact;
