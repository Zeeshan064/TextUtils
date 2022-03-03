import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
// import { SketchPicker } from "react-color";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	///color picker
	// const [color, setColor] = useState("#fff");
	// const [show, setShow] = useState(false);
	const [mode, setMode] = useState("light");
	const [mod, setMod] = useState("Enable DarkMode");
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#212529";
			setMod("Enable lightMode");
			showAlert("Dark mode is enable", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			setMod("Enable DarkMode");
			showAlert("Light mode is enable", "success");
		}
	};
	///color picker
	// const abc = () => {
	// 	setShow(!show);
	// };
	return (
		<>
			{/* <Router> */}
			{/*  show={abc} */}
			<Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode} change={mod} />
			{/* <Navbar /> */}
			<Alerts alert={alert} />
			<div className="container my-3">
				{/* ///color picker */}
				{/* {show && (
					<SketchPicker
						color={color}
						onChangeComplete={(color) => {
							setColor(color.hex);
						}}
					/>
				)}

				<div
					style={{
						backgroundColor: color,

						height: "300px",
						transition: "ease all 500ms"
					}}
				>
					Hello
				</div> */}
				{/* <Routes>
						<Route exact path="/about" element={<About />} />

						<Route
							exact
							path="/form"
							element={ */}
				<TextForm showAlert={showAlert} heading="Enter text form" mode={mode} />

				{/* // 					}
		// 				/>
		// 			</Routes>
		// 		</div>
		// 		<div className="container">{/* <About  /> */}
			</div>
			{/* // 	</Router> */}
		</>
	);
}

export default App;
