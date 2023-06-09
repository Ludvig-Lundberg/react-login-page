import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className="header">
			<nav className="nav-header">
				<button className={showMenu ? "menu-button menu-button-active" : "menu-button"} onClick={() => setShowMenu(!showMenu)}>
					<i className="fa-solid fa-bars"></i>
				</button>
				<h1 className={showMenu ? "logo" : "logo"}>
					<Link className="logo-link" to={"/"}>
						App
					</Link>
				</h1>
				<div id="menu-wrapper" className={showMenu ? "menu-wrapper menu-active" : "menu-wrapper menu-inactive"}>
					{showMenu && (
						<ul className="menu-list">
							<li className="menu-item" style={{ animationDelay: "0.1s" }}>
								<Link className="menu-link" to={"/login"}>
									Login
								</Link>
							</li>
							<li className="menu-item" style={{ animationDelay: "0.15s" }}>
								<Link className="menu-link" to={"/about"}>
									About
								</Link>
							</li>
							<li className="menu-item" style={{ animationDelay: "0.20s" }}>
								<Link className="menu-link" to={"/contact"}>
									Contact
								</Link>
							</li>
						</ul>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
