import React, { useState } from 'react';
import './calculator.css'
import { Box, Container } from '@mui/material';

export default function Calculator(){
    
    const [num,setNum] = useState(0)
    const [oldNum,setOldNum] = useState(0)
    const [operador, setOperador] = useState('')

    console.log('operador é '+operador)
    console.log('num é '+num)
    console.log('oldnum é '+oldNum)
    
    function inputNum(e){
        var input = e.target.value;
            if(num === 0){
                setNum(0)
                setNum(input);
            }
            else{
                setNum(num + input);
            }
    }
    function ac(e){
        setOperador()
        setNum(0)
        setOldNum(0)
    }
    function maismenos(e){
        setNum(parseFloat(num)*-1)
    }
    function porcento(e){
        setNum(parseFloat(num)/100)
    }
    function operar(e){
        setOperador('')
        var input = e.target.value
        setOperador(input)
        setOldNum(num)
        setNum(0)
    }
    
    function igual(){
        if(operador === '/'){//divisão
            setNum(parseFloat(oldNum)/parseFloat(num))}
        else if(operador === '*'){
            setNum(parseFloat(oldNum)*parseFloat(num))}
        else if(operador === '+'){//divisão
            setNum(parseFloat(oldNum)+parseFloat(num))}
            console.log(parseFloat(oldNum)+parseFloat(num))
        console.log(num)
    }
    function ponto(e){
        var input = e.target.value
        setNum(input)
    }
    function up(){
        document.getElementById("botao").style="--color: rgb(100% 100% 100% / 0.2"
    }
    return(
        <div>
        <Box m={6}/>
            <Container maxWidth='xs'> 
                
                <div className='wrapper'>
                    <h1 className='result'>{num}</h1>
                    <button id="botao" onMouseUp={up} onClick={ac} value={0}>AC</button>
                    <button id="botao" onClick={maismenos} value={num}>+/-</button>
                    <button id="botao" onClick={porcento} value={num}>%</button>
                    <button id="botao" className='orange' onClick={operar} value={'/'}>÷</button>
                    <button id="botao" onMouseUp={up} className='grey' onClick={inputNum} value={7}>7</button>
                    <button id="botao" className='grey' onClick={inputNum} value={8}>8</button>
                    <button className='grey' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operar} value={'*'}>x</button>
                    <button className='grey' onClick={inputNum} value={4}>4</button>
                    <button className='grey' onClick={inputNum} value={5}>5</button>
                    <button className='grey' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operar} value={'-'}>-</button>
                    <button className='grey' onClick={inputNum} value={1}>1</button>
                    <button className='grey' onClick={inputNum} value={2}>2</button>
                    <button className='grey' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operar} value={'+'}>+</button>
                    <button className='grey'  onClick={inputNum} value={0}style={{width:"6.3em"}}>0</button>
                    <button className='grey'>.</button>
                    <button className='orange' onClick={igual} value={operador}>=</button>  
                </div>
        </Container>
       </div>
    )
}