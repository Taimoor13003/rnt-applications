import React from 'react'
import './cross.css'
import {useDispatch} from 'react-redux'
export default function Cross() {
     const dispatch = useDispatch()
    return (
        <div className="dark-mode bg-white" >
            <div className="d-flex container py-5  " style={{ flexFlow: "row wrap" }}  >

                <div className="col-md-8 mx-0 px-0 ">
                    <div className=" p-0 m-0 " style={{ height: "50%", overflow: "hidden" }} >
                        <div className="designTri">
                            <h1 className="text-center mx-auto "  >Perfect Designs</h1>
                            <p className="py-0 px-2 m-0 roboto-font text-capitalize " >

                                Using modern machinery we offer a wide range of designs.
                                 <br />
                                Unlike handcrafting ,our designs are perfect, giving premium look in our designs.
                                We work up to the expectations of our customers as result feedbacks are encouraging
                            </p>
                            <div className="px-1" >

                                <button onClick={() => dispatch({ type: "CHAT_CHANGE", payload: true })} className="btn btn-outline-warning w-100 mx-auto d-block light-mode " >Click to Order</button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-dark p-0 m-0 " style={{ height: "50%", overflow: "hidden" }} >
                        <img className="eagle  p-0 m-0 light-mode " src={`${require('../../../../images/gallery1/25.jpg')}`} />
                    </div>

                </div>

                <div className="col-md-4 mx-0 px-0 bg-danger h-100">
                    <img className="eagle light-mode " src={`${require('../../../../images/gallery1/24.jpg')}`} />
                </div>
            </div>
        </div>
    )
}
