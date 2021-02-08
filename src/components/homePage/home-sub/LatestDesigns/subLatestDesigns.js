import React from 'react'

export default function subLatestDesigns(props) {
    return (
        <div  onClick={()=>props.tellPic(props.imgSrc)} className="col-lg-4 col-md-4 col-sm-4 mt-5 latest-jewel-grid">
            <figure className="snip1321 dark-mode ">
                <img
                    src={props.imgSrc}
                    className="img-thumbnail light-mode" alt="" />
                <figcaption className="roboto-font" >
                    <h4 className="light-mode" >CLICK TO </h4>
                    <h2>View</h2>
                </figcaption>
                {/* <a href="about.html"></a> */}
            </figure>
        </div>
    )
}
