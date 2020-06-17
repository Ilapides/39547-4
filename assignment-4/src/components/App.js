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

	addRow = () => {
		this.grid.addRow();
	}

	render(){
   	return(
      	<div>
        		<button onClick = {this.addRow.bind(this)}>Add Row</button>
				<Grid ref={grid => this.grid = grid}
					chosenColor = {this.state.chosenColor}
				/>
      	</div>
    	);
  	}
}

export default App;