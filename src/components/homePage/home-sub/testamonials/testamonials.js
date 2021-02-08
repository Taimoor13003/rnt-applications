import React, { Component } from 'react'
import './testamonials.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaQuoteLeft } from 'react-icons/fa'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", transform: "scale(2)", background: "yellow", borderRadius: "50px", boxShadow: "1px 1px 5px rgb(0,0,0,.2)" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", transform: "scale(2)", background: "yellow", borderRadius: "50px", boxShadow: "1px 1px 5px rgb(0,0,0,.2)" }}
            onClick={onClick}
        />
    );
}

export default class testamonials extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,

            // autoplay: true,
            // autoplaySpeed: 5000,
            cssEase: "linear",
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            pauseOnHover: false
        };
        return (
            <div>
                {/* <!--/testimonials--> */}
                <section className="testimonials banner-bottom  " id="clients">
                    <div className="container cover-img">
                        <h3 className="tittle cen text-center testimonial-h3 text-warning ">What our clients say</h3>
                        <div className="inner-sec">
                            <div className="">
                                <Slider className="mx-5" {...settings}>

                                    <div className="testamonial">
                                        <div className="item  ">
                                            <div className="feedback-info text-left  ">
                                                <div className="feedback-top">
                                                    <div className="icon-test">
                                                        {/* <i className="fas fa-quote-left"></i> */}
                                                        <FaQuoteLeft className="text-warning" />
                                                    </div>
                                                    <div className="row">
                                                        <p className="text-warning  col-8 h-100 " >Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna
                                                        Sed semper leo metus, a lacinia eros semper at. Etiam sodales orci sit amet vehicula pellentesque.consectetur adipisicing
									elit sedc dnmo eiusmod tempor incididunt ut labore et dolore </p>
                                                        <img className="col-4  h-100" src={`${require('../../../../images/gallery1/1.jpg')}`} />
                                                    </div>
                                                </div>
                                                <div className="feedback-grids">
                                                    <div className="feedback-img text-warning ">
                                                        <img src={`${require('../../../../images/naya1.jpg')}`} className="img-fluid rounded-circle" alt="" />
                                                    </div>
                                                    <div className="feedback-img-info">
                                                        <h5 className="text-warning" >Steven Wilson</h5>
                                                        <p className="text-warning" >United States
										<span>(Company)</span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div>


                                        <div className="item">
                                            <div className="feedback-info text-left">
                                                <div className="feedback-top">
                                                    <div className="icon-test">
                                                        <i className="fas fa-quote-left"></i>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna
                                                    Sed semper leo metus, a lacinia eros semper at. Etiam sodales orci sit amet vehicula pellentesque.consectetur adipisicing
									elit sedc dnmo eiusmod tempor incididunt ut labore et dolore </p>
                                                </div>
                                                <div className="feedback-grids">
                                                    <div className="feedback-img">
                                                        <img src={`${require('../../../../images/naya1.jpg')}`} className="img-fluid rounded-circle" alt="" />
                                                    </div>
                                                    <div className="feedback-img-info">
                                                        <h5>Peter guptill</h5>
                                                        <p>Vestibulum</p>
                                                    </div>
                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="item">
                                            <div className="feedback-info text-left">
                                                <div className="feedback-top">
                                                    <div className="icon-test">
                                                        <i className="fas fa-quote-left"></i>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna
                                                    Sed semper leo metus, a lacinia eros semper at. Etiam sodales orci sit amet vehicula pellentesque.consectetur adipisicing
									elit sedc dnmo eiusmod tempor incididunt ut labore et dolore </p>
                                                </div>
                                                <div className="feedback-grids">
                                                    <div className="feedback-img">
                                                        <img src={`${require('../../../../images/naya1.jpg')}`} className="img-fluid rounded-circle" alt="" />
                                                    </div>
                                                    <div className="feedback-img-info">
                                                        <h5>Mary Jane</h5>
                                                        <p>United States
										<span>(Company)</span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>










                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--//testimonials--> */}
            </div>
        )
    }
}
