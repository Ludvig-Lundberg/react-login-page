import axios from "axios";
import {} from "react";
import { useMutation } from "react-query";

const url = import.meta.env.BASE_URL;

const LoginPage = () => {
	const mutation = useMutation((info: any) => {
		return axios.post(url + "/login", info);
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
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="username">
					<input name="username" type="text" placeholder="Username" />
				</label>
				<label htmlFor="password">
					<input name="password" type="text" placeholder="Password" />
				</label>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginPage;
