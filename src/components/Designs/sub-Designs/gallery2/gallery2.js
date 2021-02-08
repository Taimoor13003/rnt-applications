import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './gallery2.css'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// const images = [
//     "//placekitten.com/1500/500",
//     "//placekitten.com/4000/3000",
//     "//placekitten.com/800/1200",
//     "//placekitten.com/1500/1500"
//   ];

export default class gallery2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            images: []
        };
    }

    componentDidMount() {
        AOS.init();
        let d = document.querySelector(".designs");
        const img = d.getElementsByTagName('img')
        let boo = []
        for (let i = 0; i < img.length; i++) {
            let a = {
                src: img[i].src,
                alt: img[i].alt
            }
            boo.push(a)
        }
        this.setState({ images: boo })

        for (let i = 0; i < img.length; i++) {
            img[i].addEventListener('click', () => {
                this.setState({ isOpen: true })
                console.log(img[i].src)
                this.setState({ photoIndex: i })
            })
        }

    }
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div>
                <section className="gallery2-sec">
                    {isOpen && (
                        console.log(this.state.images[photoIndex].src),
                        <Lightbox
                            mainSrc={this.state.images[photoIndex].src}
                            nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length].src}
                            prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length].src}
                            imageCaption={
                                // this.state.images[photoIndex].alt
                                <a style={{ position: "relative", left: "", width: "100px", margin: "auto", backgroundColor: "red" }} href="http://www.google.com">hellow</a>
                            }
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (this.state.photoIndex + this.state.images.length - 1) % this.state.images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (this.state.photoIndex + 1) % this.state.images.length,
                                })
                            }
                        />
                    )}
                </section>
            </div>


        )
    }
}
