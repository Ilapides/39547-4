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
			onClick = {
				() => {
					props.clickColorCell(props.rowIndex, props.colIndex)
				}
			}
			onMouseDown = { 
				() => {
					props.depress(true);
				}
			}
			onMouseUp = {
				() => {
					props.depress(false);
				}
			}
			onMouseOver = {
				() => {
					props.dragColorCell(props.rowIndex, props.colIndex);
				}
			}
		/>
	);
}

export default Cell;