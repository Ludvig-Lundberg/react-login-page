import axios from "axios";
import {} from "react";
import { useMutation } from "react-query";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const LoginPage = () => {
	const mutation = useMutation((info: any) => {
		console.log(baseUrl);
		return axios.post(baseUrl + "/login", info);
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		const { username, password } = formJson;
		mutation.mutate({ username, password });
	};

	return (
		<div className="account-form-container">
			<form className="account-form" onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="username">
					<input className="account-form-input" name="username" type="text" placeholder="Username" />
				</label>
				<label htmlFor="password">
					<input className="account-form-input" name="password" type="text" placeholder="Password" />
				</label>
				<button type="submit" className="account-form-button">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
