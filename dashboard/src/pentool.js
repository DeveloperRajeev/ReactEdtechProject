import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Pentool () {

const [isdrawing, setIsDrawing] = useState(false);
const [color, setColor] = useState('#000000');
const [lineWidth, setLineWidth] = useState(5);
const drawingRef = useRef(null);

const startDrawing =() =>{
    setIsDrawing(true);
}
const draw = (e) => {
    if (!isdrawing) return;
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.backgroundColor = color;
    dot.style.width = `${lineWidth}px`;
    dot.style.height = `${lineWidth}px`;
    dot.style.borderRadius = '50%';
    dot.style.left = `${e.pageX - lineWidth / 2}px`;
    dot.style.top = `${e.pageY - lineWidth / 2}px`;
    drawingRef.current.appendChild(dot);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  }

  const clearDrawing = ()=> {
    drawingRef.current.innerHTML = '';
  }



return(
    <div>
        <h1>Fuck this Pen Tool</h1>
        <div ref={drawingRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        style={
            {width : '100vw',
                height : '100vh',
                position : 'relative',
                cursor : 'crosshair',
            }
        } ></div>

        <div>
            <button onClick={clearDrawing} >Clear</button>
            <input type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)} />
            <input type='range'
            value={lineWidth}
            min='1'
            max = "20"
            onChange={(e) => setLineWidth(e.target.value)} />
        </div>
    </div>

)

}

export default Pentool ;
