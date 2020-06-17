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
			chosenColor: "white"
		};
  	}


	addRow = () => {
		console.log(this.state.numRows);
		const currentNumRows = this.state.numRows;
    	if (currentNumRows === 0){
			this.setState({
				numRows: 1,
				numCols: 1
			});
		}
		else {
			this.setState({numRows: currentNumRows + 1});
		}
		let currentRows = this.state.rows;
		currentRows.push(<Row numCols = {this.state.numCols}></Row>);
      // 	let newCell = "placeholder";
      // 	let newRow = [];
      // 	newRow.push(newCell);
      // 	existingRows.push(newRow);
    	// }
    	// else{
      // 	let newRow = [];
      // 	for (let i = 0; i < this.numRows; i++){
      //   		let newCell = "placeholder";
      //   		newRow.push(newCell);
      // 	}
      // 	existingRows.push(newRow);
		// }

	}

	render(){
   	return(
      	<div>
        		<button onClick = {this.addRow}>Add Row</button>
				<Grid 
					rows={this.state.rows} 
					numRows={this.state.numRows} 
					numCols={this.state.numCols} 
					chosenColor={this.state.chosenColor} 
				/>
      	</div>
    	);
  	}
}

export default App;