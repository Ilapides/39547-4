import React, {Component} from 'react';
import Row from './Row.js';
// style

const Grid = ({ rows, color, setCellColor, setActive, activeColoring, activeDrawing, setInactive }) => {
    
    return(
        <tbody
            className="main-grid"
            //if mouse leaves gird, sets activeDrawing to false
            onMouseLeave={function () { setInactive() }}
            //if mouseup in grid, sets activeDrawing to false
            onMouseUp={function () { setInactive() }}
        >
            {rows.map((col, index) => (<Row
                key={index}
                cols={col}
                color={color}
                indexr={index}
                setCellColor={setCellColor}
                setActive={setActive}
                activeColoring={activeColoring}
                activeDrawing={activeDrawing}
                setInactive={setInactive} />))}

        </tbody>
    )
};

export default Grid;