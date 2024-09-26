import{useRef, useState} from "react";
const Bmitext=({Bmi})=>{
    if(Bmi<18.5)
        return (<h1>UnderWeight</h1>);
    if(Bmi>=30)
        return(<h1>OverWeight</h1>);
    return(<h1>Normal</h1>);
}

export default function Bmi(){

    const W_input = useRef(null);
    const h_input= useRef(null);
    const[Bmi,setBmi]=useState(0);
  
    function handleClick(){
        let weight=W_input.current.value;
        let height=h_input.current.value/100;
        setBmi(weight/(height*height));
    }
    return (<>weight:<input ref={W_input}/> kg.<br/>height:<input ref={h_input}/>cm.<br/>

    <button onClick={handleClick}>calculate</button><br/>
    BMI:{Bmi.toFixed(2)}
    <Bmitext Bmi={Bmi}/></>);
}


