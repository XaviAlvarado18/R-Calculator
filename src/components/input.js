import './input.css';
import React from 'react';

const Input =({texto,resultado})=>{

    return( 
    <div className='input-w'>
        <div className='resultado'>
            <h1>{resultado}</h1>
        </div>

        <div className='input_text'>
            <h3>{texto}</h3>
        </div>

    </div>
    )
}

export default Input;