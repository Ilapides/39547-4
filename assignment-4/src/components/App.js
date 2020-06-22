import React, {Component} from 'react';
import Grid from "./Grid.js"
import Row from "./Row.js"

class App extends Component{
  	constructor(props){
   	super(props);
		 
		this.state = {
			rows: [],
			numRows: 0,
			numCols: 0,
			chosenColor: "white",
			depressed: false,
		};
  	}

	addRow = () => {
		let addedRow = [];
		var currentRows = this.state.rows;
		const currentNumRows = this.state.numRows;
		const currentNumCols = this.state.numCols;
		if (currentNumRows === 0){
			this.setState(
				{
					numRows: 1,
					numCols: 1
				},	
			);
			let addedCell = "white";
			addedRow.push(addedCell);
		}
		else {
			this.setState(
				{numRows: currentNumRows + 1},
			);
			for (let i = 0; i < currentNumCols; i++){
				let addedCell = "white";
				addedRow.push(addedCell);
			}
		}
		currentRows.push(addedRow);
		this.setState({rows: currentRows});
	}

	removeRow = () => {
		const currentNumRows = this.state.numRows;
		if (currentNumRows < 2){
			this.setState(
				{
					numRows: 0,
					numCols: 0,
					rows: [],
				},	
			);
		}
		else{
			let currentRows = this.state.rows;
			currentRows.pop();
			this.setState(
				{
					numRows: currentNumRows - 1,
					rows: currentRows,
				},	
			);
		}
	}

	render(){
   	return(
			<div>
				<button onClick = {this.addRow}>Add Row</button>
				<button onClick = {this.removeRow}>Remove Row</button>			
				<table>
					<Grid 
						rows = {this.state.rows}
						numCols = {this.state.numCols}
						numRows = {this.state.numRows}
						chosenColor = {this.state.chosenColor}
					/>
				</table>
			</div>
    	);
  	}
}

export default App;