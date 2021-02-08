import React, { Component } from 'react'
import './services.css'
import { FaIndustry } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { BsGearFill, BsChat } from "react-icons/bs";
import Sub from './subService'


export default class services extends Component {
    state = {
        services: [
            {
                logo: < BsChat className="text-white light-mode  d-block btn-warning display-4 mb-3  mx-auto " style={{ textAlign: "center" }} />, heading: 'Technical Support',
                pTxt: " Technical Support Is Able To Answer Any Question You May Have. With Our Experts Available ,We provide Full-Time Online Free Service.Type Us To Order Or To Resolve Your Query.",
                btn: <button onClick={this.props.goTo} className="d-inline mt-auto  light-mode btn btn-warning  w-100 text-white">Type Us</button>
            },
            {
                logo: < BsGearFill className="text-white light-mode  d-block btn-warning display-4 mb-3  mx-auto " style={{ textAlign: "center" }} />, heading: 'Custom Designs',
                pTxt: " Apart from offering standard designs on marble and sandstones, we offer Customs designs for mosques,home decor and even offices fulfilling customer's criteria.",
                btn: <Link to="/designs" className="d-inline mt-auto " > <button className="light-mode btn btn-warning  w-100 text-white">Check Our Designs</button>  </Link>
            },
            {
                logo: < FaIndustry className="text-white light-mode  d-block btn-warning display-4 mb-3  mx-auto " style={{ textAlign: "center" }} />, heading: 'Industry Standard ',
                pTxt: "RMT has worked with countless indivisual customers and firms making us experienced enough to successfuly encounter any challenge we can possibly face. ",
                btn: <Link to="/projects" className="d-inline mt-auto " > <button className="light-mode btn btn-warning  w-100 px-1 text-white">View our Projects</button> </Link>
            }
        ]
    }

    render() {
        return (
            <div className="bg-light py-5 dark-mode">
                <h1  style={{ textAlign: "center" }} >What Do We Offer</h1>
                <div className=" d-flex py-5  text-capitalize" style={{ flexWrap: "wrap" }} >
                    {this.state.services.map((service, index) => {
                        return (
                            <Sub
                                Logo={service.logo}
                                heading={service.heading}
                                pTxt={service.pTxt}
                                btn={service.btn}
                            />
                        )
                    })}
                </div>
            </div >
        )
    }
}
