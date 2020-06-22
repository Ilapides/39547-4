import React, {Component} from 'react';
import '../styles/Cell.css';

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