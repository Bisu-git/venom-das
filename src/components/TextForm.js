import React, {useState} from "react";

export default function TextForm(props) {
    

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleextraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Text Here.");

    return (
        <>
        <div className="container">
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}    >Convert To Upper Case</button>
            <button className="btn btn-secondary mx-1" onClick={handleLowClick}>Convert To Lower Case</button>
            <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-secondary mx-1" onClick={handleextraspace}>Remove Ext Space</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}