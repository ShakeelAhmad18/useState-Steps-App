import React from "react";
import './App.css'
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step,setsteps]=useState(1)
const handleNext=()=>{
if(step < 3)  setsteps(
    step+1
)
}

const handlePrevious=()=>{
if (step > 1) setsteps(
    step-1
)
}
   
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >=1 ? "active" : ""}>1</div>
        <div className={step >=2 ? "active" : ""}>2</div>
        <div className={step >=3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}:{messages[step-1]}
      </p>
      <div className="buttons">
        <button style={{backgroundColor:'#7859fe' ,color:"#fff"}} onClick={handlePrevious}>
          Previous
        </button>
        <button style={{backgroundColor:'#7859fe', color:'#fff'}} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
