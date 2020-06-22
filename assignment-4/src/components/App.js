import React, {Component} from 'react';
import Grid from "./Grid.js"
import Row from "./Row.js"

class App extends Component{
  	constructor(props){
   	super(props);
		 
		this.state = {
			// grid: <Grid 
			// 	// I think this might all be unnecessary
			// 	rows={[]} 
			// 	numRows={0} 
			// 	numCols={0} 
			// 	//chosenColor={this.state.chosenColor} 
			// />,
			rows: [],
			numRows: 0,
			numCols: 0,
			chosenColor: "white",
			depressed: false,
		};
  	}

	// addRow = () => {
	// 	this.grid.addRow();
	// }

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
				function (){
					console.log(this.state.numRows);
				}	
			);
			let addedCell = "white";
			addedRow.push(addedCell);
		}
		else {
			this.setState(
				{numRows: currentNumRows + 1},
				function (){
					console.log(this.state.numRows);
				}
			);
			for (let i = 0; i < currentNumCols; i++){
				let addedCell = "white";
				addedRow.push(addedCell);
			}
		}
		currentRows.push(addedRow);
		// console.log(this.state.numRows);
		this.setState({rows: currentRows});
	}

	render(){
		const { addRow, addCol, removeRow, removeCol, fillUncolored, fillAll, clear, chooseColor, setCellColor, activeColoring, setActive, setInactive } = this;
    	const { rows, color, activeDrawing } = this.state;
   	return(
			<div>
				<button onClick = {this.addRow}>Add Row</button>			
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