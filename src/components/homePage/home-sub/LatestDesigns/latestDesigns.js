import React, { Component } from 'react'
import Sub from './subLatestDesigns'
import Modal from '../../../utils/bootstrapModal/modal'
export default class latestDesigns extends Component {
    state = {
        images: [
            { src: `${require('../../../../images/gallery1/24.jpg')}` },
            { src: `${require('../../../../images/gallery1/31.jpg')}` },
            { src: `${require('../../../../images/gallery1/23.jpg')}` },
            { src: `${require('../../../../images/gallery1/33.jpg')}` },
            { src: `${require('../../../../images/gallery7/11.JPG')}` },
            { src: `${require('../../../../images/gallery7/7.JPG')}` }
        ],
        chosen: null
    }

    tellPic = (count) => {
        this.setState({chosen:count})
    }

    render() {
        return (
            <div>
                <section class="latest-design py-lg-4 py-md-3 mb-1 py-sm-3 py-3 ">
                    <div class="container py-lg-5 py-md-5 py-sm-4 py-4">
                        <h3 class="title  text-center clr mb-lg-5 mb-md-4 mb-sm-4 mb-3">Latest Designs</h3>
                        <div class="state-us ">
                            <div class="row">
                                {this.state.images.map((image) => {
                                    return (
                                        <Sub
                                            imgSrc={image.src}
                                            tellPic={this.tellPic}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                {this.state.chosen ? <Modal  chosen={this.state.chosen} /> : null}
            </div>
        )
    }
}
