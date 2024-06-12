import React, {useState} from 'react'   

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const wordCount = (str) => {
        str = str.trim();
        if (str.length === 0) {
            return 0;
        }
        return str.split(/\s+/).length;
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        setshowAlert(true);
        setTimeout(() => setshowAlert(false), 3000);
    };

    const [showAlert, setshowAlert] = useState(false);

    const [text, setText] = useState(''); 
    return (
        <>
            <div className='container my-5' style={{color: props.mode==='light'?"#042743":"white"}}>
                <div className='d-flex justify-content-between align-items-center my-3'>
                    <h1>Try TextUtils</h1>
                    <div className="copy">
                        <button className="flex gap-1 items-center" onClick={handleCopyClick} style={{backgroundColor: props.mode==='light'?"white":"#042743", color: props.mode==='light'?"black":"white"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm">
                                <path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd"></path>
                            </svg>Copy text
                        </button>
                        {showAlert && (
                            <div className="alert-overlay alert alert-success d-flex align-items-center" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='none' viewBox="0 0 16 16" className="success">
                                    <path fill="currentColor" fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" clipRule="evenodd"></path>
                                </svg>
                                <div className='mx-2'>
                                    Text copied to clipboard
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter text here' style={{backgroundColor: props.mode==='light'?"white":"#032c4d", color: props.mode==='light'?"black":"white"}} value={text} onChange={handleOnChange} id="Textbox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary btn-lg" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-primary btn-lg mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>
            <div className="container my-4" style={{color: props.mode==='light'?"#042743":"white"}}>
                <h1>Your Text Summary</h1>
                <p>{wordCount(text)} words and {text.length} characters</p>
                <p>{0.005 * wordCount(text)} minutes to read above text</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Write Something in above textbox to preview"}</p>
            </div>
        </>
    )
}
