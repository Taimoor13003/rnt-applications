import React, { Component } from 'react'
import './projectAdd.css'
import { addProject } from '../../../redux-stuff/actions/actions'
import { connect, } from 'react-redux'
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
class projectAddd extends Component {
    state = {
        h1txt: "",
        imgAlt: "",
        imgSrc: null,
        loaded: 0,
        imageSrc: null
    }
    submitHandler = (e) => {
        e.preventDefault()
        let projectAddButton = document.getElementById('projectAddButton')
        projectAddButton.disabled = true
        let newFullState = {
            h1txt: this.state.h1txt,
            imgAlt: this.state.imgAlt,
        }
        const data = new FormData()
        data.append('file', this.state.imgSrc)
        console.log(data)
        axios.post(`${process.env.REACT_APP_DOMAIN}/projects-image`, data, {
        // axios.post(`http://localhost:5000/projects-image`, data, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total * 100)
                })
            }
        })
        .then((res) => {
            console.log(res.data)
                if (res.data === false) {
                    return alert("file not uploaded")
                }
                console.log(res)
                let myString = {
                    ...newFullState,
                    id: res.data.result._id
                }
                console.log(myString)
                axios.post(`${process.env.REACT_APP_DOMAIN}/projects-data`, myString)
                // axios.post(`http://localhost:5000/projects-data`, myString)
            }
            ).then(()=>{
                setTimeout(() => {
                    window.location.reload(true)
                }, 1000);
                
            })
            .catch(err => {
                toast.error('upload fail')
                projectAddButton.disabled = false
            })
        }
        onChangeImageHandler = (e) => {
        let files = e.target.files[0]
        this.setState({
            imgSrc: files
        })
    }
    render() {
        return (
            <div  >
                <section className="down">
                    <h1 className="p-AdminHead text-warning roboto-font font-weight-bold ">Admin Projects</h1>
                    <form className="form-group" style={{ zIndex: "10" }} onSubmit={this.submitHandler}>
                        <label className="roboto-font text-dark font-weight-bold col-12 pl-0 mb-2 " >Project Heading Text:
                        <input className="form-control light-mode text-secondary font-weight-bold  " style={{background:"none",filter:"invert(100%)"}}  onChange={(e) => this.setState({ h1txt: e.target.value })} />
                        </label>
                        <label className="roboto-font text-dark font-weight-bold col-12 pl-0 mb-2 " >Image Alternative:
                        <input className="form-control light-mode text-secondary font-weight-bold " style={{background:"none",filter:"invert(100%)"}} onChange={(e) => this.setState({ imgAlt: e.target.value })} />
                        </label>
                        <label className="roboto-font text-dark font-weight-bold col-12 pl-0 mb-2">Upload Your Image
                        <input className="btn" style={{}} name="file" type="file" onChange={this.onChangeImageHandler} />
                            {this.state.loaded === 0 ?
                                null :
                                <div>
                                    <Progress max="100" className="mt-2  " color="success" value={this.state.loaded} >{Math.round(this.state.loaded, 2)}%</Progress>
                                </div>
                            }
                            <input className="btn btn-outline-warning w-100 mt-2 " id="projectAddButton" type="submit" value="Submit" />
                        </label>
                        {this.state.imgSrc !== null ? <img src={URL.createObjectURL(this.state.imgSrc)} className="col-12  " alt="uploaded image" /> : <div></div>}
                    </form>
                    <div class="form-group">
                        <ToastContainer />
                    </div>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (newCard) => dispatch(addProject({ ...newCard })),
    }
}
const mapStateToProps = (state) => {
    return {
        ...state,
        galleryRoute: state.galleryRoute,
        // cards: [...state.cards],
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(projectAddd)