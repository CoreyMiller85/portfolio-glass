import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { IoMdCodeWorking } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

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
					<a href="#about-me">
						<span class="title-full">About Me </span>
						<span class="title-icon">
							<BsPersonFill />
						</span>
					</a>
				</li>
				<li className="header__item">
					<a href="#projects">
						<span class="title-full">Projects </span>
						<span class="title-icon">
							<IoMdCodeWorking />
						</span>
					</a>
				</li>
				<li className="header__item">
					<a href="#skills">
						<span class="title-full">Skills </span>
						<span class="title-icon">
							<IoLogoReact />
						</span>
					</a>
				</li>
				<li className="header__item">
					<a href="#contact">
						<span class="title-full">Contact </span>
						<span class="title-icon">
							<AiOutlineMessage />
						</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
