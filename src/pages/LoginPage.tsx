import axios from "axios";
import {} from "react";
import { useMutation } from "react-query";
import { encodeToBase64 } from "../services/encoder";
import { Link, useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
export let encoded: string;

const LoginPage = () => {
	const navigate = useNavigate();
	const mutation = useMutation((info: any) => {
		return axios.post(baseUrl + "/login", info);
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		const { username, password } = formJson;

		encoded = encodeToBase64(username.toString(), password.toString());
		mutation.mutate({ credentials: encoded });
	};

	if (mutation.isSuccess) {
		navigate("/todos");
	}

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
					Login
				</button>
				<div className="account-form-response">
					{mutation.isLoading ? (
						"Loading"
					) : (
						<>
							{mutation.isError ? <div>Check username and password</div> : null}

							{mutation.isSuccess ? <p>loggin in</p> : null}
						</>
					)}
				</div>
			</form>
			<Link to={"/register"}>Don't have account? - Register</Link>
		</div>
	);
};

export default LoginPage;
