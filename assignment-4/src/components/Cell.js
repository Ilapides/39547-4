import React from 'react';
import '../styles/Cell.css';

/*
	Cell is a display object
	It takes props
	And returns a <td> element with a background color
*/
const Cell = (props) => {
	return (
		<td
			style={{
				backgroundColor: props.cellColor
			}}
		/>
	);
}

export default Cell;