import React from 'react'
import LogoCorousel from './logoCorousel'
import './logo.css'
import {useDispatch} from 'react-redux'
export default function Logo() {
    const dispatch = useDispatch()
    return (
        <div className="bg-light pt-5 pb-4 dark-mode ">
            <div className="position-relative container  " >
                <div className="d-flex  pt-5 " style={{ flexWrap: "wrap" }} >
                    <div className="col-lg-4 col-10 mx-auto   " >
                        <div className="logo-corousel mx-auto " style={{ maxWidth: "500px" }} >

                            <h1 className='text-secondary pb-2  '>Logo Designs</h1>
                            <p className="  roboto-font text-capitalize  pb-2 ">RMT offers customs logo designs for your
                            brand.3D carved desgin upon marble is not only attractive but also gives an elegant look
                            to your logo.Customer is encourage to choose any size ehich makes it possibe to fix your logo your table desk or
                            to suspend it on wall attracting the people passing by
                             </p>
                            <button onClick={()=>dispatch({type:"CHAT_CHANGE",payload:true})} className=" col-12 btn mb-2 btn-outline-warning light-mode  " >Order your Logo</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-10 pb-5 d-block mx-auto light-mode ">
                        <LogoCorousel />
                    </div>
                </div>
            </div>
        </div>
    )
}
