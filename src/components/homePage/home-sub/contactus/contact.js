import React, { Component } from 'react'
import './contact.css'
import { FaMap, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import Sub from './subContact'
import emailjs from 'emailjs-com';
import { connect } from 'react-redux'


class contact extends Component {

    state = {
        contactCards: [
            { icon: <FaMap className="text-warning light-mode " style={{ fontSize: "30px" }} />, h1txt: "Address", ptxt: "Karachi , Pakistan" },
            { icon: <FaEnvelope className="text-warning light-mode " style={{ fontSize: "30px" }} />, h1txt: "Email", aLink: <a href="mailto:taimoorghori@rocketmail.com" style={{ fontSize: "15px", wordWrap: "break-word" }}>taimoorghori@rocketmail.com</a> },
            { icon: <FaMobileAlt className="text-warning light-mode  " style={{ fontSize: "30px" }} />, h1txt: "Phone", ptxt: "+92 310250098" }
        ],
        Name: "",
        Subject: "",
        Email: "",
        PhoneNumber: "",
        Message: "",
    }

    messageHandler = (e) => {
        let data = e.target
        if (!this.state.Name) return alert('Name invalid')
        if (!this.state.Subject) return alert('Subject invalid')
        if (!this.state.Email) return alert('Email invalid')
        if (!this.state.PhoneNumber) return alert('PhoneNumber invalid')
        if (!this.state.Message) return alert('Message invalid')
        let btn = document.getElementById('checkBtn')
        btn.disabled = true
        e.preventDefault()
        emailjs.sendForm('gmail', process.env.REACT_APP_EMAIL_TEMP, data, process.env.REACT_APP_EMAIL_KEY)
            .then((result) => {
                btn.disabled = false
                alert('message sent')
            }, (error) => {
                btn.disabled = false
                alert("Something Is Wrong.... Email Sending Failed. \n\ Please Come Back Later")
            })
    }
    render() {
        return (
            <div >
                {/* <!-- contact --> */}
                <section className="contact dark-mode bg-white" id="">
                    <h3 className="tittle  text-center text-warning py-5 light-mode "> Get In Touch </h3>
                    <div className="inner ">
                        <div className="map ">
                            <iframe

                                src={process.env.REACT_APP_MAP}
                                allowFullScreen></iframe>
                            <div>
                                <div ref={this.props.scrollDiv} className="col-lg-7 col-md-10 col-11 shadow container  py-5 mt-5 rounded" >
                                    <h1 className="text-center text-dark">Contact Us</h1>
                                    {/* data-aos-delay="0" data-aos-duration="500" */}
                                    <form onSubmit={this.messageHandler} >
                                        <div className="form-group container">
                                            <label className=" px-0 mx-0 font-weight-bold text-dark mt-2" >Name</label> <br />
                                            <input onChange={(e) => { this.setState({ Name: e.target.value }) }} data-aos="fade-down" data-aos-delay="0" data-aos-duration="500" type="text" className="form-control shadow-sm" name="name" />
                                            <label className=" px-0 mx-0 font-weight-bold text-dark mt-2" >Subject</label> <br />
                                            <input onChange={(e) => { this.setState({ Subject: e.target.value }) }} data-aos="fade-down" data-aos-delay="0" data-aos-duration="500" type="text" className="form-control shadow-sm" name="subject" />
                                            <label className=" px-0 mx-0 font-weight-bold text-dark mt-2">Email</label><br />
                                            <input onChange={(e) => { this.setState({ Email: e.target.value }) }} data-aos="fade-down" data-aos-delay="0" data-aos-duration="500" type="email" className="form-control shadow-sm" name="email" />

                                            <label className=" px-0 mx-0 font-weight-bold text-dark mt-2">Phone Number</label> <br />
                                            <input onChange={(e) => { this.setState({ PhoneNumber: e.target.value }) }} data-aos="fade-down" data-aos-delay="0" data-aos-duration="500" type="number" className="form-control shadow-sm " name="phonenumber" />
                                            <label className=" px-0 mx-0 font-weight-bold text-dark mt-2">Message</label> <br />
                                            <textarea onChange={(e) => { this.setState({ Message: e.target.value }) }} data-aos="fade-down" type="text" className="form-control shadow-sm " style={{ height: "100px" }} name="message" />
                                            <input id="checkBtn" data-aos="fade-down" data-aos-delay="0" data-aos-duration="500" type="submit" className="btn light-mode -lg btn-warning border-0 text-white w-100 mt-2 rounded" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="row container mx-auto py-5  ">
                                {this.state.contactCards.map((card) => {
                                    return (

                                        <Sub
                                            icon={card.icon}
                                            h1txt={card.h1txt}
                                            ptxt={card.ptxt}
                                            Link={card.aLink}
                                        />
                                    )
                                })}



                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        admin: (rights) => dispatch({ type: "ADMIN", payload: rights })
    }
}

export default connect(null, mapDispatchToProps)(contact)