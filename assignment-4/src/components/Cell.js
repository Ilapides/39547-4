import React from 'react';
import '../styles/Cell.css';

/*
	Cell is a display object
	It takes props
	And returns a <td> element with a background color

	It also responds to mouse events
*/
const Cell = (props) => {
	return (
		<td
			style={{
				backgroundColor: props.cellColor
			}}
			onClick = {() => {
				props.colorCell(props.rowIndex, props.colIndex);
			}}
		/>
	);
}

export default Cell;