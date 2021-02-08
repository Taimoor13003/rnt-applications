import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function index() {
    AOS.init();
    return (
        <section className="d-sec2  ">
            <div className="d-sec2img ">
                <img src={`${require('../../../../images/a2.jpg')}`} data-aos="zoom-in" alt=" " className="a1" />
                <div >
                    <h1 className="img-head">3D Calligraphy AYATULKURSI ON White Marble...</h1>
                </div>
                <img src={`${require('../../../../images/a3.jpg')}`} data-aos="zoom-in" alt=" " className="a3" />
            </div>
        </section>
    )
}
