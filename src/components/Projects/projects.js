import React, { Component } from 'react'
import './projects.css'
import { Link } from 'react-router-dom'
import { galleryRoute} from '../../redux-stuff/actions/actions'
import { connect } from 'react-redux'
import ProjectAdmin from './addProjectAdmin/projectAdd'
import axios from 'axios'
import Modal from './bootstrapModal/bootstrapModal'
import ProjectCover from './ProjectCover/ProjectCover'
import Particles from './backgroundParticle/index'

class gallery extends Component {
    state = {
        mongoData: [],
        AdminState: true,
        connectionErr : false,
        loading : true

    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_DOMAIN}/projects-all`).then(
            (response) => {
                response.data.forEach(function (item) {
                    item.linkto = '/projects/gallery'
                })
                this.setState({
                    mongoData: response.data,loading : false
                })
            }
        ).then(() => {
            this.state.mongoData.forEach(function (item) {
                item.linkto = '/projects/gallery'
            })
        }).catch((err)=>{
            this.setState({connectionErr:true , loading : false})
        })
    }
    render() {
        let x = "rgb(0,0,0)"
        if(this.props.DarkMode) x="rgb(255,255,255)"
        return (
            <div  >
                <div className="position-fixed " style={{ height: "100vh", width: "100%", backgroundColor: "", zIndex: "0", opacity: "1",  }}  >
                    <Particles Color={x} />
                </div>
                <div className="mx-auto" style={{ maxWidth: "2500px" }} >
                    <ProjectCover Heading={"Projects"} />
                    <div className="container">
                        {!this.props.AdminPermission ?  null : <ProjectAdmin />}
                        <section className="project-cards   container-fluid row" style={{ zIndex: "1" }} >
                            {this.state.mongoData.map((card, index) => {
                                return (
                                    <div key={index}
                                        className="col-12 col-md-6 col-lg-4 my-5 bg-none"
                                        style={{background:"transparent"  }}
                                        onClick={() => this.props.changeRoute(card)}>
                                        <div className="card shadow" style={{background:"transparent",border:"2px solid white",borderRadius:"0px"}} >
                                            <img className="card-img-top " style={{ height: "300px" }} src={`${process.env.REACT_APP_DOMAIN}/${card.imgSrc}`} alt={card.imgAlt} />
                                            <div className="card-body " style={{background:"transparent"}} >
                                                <Link to={ {pathname : card.linkto+'/' + card.h1txt  }} onClick={() => this.props.GalleryHeading(card.h1txt)} >
                                                    <button style={{ height: "40px",borderRadius:"0px",fontFamily:"sans-serif",color:'black' }} className="btn w-100 card-title bg-warning text-capitalize font-weight-bold ">{card.h1txt}</button>
                                                </Link>
                                                {this.props.AdminPermission ?
                                                    <Modal info={card._id} />
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    </div>)})}
                        </section>
                        {this.state.loading ? <div className="loader text-center mx-auto d-block mb-2 text-warning  spinner-border spinner-border ">  </div> :null}
                            {this.state.connectionErr ?
                            <h1 className="text-center text-uppercase " style={{ fontSize: "20px" }}  >Check your connection...</h1> : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (card) => dispatch({ type: 'CHANGE', payload: card }),
        GalleryHeading: (card) => dispatch({ type: 'HEADING', payload: card }),
        galleryRoute,
        changeRoute: (routeinfo) => dispatch({ type: 'ROUTE_CHANGE', payload: (routeinfo.linkto+ routeinfo._id) })
    }
}

const mapStateToProps = (state) => {

    return {
        ...state,
        galleryRoute: state.galleryRoute,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(gallery)