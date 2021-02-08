import React, { Component } from 'react'
import './footer.css'

import { FaFacebook ,FaInstagram} from "react-icons/fa";
export default class footer extends Component {
    render() {
        return (
            <footer className=" footer-color my-0 py-0 position-relative  " style={{height:"auto",zIndex:"0"}}  >
                <div className="d-flex flex-wrap mx-auto  py-0 px-5 " style={{maxWidth:"1000px"}}  >
                    <div className="col-8" >

                        <div className="mt-3 " >
                            <p style={{maxWidth:"400px"}} className=" mx-auto text-capitalize font-weight-bold" >From home decor to big projects , RMT offers complete solution for crafting decor.</p>
                            <p className="mx-auto  text-center" >
                                <span style={{fontSize:"25px"}} >CONTACT US:</span>
                             <FaFacebook className="ml-2 f-icon text-primary "  /> <FaInstagram className="  ml-2 f-icon text-danger "  />

                            </p>
                        </div>

                    </div>
                    <div className="col-4  position-relative " style={{top:"50%" ,transform:"translateY(0%)"}} >
                    <img style={{height:"100%" , width:"auto",maxWidth:"100%",maxHeight:"180px" }}  className="d-block footer-image" src={`${require('../../images/logo2.png')}`} />

                    </div>

                </div>
                <div className="col-12  py-2 " >
                <h5 className="text-center py-0 my-0 text-white " >Copyright © 2019 RMT Enterprises. All Rights Reserved.</h5>
                </div>

            </footer>
        )
    }
}
