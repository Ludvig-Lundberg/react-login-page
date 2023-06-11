import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodosPage from "./pages/TodosPage";

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

					<Route path="/todos" element={<TodosPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
