import React from 'react';
import Row from './Row.js';
// style

/*
   Grid is a display object
   It takes the rows array from app
   And displays a table of Row objects
*/
const Grid = ({rows}) => {
   return(
      <tbody>
         {rows.map((col, index) => (
				<Row
            	key={index}
               cols={col}
				/>
			))}
      </tbody>
    )
};

export default Grid;