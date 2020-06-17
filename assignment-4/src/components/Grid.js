import React, {Component} from 'react';
import Row from './Row.js';

class Grid extends Component{
	constructor(props){
		super(props);

		this.state = {
			rows: this.props.rows,
			numRows: this.props.numRows,
			numCols: this.props.numCols,
			chosenColor: this.props.chosenColor
    	};
	}
	
	//addRow()

	makeRows = () => {
		let currentRows = [];
		console.log(this.state.numRows);
		for (let i = 0; i < this.state.numRows; i++){
			currentRows.push(
				<Row 
					numCols = {this.state.numCols}
					chosenColor = {this.state.chosenColor} 
				/>
			)
		}
		return currentRows;
	}


	render(){
      return (
         <table><tbody>
			{this.makeRows()}
			</tbody></table>
      );
   }
}

export default Grid;