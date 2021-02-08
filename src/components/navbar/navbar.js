import React, { Component } from 'react'
import './navbar.css'
import logo from '../../images/logo2.png'
import { Link, Redirect, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
class navbar extends Component {
    state = {
        FunctionCount: false,
        navTop: true,
        redirect: false,
        smBtnDisabled: false
    }

    createClass = (name, rules) => {
        var style = document.createElement('style');
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
        if (!(style.sheet || {}).insertRule)
            (style.styleSheet || style.sheet).addRule(name, rules);
        else
            style.sheet.insertRule(name + "{" + rules + "}", 0);
    }


    darkHandler = () => {
        var btn = document.getElementById('dis')
        btn.disabled = true
        if (!this.state.FunctionCount) {
            this.createClass('.dark-mode', "filter: invert(100%);");
            this.createClass('.light-mode', "filter: invert(100%);");
            document.getElementById('root').style.backgroundColor = "black"
            this.props.darkMode(true)
            this.setState({ FunctionCount: true })
            return btn.disabled = false
        }
        if (!this.props.DarkMode) {
            this.createClass('.dark-mode', "filter: invert(100%);");
            this.createClass('.light-mode', "filter: invert(100%);");
            document.getElementById('root').style.backgroundColor = "black"
            this.props.darkMode(true)
            return btn.disabled = false
        }
        if (this.props.DarkMode) {
            this.createClass('.dark-mode', "filter:invert(0%)");
            this.createClass('.light-mode', "filter:invert(0%)");
            document.getElementById('root').style.backgroundColor = "white"
            this.props.darkMode(false)
            return btn.disabled = false
        }
    }

    navHandler = () => {
        let element = document.getElementById("nav-nav")
        let top = document.getElementById("topper")
        let line1 = document.getElementById("line1")
        let line2 = document.getElementById("line2")
        if (element.classList.contains("navi-length") && (window.innerWidth > 767)) {
            element.className = "navi"
            top.style.height = "60px"
            line1.classList = "start-line"
            line2.classList = "start-line"

        }
    }
    componentDidMount() {
        const navi = document.getElementById("nav-nav").style
        const logo = document.getElementById("logo").style
        const topper = document.getElementById("topper").style
        const doc = document.getElementById('pre-div').style
        navi.transition = "0s";
        topper.transition = "0s";
        logo.transition = "0s";
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            navi.padding = "0px 0px";
            navi.backgroundColor = "";
            logo.opacity = "1";
            topper.opacity = "1";
            logo.pointerEvents = "all";
            navi.boxShadow = "";
            navi.color = "";
            doc.opacity = 1
            doc.pointerEvents = "all"
            this.setState({ navTop: false });
        } else {
            this.setState({ navTop: true });
            doc.opacity = 0
            doc.pointerEvents = "none"
            navi.padding = "0px 0px ";
            navi.backgroundColor = "transparent";
            topper.opacity = "0";
            logo.opacity = "0";
            logo.fontSize = "35px";
            logo.pointerEvents = "none";
            navi.boxShadow = "none";

        }
        window.onload = () => {
            navi.transition = ".5s";
            logo.transition = ".5s";
            topper.transition = ".5s";
            window.onscroll = () => {
                if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
                    doc.opacity = 1
                    doc.pointerEvents = "all"
                    navi.padding = "0px 0px";
                    navi.backgroundColor = "";
                    logo.opacity = "1";
                    topper.opacity = "1";
                    logo.pointerEvents = "all";
                    navi.boxShadow = "";
                    navi.color = "";
                    doc.pointerEvents = "all"
                    this.setState({ navTop: false });
                } else {
                    this.setState({ navTop: true });
                    navi.padding = "0px 0px ";
                    navi.backgroundColor = "transparent";
                    topper.opacity = "0";
                    logo.opacity = "0";
                    logo.fontSize = "35px";
                    logo.pointerEvents = "none";
                    navi.boxShadow = "none";
                    doc.opacity = 0
                    doc.pointerEvents = "none"
                }
            };
        };

        window.addEventListener('resize', this.navHandler)
        if (this.props.DarkMode) {
            this.createClass('.dark-mode', "filter:invert(100%)");
            this.createClass('.light-mode', "filter:invert(100%)");
            this.setState({ FunctionCount: true })
            return document.getElementById('root').style.backgroundColor = "black"
        }
        try {
        } catch (error) {
        }
    }
    navDownHandler = () => {
        this.setState({ smBtnDisabled: true })
        this.lineHandler()
        document.getElementById("nav-nav").classList.toggle("navi-length")
        if (document.getElementById("nav-nav").classList.contains("navi-length")) {
            if (this.props.AdminPermission) {
                document.getElementById('topper').style.height = "400px"
                this.createClass('.navi-length', "height: 400px");
            } else
                this.createClass('.navi-length', "height: 330px");
            this.createClass('.navi-length', "transition: 1s");
            document.getElementById('topper').style.height = "330px"
        } else {
            document.getElementById('topper').style.height = "60px"
        }
        this.setState({ smBtnDisabled: false })

    }
    lineHandler = () => {
        document.getElementById("line1").classList.toggle("cross1")
        document.getElementById("line2").classList.toggle("cross2")
        if (document.getElementById("line1").className !== "start-line cross1") {
            document.getElementById("line1").classList.toggle("line1")
            document.getElementById("line2").classList.toggle("line2")
        }
    }
    lineHoverHandler = () => {
        const line1 = document.getElementById("line1").style
        const line2 = document.getElementById("line2").style
        if (this.state.navTop) {
            return (
                line1.color = "white",
                line2.color = "white"
            )
        }

        if (this.props.Darkmode && !this.state.navTop) {
            return (
                line1.color = "grey",
                line2.color = "grey"
            )
        }
        if (!this.props.Darkmode && !this.state.navTop) {
            return (
                line1.color = "grey",
                line2.color = "grey"
            )
        }
    }
    lineHoverOutHandler = () => {
        document.getElementById("line1").style.color = "rgb(155, 154, 154)"
        document.getElementById("line2").style.color = "rgb(155, 154, 154)"
    }
    logoutHandler = () => {
        localStorage.removeItem('token')
        this.props.change(false)
        this.setState({ redirect: true })
    }
    render() {
        if (this.state.redirect) return <Redirect to="/" />
        return (
            <div>
                <div className="position-fixed w-100 " id="topper" style={{ height: "60px", zIndex: "10", backdropFilter: "blur(5px) ", pointerEvents: "none", transition: ".5s" }} > </div>
                <nav className="bi1 w-100" >
                    <li className="li1 ">
                        <Link to="/" id="logo" >
                            <img id="nav-img1 " alt="logo" className="logo-img " src={logo} />
                        </Link>
                    </li>
                </nav>
                <nav id="nav-nav" className="navi dark-mode ">
                    <div className="menu">
                        <ul className="uli" >
                            <li className="li2 light-mode ">
                                <span id="nav-down"  >
                                    <button onClick={this.navDownHandler} disabled={this.state.smBtnDisabled} onMouseOver={() => this.lineHoverHandler()} onMouseLeave={() => this.lineHoverOutHandler()} id="line1" className="start-line ">|</button>
                                    <button onClick={this.navDownHandler} disabled={this.state.smBtnDisabled} onMouseOver={() => this.lineHoverHandler()} onMouseLeave={() => this.lineHoverOutHandler()} id="line2" className="start-line ">|</button>
                                </span>
                            </li>
                            <li className={`li3 ${!this.props.DarkMode ? !this.state.navTop ? null : "original" : null}   `}>
                                <NavLink exact={true} activeClassName='is-active' to="/">
                                    Home
                        </NavLink>
                            </li>
                            <li className={`li5 ${!this.props.DarkMode ? !this.state.navTop ? null : "original" : null}`}>
                                <NavLink activeClassName='is-active' to="/Designs">
                                    Designs
                        </NavLink>
                            </li>
                            <li className={`li4 ${!this.props.DarkMode ? !this.state.navTop ? null : "original" : null}`}>
                                <NavLink activeClassName='is-active' to="/projects">
                                    Projects
                                </NavLink>
                            </li>
                            {this.props.AdminPermission ?
                                <li onClick={this.logoutHandler} className={`li5 ${!this.props.DarkMode ? !this.state.navTop ? null : "original" : null}`}>
                                    <Link>
                                        Logout
                                </Link>
                                </li>
                                : null}
                            <li className="li6">
                                {!this.props.DarkMode ?
                                    <button id="dis" style={{ width: "30px", outline: "none", background: "none", boxShadow: "none", border: "none", fontSize: "30px" }} className={`btn btn-dark mb-1 text-dark  font-weight-bold ${!this.props.DarkMode ? !this.state.navTop ? null : "original " : null}`} onClick={this.darkHandler}>☾</button>
                                    :
                                    <button id="dis" style={{ width: "30px", outline: "none", background: "none", boxShadow: "none", border: "none", fontSize: "30px" }} className="btn btn-light mb-1 text-warning light-mode " onClick={this.darkHandler}>☀</button>}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        darkMode: (status) => dispatch({ type: "COLOR_CHANGE", payload: status }),
        change: (e) => dispatch({ type: "ADMIN", payload: e })

    }
}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar)