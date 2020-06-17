import React, {Component} from 'react';
import Cell from './Cell.js';

class Row extends Component{
	constructor(props){
		super(props);
		console.log("hello");
		this.state = {
			thisRow: [],
			numCols: this.props.numCols,
			chosenColor: "white"
    	};
	}

	makeRow = () => {
		let row = [];
		for (let i = 0; i < this.numCols; i++){
			row.push(<Cell chosenColor = {this.state.chosenColor}/>);
		}
		return row;
	}
	
	render(){
		return (<tr>{this.makeRow()}</tr>);
   }
}

export default Row;