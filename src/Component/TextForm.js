import React, { useState } from 'react';

export default function TextArea(props) {
  const [text, setText] = useState("Enter your text here");

  const convertToFunny = () => {
    let newText = "Kesa Laga Mera Mazaq......";
    setText(newText);
    props.showAlert("Converted to joke", "Success! ");
  };

  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success! ");
  };

  const handleOClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success! ");
  };

  const handleSpaces = () => {
    const newText = text.replace(/ +/g, ' ');
    setText(newText);
    props.showAlert("Removed Spaces", "Success! ");
  };

  const handleCapitalLetter = () => {
    const words = text.split(' ');
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const newText = capitalizedWords.join(' ');
    setText(newText);
    props.showAlert("Capitalized", "Success! ");
  };

  const handleReverseText = () => {
    const reversedText = text.split('').reverse().join('');
    setText(reversedText);
    props.showAlert("Text Reversed", "Success! ");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared", "Success! ");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        props.showAlert("Text Copied", "Success! ");
      })
      .catch((error) => {
        console.error("Error copying text:", error);
        props.showAlert("Text Copy Error", "Error! ");
      });
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'black' ? 'white' : 'black', display: 'flex', flexDirection: 'column' }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
        <textarea
            className="form-control"
            onChange={handleOnChange}
            name="myBox"
            id="firstTextBox"
            cols="100"
            rows="10"
            value={text}
            style={{ backgroundColor: props.mode === 'black' ? '#304263' : '#ebeaea', color: props.mode === 'black' ? 'white' : 'black' }}
          ></textarea>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleOnClick}>
            Convert to Uppercase
          </button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleOClick}>
            Convert to Lowercase
          </button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={convertToFunny}>
            Convert to Joke
          </button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>
            Remove Spaces
          </button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleCapitalLetter}>
            Capitalize First Letter
          </button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleReverseText}>
            Reverse Text
          </button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
            Clear Text
          </button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>
            Copy Text
          </button>
        </div>
      </div>

      <div className='container my-4' style={{ color: props.mode === 'black' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>
          Your text contains {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read the text</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something above to preview here..."}</p>
      </div>
    </>
  );
}
