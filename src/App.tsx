import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<>
			<Navigation />
			<main className="main">
				<Routes>
					<Route path="/" element={<Homepage />} />

					{/* Login / Register */}
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
