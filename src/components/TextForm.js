import React, { useState } from "react";
export default function TextForm(props) {
	const handleOnclick = (event) => {
		setText(event.target.value);
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert(" Converted to upper case", "success");
	};
	const handleClearClick = (event) => {
		setText(event.target.value);
		let newText = "";
		setText(newText);
		props.showAlert(" Clear", "success");
	};
	const handleOnchange = (event) => {
		setText(event.target.value);
	};
	const [text, setText] = useState("");

	return (
		<>
			<div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						value={text}
						onChange={handleOnchange}
						style={{
							backgroundColor: props.mode === "dark" ? "gray" : "white",
							color: props.mode === "dark" ? "white" : "black",
							caretColor: props.mode === "dark" ? "red" : "black"
						}}
						id="exampleFormControlTextarea1"
						rows="3"
					></textarea>
					<button className="btn btn-primary my-3" onClick={handleOnclick}>
						convert to uppercase
					</button>
					<button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>
						Clear
					</button>
				</div>
			</div>
			<div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
				<h1>This is summary</h1>
				<p>
					{text.length > 0 ? text.trim().split(/\s+/).length : 0} word and characters{text.length}
				</p>

				{/* How much minutes to read words */}
				<p>{0.008 * text.split(" ").length} Minutes read</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Enter something to preview the text"}</p>
			</div>
		</>
	);
}
