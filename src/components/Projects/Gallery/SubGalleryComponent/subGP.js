import React, { Component } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import './subGP.css'

export default class subGP extends Component {
    render() {
        return (
            <div>

                <section className="gallery pt-5">

                    <div className="gallery-pic">
                        <div><img alt="" src="" /></div>
                    </div>

                </section>



                <section className="gallery-modal">
                    <img src="" className="modal-img" />
                    <p className="modal-text">

                    </p>
                    <button onClick={(e) => this.nextHandler(e)}><IoIosArrowBack className="modal-arrow1" /></button>
                    <button onClick={(e) => this.nextHandler(e)}><IoIosArrowBack className="modal-arrow2" /></button>

                </section>
            </div>
        )
    }
}
