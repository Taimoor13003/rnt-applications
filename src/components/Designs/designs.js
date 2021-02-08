import React, { Component } from 'react'
import './designs.css'

import OurDesigns from './ourDesigns/ourDesigns'
import Logo from './sub-Designs/logoSection/logo'
import Cross from './sub-Designs/crossDesign/cross'
import DesignCover from './sub-Designs/designCover/designCover'
import CarvedDesign from './sub-Designs/carved/index'
import Grills from './sub-Designs/grills/grills'




export default class designs extends Component {
    render() {
        return (
            <div className="designs mx-auto d-block " style={{maxWidth:"2500px"}} >
                <DesignCover/>
                <CarvedDesign />
                <Logo />
                <Grills />
                <OurDesigns />
                <Cross />
            </div>
        )
    }
}
