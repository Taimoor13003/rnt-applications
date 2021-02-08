import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
export default function scroll() {
    return (
        <div >
            <ScrollToTop  style={{zIndex:"100"}} smooth showUnder={160}>
                <button className="shadow position-relative  btn  font-weight-bold position-relative shadow-none p-0 m-0 text-warning" style={{ fontSize:"50px" }} > <FaRegArrowAltCircleUp  className=""/> </button>
            </ScrollToTop>

        </div>
    )
}
