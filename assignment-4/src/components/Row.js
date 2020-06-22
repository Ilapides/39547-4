import React, {Component} from 'react';
import Cell from './Cell.js';

class Row extends Component{
	
	render(){
		return (
			<tr>
				{this.props.cols.map((cellColor, index) => 
					<Cell
               	cellColor={cellColor}
               	key={index}
					/>
				)}
			</tr>
		);
   }
}

export default Row;