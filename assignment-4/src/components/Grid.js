import React, {Component} from 'react';
import Row from './Row.js';
// style

const Grid = ({ rows, chosenColor, setCellColor, setActive, activeColoring, activeDrawing, setInactive }) => {
   return(
      <tbody
         className="grid-table"
            // //if mouse leaves grird, sets activeDrawing to false
            // onMouseLeave={function () { setInactive() }}
            // //if mouseup in grid, sets activeDrawing to false
            // onMouseUp={function () { setInactive() }}
      >
         {rows.map((col, index) => (
				<Row
            	key={index}
               cols={col}
               chosenColor={chosenColor}
               indexr={index}
               setCellColor={setCellColor}
               setActive={setActive}
               activeColoring={activeColoring}
               activeDrawing={activeDrawing}
               setInactive={setInactive} 
				/>
			))}
      </tbody>
    )
};

export default Grid;