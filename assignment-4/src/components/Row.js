import React from 'react';
import Cell from './Cell.js';

/*
	Row is a display component
	It takes props
	And returns a <tr> of Cell objects
*/
const Row = (props) => {
	return (
		// For each element of a row array,
		// Map it to a Cell object with a given color
		<tr>
			{props.cols.map((cellColor, index) => 
				<Cell
					// Cell payload: color
					cellColor = {cellColor}
					// Indexing to access a specific cell
					rowIndex = {props.rowIndex}
					colIndex = {index}
					// Cell-coloring function
					colorCell = {props.colorCell}
					// Depress toggle function
					depress = {props.depress}
				/>
			)}
		</tr>
	);
}

export default Row;