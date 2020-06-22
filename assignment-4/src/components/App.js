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
			chosenColor: "white"
		};
  	}

	// addRow = () => {
	// 	this.grid.addRow();
	// }

	addRow = () => {
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
		}
		else {
			this.setState(
				{numRows: currentNumRows + 1},
				function (){
					console.log(this.state.numRows);
				}
				);
		}
		let addedRow = <Row
			ref = {nextRow => this.nextRow = nextRow}
			numCols = {currentNumCols}
			chosenColor = {this.state.chosenColor}
		/>;
		if (this.state.numRows === 1){
			currentRows = [addedRow];
		}
		else{
			currentRows.push(addedRow);
		}
		// console.log(this.state.numRows);
		this.setState({rows: currentRows});
	}

	render(){
   	return(
      	<table>
        		<button onClick = {this.addRow}>Add Row</button>
				<Grid 
					rows = {this.state.rows}
					numCols = {this.state.numCols}
					numRows = {this.state.numRows}
					chosenColor = {this.state.chosenColor}
				/>
      	</table>
    	);
  	}
}

export default App;