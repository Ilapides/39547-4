import React from 'react';
import '../styles/Buttons.css';

const Buttons = ({addRow, addCol, removeRow, removeCol, selectColor, fillAll, fillUncolored, clearAll}) => {
	return (
		<div className = "center">
			<div className = "centerIn">
				<button onClick = {addRow}>Add Row</button>
				<button onClick = {addCol}>Add Column</button>
				<button onClick = {removeRow}>Remove Row</button>
				<button onClick = {removeCol}>Remove Column</button>
			</div>
			<div className = "centerIn">
				<select onChange={selectColor}>
					<option value="White">White</option>
					<option value="Red">Red</option>
					<option value="Orange">Orange</option>
					<option value="Yellow">Yellow</option>
					<option value="Green">Green</option>
					<option value="Blue">Blue</option>
					<option value="Indigo">Indigo</option>
					<option value="Violet">Violet</option>
				</select>
				<button onClick = {fillAll}>Fill All</button>
				<button onClick = {fillUncolored}>Fill All Uncolored</button>
				<button onClick = {clearAll}>Reset Colors</button>
			</div>
		</div>
	);
}

export default Buttons