import React,{useState} from "react";
import './app.css';
import Botones from "./components/botones";
import Input from "./components/input";
import * as math from "mathjs";


console.log("PUNTO Y COMA")

const App =()=>{

    const[text,setTexto] = useState("0 ")
    const[resultado,setResultado] = useState("")
    const [Vresult, setVResult] = useState([]);
    const [numberInput, setNumberInput] = useState(false);



    const addText = (val) => {
        if (text === "0 " || numberInput === true) {
            setNumberInput(false)
            setTexto((val.toString()+" "));
            Vresult.push(val)
        }else if(val === "+" || val === "-" || val === "/" || val === "*"){
            setNumberInput(true)
            setVResult((Vresult) => [...Vresult,val])
        }
        else if (val === "1" || val === "2" || val === "3" || val === "4" || val === "5" || val === "6" || val === "7" || val === "8" || val === "9" || val === "0"|| val === "." || val === "%"){
            setTexto((text) => [...text, val + " "]); 
            Vresult.push(val)
            setNumberInput(false)
        }
        console.log(Vresult)
        setResultado("")
    }

    const reset = () =>{
        setVResult([])
        setTexto("0 ")
        setResultado("")
    }

    const calcularResultado = () =>{
        const parser = math.parser()
        const input = Vresult.join("")
        setResultado(parser.evaluate(input))
    }

    return(
        <div className="app">
            <div className='calc-w'>
                <Input texto={text} resultado={resultado}/>
                <div className='filas'>
                    <Botones icon='C' color='#afb0b5' handleClick={reset}/>
                    <Botones icon='±' color='#afb0b5' handleClick={addText}/>
                    <Botones icon='%' color='#afb0b5' handleClick={addText}/>
                    <Botones icon='/' color='#f98410' handleClick={addText}/>
                </div>
                <div className='filas'>
                    <Botones icon='7' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='8' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='9' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='*' color='#f98410' handleClick={addText}/>
                </div>
                <div className='filas'>
                    <Botones icon='4' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='5' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='6' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='-' color='#f98410' handleClick={addText}/>
                </div>
                <div className='filas'>
                    <Botones icon='1' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='2' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='3' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='+' color='#f98410' handleClick={addText}/>
                </div>
                <div className='filas'>
                    <Botones icon='0' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='.' color='#c7c7c7' handleClick={addText}/>
                    <Botones icon='=' color='#f98410' handleClick={calcularResultado}/>
                </div>
            </div>
        </div>
    )
};

export default App;