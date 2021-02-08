import React from 'react'

export default function subContact(props) {
    return (
        <div className="col-md-4 col-12 address-grid" data-aos="zoom-in">
            <div className="row address-info">
                <div className="col-md-3 address-left text-center">
                    {props.icon}
                </div>
                <div className="col-md-9 address-right text-left">
                    <h6 className="ad-info text-uppercase font-weight-bold mb-2">{props.h1txt}</h6>
                    <p>{props.ptxt}{props.Link}</p>
                </div>
            </div>
        </div>
    )
}
