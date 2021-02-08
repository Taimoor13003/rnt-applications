import React from 'react'
import './grills.css'
import { useDispatch } from 'react-redux'
export default function Grills() {
    const dispatch = useDispatch()
    return (
        <div className="">
            <div style={{ zIndex: "5", width: "100%", maxWidth: "500px", left: "50%", transform: "translate(-50%)" }} className="position-absolute p-5 mt-5 d-block " >

                <h1 style={{ zIndex: "5", width: "100%" }} className="text-center text-warning pt-5   ">Mosque Designs Specialist</h1>
                <p className="text-center text-white pt-5   " >We offer grill work which is a pierced design throughout marbles and sandstones leaving
                the sections seethrough with smoth edges. Grills are popular in beautifying mosques
                      and are great alternative for traditional fences and windows.</p>
                <button onClick={()=>dispatch({ type: "CHAT_CHANGE", payload: true })} className="btn btn-outline-warning text-white text-white mx-auto d-block  " > Consult for Mosques Projects </button>
            </div>

            <div className="grills"></div>
        </div>
    )
}
