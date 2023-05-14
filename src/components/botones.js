import './botones.css';
import React from 'react';


const Botones = ({icon,color, handleClick}) =>{
    return(
        <div 
            onClick={() => handleClick(icon) } 
            className='button-w' 
            style={{backgroundColor: color}}>{icon}
        </div>
    )
};

export default Botones;