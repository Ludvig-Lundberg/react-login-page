import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	return (
		<>
			<Navigation />
			<main className="main">
				<Routes>
					<Route path="/" element={<Homepage />} />

					{/* Login / Register */}
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
