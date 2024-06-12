import React from 'react'

export default function About(props) {
  return (
    <div className='container' style={{color: props.mode==='light'?"#042743":"white"}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'?"white":"#032c4d", color: props.mode==='light'?"black":"white"}}>
                    <strong>Introduction</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='light'?"white":"#042743", color: props.mode==='light'?"black":"white"}}>
                    Welcome to TextUtils, your ultimate solution for efficient text processing. Designed for students, writers, and professionals, TextUtils offers quick text summaries, seamless text conversion to uppercase or lowercase, and easy text copying. Our intuitive interface ensures a smooth user experience, accessible to everyone. Built with React JS, TextUtils guarantees fast performance and modern features. Simplify your text tasks with TextUtils today!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light'?"white":"#032c4d", color: props.mode==='light'?"black":"white"}}>
                    <strong>Features</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='light'?"white":"#042743", color: props.mode==='light'?"black":"white"}}>
                <p>TextUtils offers powerful features for efficient text management:</p>

                1. <strong>Text Summary:</strong> Instantly get word and character counts along with estimated reading time.<br/>
                2. <strong>Text Conversion:</strong> Easily convert your text to uppercase or lowercase with a single click.<br/>
                3. <strong>Copy Text:</strong> Quickly copy your text to the clipboard for easy pasting elsewhere.<br/>
                4. <strong>User-Friendly Interface:</strong> Enjoy a seamless and intuitive experience, accessible to users of all skill levels.<br/>
                5. <strong>Modern Technology:</strong> Built with React JS for fast performance and a smooth user experience.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='light'?"white":"#032c4d", color: props.mode==='light'?"black":"white"}}>
                    <strong>Our Vision</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='light'?"white":"#042743", color: props.mode==='light'?"black":"white"}}>
                At TextUtils, our vision is to become the leading online text utility tool by continuously enhancing our features based on user feedback and technological advancements. We aim to provide a reliable and efficient platform that saves time and boosts productivity for users worldwide. We prioritize accessibility and user experience, ensuring that our tool is usable by everyone, including those with disabilities. We are committed to maintaining the highest standards of privacy and security for our users. Our goal is to expand our functionality, integrating more advanced text processing tools and features to meet diverse user needs.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
