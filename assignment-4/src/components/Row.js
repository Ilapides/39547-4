import React, {Component} from 'react';
import Cell from './Cell.js';

class Row extends Component{
	// constructor(props){
	// 	super(props);
	// 	console.log("hello");
	// 	this.state = {
	// 		numCols: this.props.numCols,
	// 		chosenColor: this.props.chosenColor,
	// 		thisRow: this.props.thisRow,
	// 	};
	// 	//this.Row = this.Row.bind(this);
	// }

	// addCell = () => {
	// 	let currentRow = this.state.thisRow;
	// 	let newCell = <Cell chosenColor = {this.state.chosenColor}/>;
	// 	currentRow.push(newCell);
	// 	this.setState({thisRow: currentRow});
	// }

	// makeRow = (numColumns, chosenColor) => {
	// 	let row = [];
	// 	console.log(this);
	// 	for (let i = 0; i < numColumns; i++){
	// 		row.push(<Cell chosenColor = {chosenColor}/>);
	// 	}
	// 	return row;
	// }
	
	render(){
		return (
			<tr>
				{this.props.cols.map((cellColor, index) => 
					<Cell
               	cellColor={cellColor}
               	key={index}
                	color={this.props.color}
                	indexc={index}
               	indexr={this.props.indexr}
                	setCellColor={this.props.setCellColor}
                	setActive={this.props.setActive}
                	activeColoring={this.props.activeColoring}
                	activeDrawing={this.props.activeDrawing}
                	setInactive={this.props.setInactive}
					/>
				)}
			</tr>
		);
   }
}

export default Row;