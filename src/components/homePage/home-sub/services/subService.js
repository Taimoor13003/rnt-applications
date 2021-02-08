import React from 'react'

export default function subService(props) {
    return (
        <div class=" d-flex flex-column flex-wrap card shadow mx-auto my-3 py-3 d-block   col-md-3 col-12 " style={{ width: "200px" }}>
            <div>
                {props.Logo}

            </div>
            <div class="card-body py-0 my-0 text-center  d-flex flex-column ">
                <h4 class="card-title  " style={{ textAlign: "center" }} >{props.heading}</h4>
                <p class="card-text roboto-font"  >
                    {props.pTxt}
                </p>
                {props.btn}
            </div>
        </div>

    )
}
