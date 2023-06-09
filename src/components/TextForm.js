 import React, {useState} from 'react'
 
 export default function TextForm(props) {
    const handleUpClick = ()=>{
      console.log("uppercase was ckicked"+ text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase", "success")
    
    }

    const handleLoClick = ()=>{
      console.log("uppercase was ckicked"+ text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase", "success");
    
    }

    const handleOnchange =(event)=>{
      console.log("On change");
      setText(event.target.value);

    }
    const handlCopy =() =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard", "success");
    }

    const handleExtraSpaces = ( )=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra Spaces", "success");
      
    }
    const [text, setText] = useState('Enter text here2');
   return (
    <>
     <div className='container' style={{color:props.mode==='dark'?'white':'#0e2f4c'}}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
           
           <textarea className="form-control" value = {text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'#0e2f4c'}} id="myBox" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
         <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
         <button className="btn btn-primary mx-3" onClick={handlCopy}>Copy text</button>
         <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove extra spaces</button>
     </div>
     <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0e2f4c'}} >
     <h1> Your text summary</h1>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
     </div>

     </>
   )
 }
 