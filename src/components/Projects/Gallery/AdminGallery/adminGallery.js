import React, { Component } from 'react'
import axios from 'axios'
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'

class adminGallery extends Component {
    state = {
        highlighted: false,
        images: [],
        fullObj: [{ name: 1 }, { name: 2 }],

        loaded: 0

    }
    uploadImages = (e) => {
        e.preventDefault()
        let inputButton = document.getElementById('projectInputButton')
        inputButton.disabled = true
        const data = new FormData()
        for (let x = 0; x < this.state.images.length; x++) {
            data.append('file', this.state.images[x])
        }
        let ret = this.props.galleryRoute.slice(17);
        
            axios.post(`${process.env.REACT_APP_DOMAIN}/UploadGalleryImages/${ret}`, data, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
                })
            },
        }).then(res => {
                toast.success('upload success')
            })
            .then(() => {
                window.setTimeout(
                    () =>
                        window.location.reload(true)
                    ,
                    1000
                );
            })
            .catch(err => {
                toast.error('upload fail')
                window.setTimeout(
                    () =>
                        window.location.reload(true)
                    ,
                    1000
                );
            })

    }
    maxSelectFile = () => {
        let files = this.state.images // create file object
        if (files.length >= 12) {
            const msg = 'Only 12 images can be uploaded at a time'
            //    event.target.value = null // discard selected file
            this.setState({ images: [] })
            alert(msg)
            return false;

        }
        return true;
    }

    checkFileSize = (file) => {
        // let files = this.state.images
        let size = 30000000
        let err = "";
        // for(var x = 0; x < files.length; x++) {
        if (file.size > size) {
            err = file.type + 'is too large, please pick a smaller file\n';
            //    }
        };
        if (err !== '') {
            // this.setState({ images: [] })
            return false
        }

        return true;

    }

    render() {

        return (
            <div className=" container my-5 bg-white dark-mode ">
                <section className=" ">
                    <h1 className="text-black-50 text-center font-weight-bold ">Add Images For Your Project</h1>
                    <h5 className=""><span className="font-weight-bold" > Image Selected For Uploading {this.state.images.length}</span> </h5>
                    <form onSubmit={this.uploadImages}>
                        {/* <label for="">Insert Your Images</label> */}
                        {/* <DropZone/> */}
                        <div>
                            {/* <h1 className="text-center xxlarge-text-justify">Import Pictures To Be Uploaded</h1> */}
                            <div
                                className={`my-2 mx-auto w-100 shadow-lg bg-success rounded bg-white pt-5  ${this.state.highlighted ?
                                    ' bg-light border border-success' : 'border-gray-600'}`}
                                style={{ height: "200px", overflow: "auto" }}
                                onDragEnter={() => this.setState({ highlighted: true })}
                                onDragLeave={() => this.setState({ highlighted: false })}
                                onDragOver={(e) => {
                                    e.preventDefault()
                                }}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    Array.from(e.dataTransfer.files)
                                        .filter((file) =>
                                            file.type === "image/gif" || file.type === "image/jpeg" || file.type === "image/png")
                                        .forEach(
                                            (file) => {
                                                if (this.maxSelectFile() && this.checkFileSize(file)) {
                                                    // if return true allow to setState
                                                    let joined = this.state.images.concat(file);
                                                    this.setState({ images: joined })
                                                }
                                                // let updatingState = this.state.images.push(file)
                                                // const image = await file
                                                // let updatedState =updatingState.push(file)
                                                // this.setState({images: updatedState})
                                            })
                                    //  .forEach((files)=>{
                                    //  })
                                }}>
                                <h1 className="text-center pt-3 text-uppercase text-warning ">Drop Here</h1>
                                <ul style={{}} className="container-fluid row dark-mode ">
                                    {this.state.images.map((img, index) => {
                                        let boom = URL.createObjectURL(img);
                                        // const imageFile =await file
                                        return (
                                            <li key={index} className="col-6 col-md-4 col-lg-3 mt-3 "> <img id="image" src={boom} alt="" className="" style={{ width: '200px', height: "200px" }} /> </li>
                                        )
                                    })}
                                </ul>

                            </div>
                        </div>
                        {/* <input type="" className="">Click to Upload</input> */}
                        <input type="submit" id='projectInputButton' className="btn btn-outline-warning w-100 mt-2 light-mode " />

                    </form>
                    {this.state.loaded === 0 ?
                        null :
                        <div class="form-group">
                            <Progress max="100" className="light-mode" color="success" value={this.state.loaded} >{Math.round(this.state.loaded, 2)}%</Progress>
                        </div>
                    }
                </section>
                <div class="form-group  ">
                    <ToastContainer />
                </div>


            </div>
        )
    }
}

const mapStatetoPorps = (state) => {
    return {
        ...state,
        galleryRoute: state.galleryRoute
    }

}

export default connect(mapStatetoPorps)(adminGallery)