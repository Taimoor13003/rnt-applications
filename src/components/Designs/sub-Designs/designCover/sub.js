import React, { Component } from 'react'
export default class sub extends Component {
        state = {
            count: 0,
            index: 0,
            currentText: "",
            letter: "",
            unMount: ""
        }
    componentDidMount() {
        const a = setInterval(() => this.type(), 200);
        this.setState({ unMount: a })
    }
    componentWillUnmount() {
        clearInterval(this.state.unMount)
    }
    type = () => {
        const texts = ["2D/3D ", "Grill ", "Calligraphic "];
        let count = this.state.count
        let index = this.state.index
        if (this.state.count === texts.length) {
            this.setState({ count: 0 })
        }
        this.setState({ currentText: texts[this.state.count] })
        this.setState({ letter: this.state.currentText.slice(0, this.state.index + 1) })
        this.setState({ index: ++index })
        document.querySelector(".typing").textContent = this.state.letter;
        if (this.state.letter.length === this.state.currentText.length) {
            this.setState({ count: ++count, index: 0 })
        }
    }
    render() {
        return (
                <h1 style={{ textAlign: "center" }}><span className="typing typing1"></span><br />&nbsp;Designs! </h1>
        )
    }
}
    