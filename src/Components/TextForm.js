import React, { useState } from 'react'

export default function TextForm(props) {
    const countWords = (str) => {
        let words;
        if (text == "") {
    
          words = 0;
        } else {
          words = str.trim().split(/\s+/).length;
        }
        return words;
      };
      
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    // const handleInverseClick = () => {
    //     // let newText = text.tocamelcase();
    //     // setText(newText);
        
    //     return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    //         return index == 0 ? word.toLowerCase() : word.toUpperCase();
    //     }).replace(/\s+/g, '');
    //     props.showAlert("Converted to camelcase!", "success");
    // }

    const handleClear = () => {
        let clearText = (" ");
        setText(clearText);
        props.showAlert("Text cleared!", "success");

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");

    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); //correct way to change the state

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white': '#042743'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e': 'white', color: props.mode === 'dark' ? 'white': 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleDownClick} >Convert to Lowercase</button>
                {/* <button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleInverseClick} >Convert to Inversecase</button> */}
                <button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleClear} >Clear text</button>
                <button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleCopy} >Copy text</button>
                <button type="button" disabled = {text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white': '#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}
