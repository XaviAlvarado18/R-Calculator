import React from "react";
import './app.css';
import Botones from "./components/botones";
import Input from "./components/input";

const App =()=>(
    <div className="app">
        <div className='calc-w'>
            <Input/>
            <div className='filas'>
                <Botones icon='C' color='#afb0b5'/>
                <Botones icon='±' color='#afb0b5'/>
                <Botones icon='%' color='#afb0b5'/>
                <Botones icon='÷' color='#f98410'/>
            </div>
            <div className='filas'>
                <Botones icon='7' color='#c7c7c7'/>
                <Botones icon='8' color='#c7c7c7'/>
                <Botones icon='9' color='#c7c7c7'/>
                <Botones icon='x' color='#f98410'/>
            </div>
            <div className='filas'>
                <Botones icon='4' color='#c7c7c7'/>
                <Botones icon='5' color='#c7c7c7'/>
                <Botones icon='6' color='#c7c7c7'/>
                <Botones icon='-' color='#f98410'/>
            </div>
            <div className='filas'>
                <Botones icon='1' color='#c7c7c7'/>
                <Botones icon='2' color='#c7c7c7'/>
                <Botones icon='3' color='#c7c7c7'/>
                <Botones icon='+' color='#f98410'/>
            </div>
            <div className='filas'>
                <Botones icon='0' color='#c7c7c7'/>
                <Botones icon='.' color='#c7c7c7'/>
                <Botones icon='=' color='#f98410'/>
            </div>
        </div>
    </div>
);

export default App;