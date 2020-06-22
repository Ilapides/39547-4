import React, {Component} from 'react';
import Cell from './Cell.js';

class Row extends Component{
	constructor(props){
		super(props);
		console.log("hello");
		this.state = {
			numCols: this.props.numCols,
			chosenColor: this.props.chosenColor,
			thisRow: this.props.thisRow,
		};
		//this.Row = this.Row.bind(this);
	}

	addCell = () => {
		let currentRow = this.state.thisRow;
		let newCell = <Cell chosenColor = {this.state.chosenColor}/>;
		currentRow.push(newCell);
		this.setState({thisRow: currentRow});
	}

	makeRow = (numColumns, chosenColor) => {
		let row = [];
		console.log(this);
		for (let i = 0; i < numColumns; i++){
			row.push(<Cell chosenColor = {chosenColor}/>);
		}
		return row;
	}
	
	render(){
		return (<tr>{this.state.thisRow}</tr>);
   }
}

export default Row;