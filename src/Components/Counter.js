import React,{useState} from "react";
import Style from './Style.css';
import Button from './Button.js';

const Counter=()=>{

    const[changeColor,setChangeColor]=useState(false);
    const [num,setNum]=useState(0);

     const incNum=()=>{
     setNum(num+10);
     };


    const handleClick=()=>{
    setChangeColor(!changeColor);
    }


       return(

           <div className="first"    >
         
                <div className="main"  >
                <div className="circle" style={{backgroundColor: changeColor ? "blue" : "red"}}   >
                <Button num={num} />
              <span onClick={incNum}> Click to Increase Counter </span>
                </div>
                </div>

                <button  onClick={()=>{
                  incNum();
                  handleClick();
                 }} 
                 className="btn2"  
                 style={{backgroundColor: changeColor ? "blue" : "red"}}  >ChangeColor</button>
        
       </div>
       )
    }  
  export default Counter;