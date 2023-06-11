import axios from "axios";
import {} from "react";
import { useMutation } from "react-query";
import { encodeToBase64 } from "../services/encoder";
import { Link } from "react-router-dom";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const RegisterPage = () => {
	const mutation = useMutation((info: any) => {
		return axios.post(baseUrl + "/register", info);
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		const { username, password } = formJson;

		const encoded = encodeToBase64(username.toString(), password.toString());
		mutation.mutate({ credentials: encoded });
	};

	return (
		<div className="account-form-container">
			<form className="account-form" onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="username">
					<input className="account-form-input" name="username" type="text" placeholder="Username" />
				</label>
				<label htmlFor="password">
					<input className="account-form-input" name="password" type="password" placeholder="Password" />
				</label>
				<button type="submit" className="account-form-button">
					Register
				</button>
				<div className="account-form-response">
					{mutation.isLoading ? (
						"Loading"
					) : (
						<>
							{mutation.isError ? <div>Check username and password ❌</div> : null}

							{mutation.isSuccess ? <div>Registered ✔️</div> : null}
						</>
					)}
				</div>
			</form>
			<Link to={"/login"}>Already have account? - Login</Link>
		</div>
	);
};

export default RegisterPage;
