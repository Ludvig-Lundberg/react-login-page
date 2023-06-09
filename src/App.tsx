import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<>
			<Navigation />
			<main className="main">
				<Routes>
					<Route path="/" element={<Homepage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
