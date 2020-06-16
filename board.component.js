import React from 'react';
import "./cell.css";

const options = [
    {key: 'Select a Color', value: 'White'},
    {key: 'Pink', value: 'Pink'},
    {key: 'Green', value: 'Green'},
    {key: 'Purple', value: 'Purple'},
    {key: 'Orange', value: 'Orange'}
]

class Board extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            colCount: 0,
            rowCount: 0,
            color: 'White',
            isClick: false
        };
        this.addR = this.addR.bind(this);
        this.addC = this.addC.bind(this);
        
    }


    addR()
    {
        this.setState((previousState, currentProps) =>  {
            return {
              rowCount: previousState.rowCount + 1
            };
          });
        if(this.state.colCount === 0)
        {
            this.setState(function(previousState, currentProps) {
                return {
                  colCount: previousState.colCount + 1
                };
              });
        }
    }

    addC(){
        this.setState(function(previousState, currentProps) {
            return {
              colCount: previousState.colCount + 1
            };
          });
          if(this.state.rowCount === 0)
          {
              this.setState(function(previousState, currentProps) {
                  return {
                    rowCount: previousState.rowCount + 1
                  };
                });
          }
    
    }

    selChanged = (event) => {
    
       var color;
       options.forEach(element => {
         
               if(event.target.value === element["key"])
               {
                    color = element["value"];
                    return;
               }
           
       });
       
        
       this.setState({
            color: color
        });
        
    }

    tdClick = (event) => {
        
        event.target.style.background = this.state.color;
        
    }
    tdMouseOver = (event) => {
        if(this.state.isClick === true)
            event.target.style.background = this.state.color;
    }

    componentDidMount(){
        window.addEventListener("mousedown", this.handleEvent);
        window.addEventListener("mouseup", this.handleEvent);
    }
  

    handleEvent = (event) => {
        if (event.type === "mousedown" && event.which === 1) {
               this.setState({ isClick: true });
           } else {
               this.setState({ isClick: false });
           }
       }
    componentWillUnmount(){
        window.removeEventListener("mousedown", this.handleEvent)
        window.removeEventListener("mouseup", this.handleEvent)
    }
    

    render() {
       
        
        return (
            
            <div>
                <button onClick={this.addR}>Add Row</button>
                <button onClick={this.addC}>Add Column</button>
                <button>Remove Row</button>
                <button>Remove Column</button>
                <button>Fill All Uncolored</button>
                <button>Fill Everything</button>
                <button>Clear All</button>
                <select id="SelectedID" onChange={this.selChanged}>
                    {
                        options.map((value, index) => {
                            return <option key={index}>{value.key}</option>
                        })
                    }
                    
                </select>

                <table id="table">
                    <tbody>
                    { 
                        [...Array(this.state.rowCount)].map((key1, i) => {
                            return (
                                <tr key = {`${i}`}>
                                    {
                                        [...Array(this.state.colCount)].map((key2, j) => {
                                            return (
                                                <td key={`td-${i}-${j}`} onClick={this.tdClick} onMouseOver={this.tdMouseOver} onMouseDown={this.tdClick}></td>
                                            )
                                        })
                                    }
                                </tr>
                                
                            )
                        })
                    }
                    </tbody>
               
                </table>
     
            </div>
        )
    };
}

export default Board;