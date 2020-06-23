import React from 'react';
// styles

const Buttons = ({addRow, addCol, removeRow, removeCol, selectColor, fillAll, fillUncolored, clearAll}) => {
	return (
		<div>
			<button onClick = {addRow}>Add Row</button>
			<button onClick = {addCol}>Add Column</button>
			<button onClick = {removeRow}>Remove Row</button>
			<button onClick = {removeCol}>Remove Column</button>
			<br/>
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
	);
}

export default Buttons