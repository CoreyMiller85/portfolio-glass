import React from "react";
import Section from "../Section/Section";
import emailjs from "emailjs-com";

import "./_Contact.scss";

const Contact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_rxcv3wi",
				"template_p8onx9r",
				e.target,
				"user_N96NhZlNAe8XTpWbD5BCs"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<Section title="Contact Me">
			<form className="contact__form" onSubmit={sendEmail}>
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
