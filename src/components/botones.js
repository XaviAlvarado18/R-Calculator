import './botones.css';
import React from 'react';


const Botones = ({icon,color}) =>(
    <div className='button-w' style={{backgroundColor: color}}>{icon}</div>
);

export default Botones;