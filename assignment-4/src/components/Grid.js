import React from 'react';
import Row from './Row.js';

/*
   Grid is a display object
   It takes the rows array from app
   And displays a table of Row objects
*/
const Grid = ({rows, clickColorCell, dragColorCell, depress}) => {
   return(
      <tbody className = "centerTable">
         {rows.map((col, index) => (
				<Row
            	rowIndex = {index}
               cols = {col}
               clickColorCell = {clickColorCell}
               dragColorCell = {dragColorCell}
               depress = {depress}
				/>
			))}
      </tbody>
    )
};

export default Grid;