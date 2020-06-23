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
					cellColor = {cellColor}
					rowIndex = {props.rowIndex}
					colIndex = {index}
					colorCell = {props.colorCell}
				/>
			)}
		</tr>
	);
}

export default Row;