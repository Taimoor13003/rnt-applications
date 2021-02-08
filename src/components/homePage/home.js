import React, { Component } from 'react'
import './home.css'
import AOS from 'aos';
import ContactUs from './home-sub/contactus/contact'
import Services from './home-sub/services/services'
import MainCorousel from './home-sub/mainCorousel/mainCorousel'
import LatestDesigns from './home-sub/LatestDesigns/latestDesigns'
import ParallaxPic from './home-sub/ParralaxPic/ParallaxPic'
import eight from '../../images/10.png'

export default class home extends Component {
    
    scrollDiv = React.createRef()
    componentDidMount = () => {
        AOS.init();
    }
    goTo=()=>{
        this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    }
    render() {
        return (
            <div className="home-main-div"  >
                <div className="cover-caption" >
                    <h1 className="" >RMT ENTERPRISE</h1>
                    <p>Modern Marble Crafting Solution   &nbsp;
                    <button onClick={this.goTo} className="btn btn-outline-warning text-white  "> Contact Us </button>
                    </p>
                </div>
                <MainCorousel />
                <section className="section2 bg-white dark-mode my-5  "   >
                    <div className=" d-flex px-5" style={{ flexWrap: "wrap" }}  >
                        <div className="col-12  col-md-6  " data-aos="fade-up" data-aos-delay="0" data-aos-duration="500" >
                            <div className=" position-relative "
                                style={{ top: "50%", transform: "translateY(-50%)" }}
                            >
                                <h1 className="home-sec2  ">WHO ARE WE</h1>
                                <p className=" " >RMT Enterprise began operating in 2017 with the idea of introducing 3D crafting in marble using modern machines.
                                The tradition of handcrafting is outdated and offers Limited options when it comes to Design.
                                Keeping this in mind ,We entered the industry and it was a matter of time that RMT Enterprise turns out to be a game changer in the Industry .
                             <br />
                                    <br />
                             We offer grill work which is a pierced design through marbles and sandstones leaving the sections seethrough with smooth edges.
                            We also offer calligraphic designs engraved upon marble.
                               Today we are dealing with customers having a wide range of demands and Thanks to God almighty ,Customer reviews are tremendous .</p>
                                <button className="btn-lg btn-warning w-100 text-white light-mode  form-control" >Learn More</button>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="500" className="col-12  col-md-6   d-flex" style={{ justifyContent: " center", alignItems: "center " }} >
                            <img alt="" src={eight} className="sec-img shadow-lg light-mode" />
                        </div>
                    </div>
                </section>
                <Services goTo={this.goTo} />
                <LatestDesigns />
                <ParallaxPic />
                <ContactUs scrollDiv={this.scrollDiv} />
            </div>
        )
    }
}
