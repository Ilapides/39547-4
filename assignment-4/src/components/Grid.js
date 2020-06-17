import React, {Component} from 'react';
import Row from './Row.js';

class Grid extends Component{
	constructor(props){
		super(props);

		this.state = {
			rows: [],
			numRows: 0,
			numCols: 0,
			chosenColor: this.props.chosenColor
    	};
	}
	
	addRow = () => {
		const currentNumRows = this.state.numRows;
		const currentNumCols = this.state.numCols;
		if (currentNumRows == 0){
			this.setState({
				numRows: 1,
				numCols: 1
			});
		}
		else {
			this.setState({numRows: currentNumRows + 1});
		}
		let addedRow = <Row
			ref = {nextRow => this.nextRow = nextRow}
			numCols = {currentNumCols}
			chosenColor = {this.state.chosenColor}
		/>;
		if (this.state.numRows === 1){
			var currentRows = [addedRow];
		}
		else{
			var currentRows = this.state.rows;
			currentRows.push(addedRow);
		}
		console.log(this.state.numRows);
		this.setState({rows: currentRows});
	}

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
			{this.state.rows}
			</tbody></table>
      );
   }
}

export default Grid;