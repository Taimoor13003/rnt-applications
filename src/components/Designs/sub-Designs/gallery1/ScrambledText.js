import React, { Component } from 'react'
import ReactRevealText from 'react-reveal-text'

export default class ScrambledText extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  
  componentDidMount() {
    setInterval(()=> this.bam(), 5000);
  }
  bam=()=>{
    //  setTimeout(() => {
      
      console.log(this.state.show)

      // this.setState({show:true})
      if ( this.state.show) {
      
        this.setState( { show: false });
      }else if(!this.state.show) {
        this.setState({ show: true });
      }
}
componentWillMount(){
  clearInterval(this.state.show)
}
render() {
  
  const bgStyles = {
    // background: 'linear-gradient(135deg, rgb(0,0,0), rgb(255,255,255))',
    background:"black",
    padding: '36px',
  };
  const textStyles = {
    color: 'white',
    fontSize: '30px',
    lineHeight: '36px',
    fontFamily: 'monospace',
    textAlign: 'center',
    letterSpacing: '1em',
    paddingLeft: '1em', // to compensate for letter spacing
  };
  return (
    <div>
      <div style={bgStyles}>
        <div style={textStyles}>
          <ReactRevealText show={this.state.show} text="SELECT TO BUY / INQUIRE FROM OUR DESIGNS" />
        </div>
      </div>
    </div>
  )
}
}
