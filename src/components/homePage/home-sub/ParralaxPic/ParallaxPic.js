import React, { Component } from 'react'
import simpleParallax from 'simple-parallax-js';
import {Link} from 'react-router-dom'
export default class ParallaxPic extends Component {
    componentDidMount() {
        var image = document.getElementsByClassName('thumbnail');
        new simpleParallax(image);
    }
    render() {
        return (
            <div className="cover-img position-relative thumbnail">
                <div className=" position-absolute text-capitalize rellax "></div>
                <div className="position-absolute seven-under   text-white mx-auto" style={{ zIndex: "10", top: "55%", left: "50%", transform: "translate(-50%,-50%)", maxWidth: "800px" }} >
                    <h1 className="position-relative  text-warning  " >Currently Working on World's Third largest mosque once built.<Link to="/projects" ><button   className="btn btn-outline-warning text-white">Click to see more Projects</button> </Link></h1>
                    <p className="position-relative  text-whyite  " >We are currently working in collaboration with one of the biggest companies of Pakistan in the construction of
                    the Grand Jamia Mosque in Bahria town Karachi. once completed this mosque will be the 3rd largest mosque in
                    the world and we are proud to be the part of its formation.</p>
                </div>
            </div>
        )
    }
}
