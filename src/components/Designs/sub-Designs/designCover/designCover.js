import React, { Component } from 'react'
import H1txt from './sub'
export default class designCover extends Component {
    state = {
        height: ""
    }
    chaHandler = () => {
        try {

            if (window.innerWidth > 576 && window.innerWidth < 2000) {
                let d = window.innerWidth
                let e = (d / 2 + 20)
                this.setState({ height: e })
                document.getElementById('heightFix').style.height = this.state.height
                return document.getElementById('heightFix').style

            }
            if (window.innerWidth > 345 && window.innerWidth < 576) {
                let d = window.innerWidth
                let e = (d / 1.5 + 20)
                this.setState({ height: e })
                document.getElementById('heightFix').style.height = this.state.height
                return document.getElementById('heightFix').style
            }
            if (window.innerWidth < 345) {
                this.setState({ height: 250.6 })
                document.getElementById('heightFix').style.height = this.state.height
                return document.getElementById('heightFix').style
            }
            if (window.innerWidth > 2000) {
                this.setState({ height: 862 })
                document.getElementById('heightFix').style.height = this.state.height
                return document.getElementById('heightFix').style
            }

        } catch (err) {
            console.log(err)
        }

    }
    componentDidMount() {
        window.addEventListener('resize', this.chaHandler)
        this.chaHandler()
    }
    render() {
        return (
            <section className="d-sec " style={{ maxWidth: "2500px", left: "50%", transform: "translate(-50%)", position: "relative" }} >
                <div className="row col-11" style={{ maxWidth: "2000px", left: "", position: "relative", margin: "auto", paddingTop: "80px" }} >
                    <div className=" col-sm-4 col-6 " style={{ height: "auto" }}  >
                        <img src={`${require('../../../../images/boom3-change.png')}`} className="d1-1 " alt=" " />
                        <img src={`${require('../../../../images/bloom-change.png')}`} className="d1-2" alt=" " />
                    </div>
                    <div className="col-sm-4 col-6 ">
                        <div id="heightFix" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: this.state.height }}>
                            <H1txt />
                            <p className="middle-p " style={{ textAlign: "center" }}> With finest work & advanced techniques we offer novelty in
                         our designs remarkably carved on stones and marbles adding beauty to your decorations. </p>
                        </div>
                    </div>
                    <div className=" col-sm-4 col-6   ">
                        <div className="" style={{ width: "100%" }}>
                            <img src={`${require('../../../../images/bam-change.png')}`} className="d2-1" />
                            <img src={`${require('../../../../images/28-change.png')}`} className="d2-2 " />
                        </div>
                    </div>
                    <div className="col-6 d1-last  ">
                        <div className="" style={{ width: "100%", position: "relative", top: "50%", transform: "translateY(-50%)", textAlign: "center", height: this.state.height }}>
                            <p style={{ textAlign: "start" }}> With finest work & advanced techniques we offer novelty in our designs remarkably carved on stones and marbles adding beauty to your decorations. </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
