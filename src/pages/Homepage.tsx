import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<>
			<div className="intro">
				<div className="intro-content">
					<i className="fa-solid fa-user intro-icon"></i>
					<h2 className="intro-title">Create an Account</h2>
					<p className="intro-text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime deleniti perferendis nihil, delectus, totam aut nostrum ut eaque a suscipit ratione. Molestias dignissimos
						error deleniti est tempore hic ipsum eos.
					</p>
				</div>
				<div className="intro-content">
					<i className="fa-solid fa-bolt-lightning intro-icon"></i>
					<h2 className="intro-title">Lightning Fast</h2>
					<p className="intro-text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ex nihil? Sequi, dolorum cum sit error laboriosam architecto tempora neque numquam itaque tenetur. Debitis,
						similique. Cumque deleniti eum adipisci dolor?
					</p>
				</div>
				<div className="intro-content">
					<i className="fa-solid fa-gear intro-icon"></i>
					<h2 className="intro-title">Do stuff!</h2>
					<p className="intro-text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quia dolor sed, quae rerum eos magni quis soluta porro est accusamus culpa sequi molestias esse adipisci ipsum
						explicabo, velit libero!
					</p>
				</div>
				<div className="intro-content">
					<button className="intro-button">
						<Link to={"/login"}>Get Started</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Homepage;
