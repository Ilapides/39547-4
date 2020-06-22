import React, {Component} from 'react';
import Row from './Row.js';
// style

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