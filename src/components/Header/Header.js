import React from "react";

const Header = () => {
	return (
		<div className="header__main">
			<div className="header__logo">
				<h1>
					<a href="#">Corey Miller</a>
				</h1>
				<h4 className="header__logo--sub">Full-Stack Web Developer</h4>
			</div>
			<ul className="header__list">
				<li className="header__item">
					<a href="#">About Me</a>
				</li>
				<li className="header__item">
					<a href="#">Projects</a>
				</li>
				<li className="header__item">
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
