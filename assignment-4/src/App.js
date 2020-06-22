import React, {Component} from 'react';
import './App.css';

// A class for our app
class App extends Component {
  // A constructor for the app component
  constructor(props){
    // Must always call super(props)
    super(props);

    // Initialize State
    this.state = {
      // We'll use white as blank
      chosenColor: "white",
      // Starts with 0 rows
      rows: 2,
      // and 0 columns
      cols: 2,
      // and the click flag deasserted
      mouseDepressed: false
    };
    
  }
  
  // addRow = () => {
  //   const {numRows, numCols} = this.state;

  // }

  // addCol = () => {
  //   const {numRows, numCols} = this.state;

  // }

  // removeRow = () => {
  //   const {numRows, numCols} = this.state;


  // }

  // removeCol = () => {
  //   const {numRows, numCols} = this.state;


  // }

  // // reset?

  // chooseColor = (e) => {

  // }


  // fillAll = () => {
  //   const {numRows, numCols, chosenColor} = this.state;

  // }

  // fillUncolored = () => {
  //   const {numRows, numCols, chosenColor} = this.state;

  // }

  // clearGrid = () => {
  //   const {numRows, numCols} = this.state;

  // }

  // onMouseRelease = (e) => {

  // }

  // onMouseDown = (e) => {

  // }

  // clickAndDrag = (e) => {

  // }

  getRow () {
    return (
      <tr>
        <td>Hi</td>
         <td>How</td>
         <td>Are</td>
         <td>You</td>
      </tr>
    )
  }


  getTable() {
    const row = this.getRow();
    return  (
      <tbody>
        row
      </tbody>
   )
  }

  // Function which will render our app
  render () {
    return (
      <div>
        <table id = "replace">
            {this.getTable()}
        </table>
      </div>
     )
  }
}



export default App;
