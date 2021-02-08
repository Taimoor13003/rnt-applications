import React from 'react'
import './index.css'
export default function ProjectCover(props) {
    return (
        <div className=""  >
            <h1 className="text-warning  cover-text position-absolute text-center text-uppercase " style={{left:"50%",transform:"translate(-50%)",zIndex:"5",maxWidth:"2500px",width:"100%" ,top:"110px",textShadow:"3px 3px 3px black" ,fontFamily:"sans-serif",letterSpacing:"18px" ,overflow:"hidden", }}>{props.Heading}</h1>
             <div className="ProjectCover "> </div>
        </div>
    )
}
