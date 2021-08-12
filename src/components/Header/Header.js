import React from "react";

const Header = () => {
	return (
		<div className="header__main">
			<div className="header__logo">
				<h1>
					<a href="#root">
						<span className="header__first">Corey</span>{" "}
						<span className="header__last">Miller</span>
					</a>
				</h1>
				<h4 className="header__logo--sub">Full-Stack Web Developer</h4>
			</div>
			<ul className="header__list">
				<li className="header__item">
					<a href="#about-me">About Me</a>
				</li>
				<li className="header__item">
					<a href="#projects">Projects</a>
				</li>
				<li className="header__item">
					<a href="#skills">Skills</a>
				</li>
				<li className="header__item">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
