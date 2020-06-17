import React, {Component} from 'react';
import '../styles/Cell.css';

class Cell extends Component{
	constructor(props){
		super(props);

		this.state = {
			backgroundColor: "white",
			chosenColor: this.props.chosenColor
		}
	}

   render(){
		console.log("cell render?");
      return(
			<>
         <td className="singleCell">
         </td>
			</>
   	);
   }
}

export default Cell;