import React, {Component} from 'react';
import Grid from "./Grid.js"

/*
	App is a control component
	It holds the table state in `rows`
	It has control UI (buttons)
	It has a display object Grid
*/
class App extends Component{
	// Constructor for App component
  	constructor(props){
   	super(props);
		
		// State initialized to empty table
		this.state = {
			rows: [],
			numRows: 0,
			numCols: 0,
			chosenColor: "White",
			depressed: false,
		};

		this.depress = this.depress.bind(this);
  	}

	// Add Row function
	addRow = () => {
		// Create a new array which will hold the new row to be added
		let addedRow = [];
		// Access the current table state `rows`
		var currentRows = this.state.rows;
		const currentNumRows = this.state.numRows;
		const currentNumCols = this.state.numCols;
		// If there is nothing in the table, now there should be a 1x1 table
		if (currentNumRows === 0){
			this.setState(
				{
					numRows: 1,
					numCols: 1
				},	
			);
			let addedCell = "White";
			addedRow.push(addedCell);
		}
		// Otherwise, add one row to the table
		else {
			this.setState(
				{numRows: currentNumRows + 1},
			);
			// Add `currentNumCols` number of new cells to the row to be added
			for (let i = 0; i < currentNumCols; i++){
				let addedCell = "White";
				addedRow.push(addedCell);
			}
		}
		// Update table state
		currentRows.push(addedRow);
		this.setState({rows: currentRows});
	}

	// Add column function
	addCol = () => {
		// Access the current table state `rows`
		var currentRows = this.state.rows;
		const currentNumRows = this.state.numRows;
		const currentNumCols = this.state.numCols;
		// If there is nothing in the table, now there should be a 1x1 table
		if (currentNumRows === 0){
			let addedRow = [];
			let addedCell = "White";
			addedRow.push(addedCell);			
			currentRows.push(addedRow);
			this.setState(
				{
					numRows: 1,
					numCols: 1,
				},	
			);
		}
		// Otherwise, add one cell to each row of the table
		else {
			this.setState(
				{numCols: currentNumCols + 1},
			);
			for (let i = 0; i < currentNumRows; i++){
				let addedCell = "White";
				currentRows[i].push(addedCell);
			}
		}
		// Update table state
		this.setState({rows: currentRows});

		// Need to bind App's `this` for functions passed to Cell

	}

	// Remove row function
	removeRow = () => {
		const currentNumRows = this.state.numRows;
		// If there are fewer than 2 rows, the table is now empty
		if (currentNumRows < 2){
			this.setState(
				{
					numRows: 0,
					numCols: 0,
					rows: [],
				},	
			);
		}
		// Otherwise, remove the last row of the table
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

	// Remove Column function
	removeCol = () => {
		const currentNumCols = this.state.numCols;
		const currentNumRows = this.state.numRows;
		// If there are fewer than 2 columns, the table is now empty
		if (currentNumCols < 2){
			this.setState(
				{
					numRows: 0,
					numCols: 0,
					rows: [],
				},	
			);
		}
		// Otherwise, iterate through each row array and delete the last element representing a cell
		else{
			let currentRows = this.state.rows;
			for (let i = 0; i < currentNumRows; i++){
				currentRows[i].pop();
			}
			this.setState(
				{
					numCols: currentNumCols - 1,
					rows: currentRows
				}
			);
		}
	}

	// Color selection function
	selectColor = (selection) => {
		this.setState({ 
			chosenColor: selection.target.value 
		});
	}

	// DRY function which implements all three mass change functions
	changeAll(newColor, onlyBlank) {
		var selectedColor;
		const currentNumCols = this.state.numCols;
		const currentNumRows = this.state.numRows;
		if (newColor) {
			selectedColor = this.state.chosenColor;
		}
		else {
			selectedColor = "White";
		}
		var currentRows = this.state.rows;
		for (let i = 0; i < currentNumRows; i++){
			for (let j = 0; j < currentNumCols; j++){
				if (!onlyBlank || currentRows[i][j] === "White"){
					currentRows[i][j] = selectedColor;
				}
			}
		}
		this.setState({
			rows: currentRows
		});
	}

	// Fill All with chosen color function
	fillAll = () => {
		this.changeAll(true, false);
	}


	// Fill All Uncolored with chosen color function
	fillUncolored = () => {
		this.changeAll(true, true);
	}


	// Clear All function
	clearAll = () => {
		this.changeAll(false, false);
	}

	// Cell coloring function
	// To be passed as a prop to grid -> row -> cell
	colorCell = (rowIndex, colIndex, isClick) => {
		if (isClick) console.log("click");
		if (!(isClick || this.state.depressed)) return;

		var currentRows = this.state.rows;
		const currentColor = this.state.chosenColor;
		currentRows[rowIndex][colIndex] = currentColor;
		this.setState({
			rows: currentRows
		});
	}

	depress(toggle) {
		if (toggle) {
			// console.log(this);
			this.setState({
				depressed: true
			});
		}
		else {
			this.setState({
				depressed: false
			});
		}
	}

	// Render function
	render(){
   	return(
			<div>
				{/* Button Div */}
				<div>
					<button onClick = {this.addRow}>Add Row</button>
					<button onClick = {this.addCol}>Add Column</button>
					<button onClick = {this.removeRow}>Remove Row</button>
					<button onClick = {this.removeCol}>Remove Column</button>
					<select onChange={this.selectColor}>
						<option value="White">White</option>
						<option value="Red">Red</option>
						<option value="Orange">Orange</option>
						<option value="Yellow">Yellow</option>
						<option value="Green">Green</option>
						<option value="Blue">Blue</option>
						<option value="Indigo">Indigo</option>
						<option value="Violet">Violet</option>
					</select>
					<button onClick = {this.fillAll}>Fill All</button>
					<button onClick = {this.fillUncolored}>Fill All Uncolored</button>
					<button onClick = {this.clearAll}>Reset Colors</button>
				</div>
				{/* Table Object holding Grid */}			
				<table>
					<Grid 
						// 2D array of colored cells
						rows = {this.state.rows}
						// Tally of dimensions
						numCols = {this.state.numCols}
						numRows = {this.state.numRows}
						// Cell-coloring function
						colorCell = {this.colorCell}
						// Depress toggle function
						depress = {this.depress}
					/>
				</table>
			</div>
    	);
  	}
}

export default App;