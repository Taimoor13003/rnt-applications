import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller'
import './gallery.css'
import axios from 'axios';
import AdminGallery from './AdminGallery/adminGallery'
import { connect } from 'react-redux'
import "react-image-lightbox/style.css";
import SubGallery from './gallerySub'
import Cover from '../ProjectCover/ProjectCover'
class ProjectGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            mongoSkip: 0,
            hasMoreItems: true,
            nextHref: null,
            galleryRoute: "",
            galleryImages: [],
            newGalleryImages: [],
            photoIndex: 0,
            isOpen: false,
            photo: [],
            libraryGallery: [],
            finalGalleryImages: [],
            connectionErr: false,
            check: false,
            loading :true,
            initialHeight: 0,
        };
    }
    loadItems(page) {
        this.setState({ hasMoreItems: false ,loading : true })
            axios.get(process.env.REACT_APP_DOMAIN + this.props.galleryRoute + "," + this.state.mongoSkip).then((response) => {
                this.setState({ mongoSkip: (this.state.mongoSkip + 20), connectionErr: false })
                if (response.data.length === 0) {
                    return this.setState({ hasMoreItems: false ,loading:false })
            }
            let joined = this.state.galleryImages.concat(response.data);
            this.setState({ galleryImages: joined })
            const result = this.state.galleryImages.map(({ imageName }) => ({
                imageName
            }));
            let finalGallery = result.map(item => {
                let wi = 2
                let hi = 2
                var img = new Image();
                img.src = `${process.env.REACT_APP_DOMAIN}/${item.imageName}`;
                if (img.naturalWidth > 4000) {
                    wi = 4
                }
                return {
                    src: `${process.env.REACT_APP_DOMAIN}/${item.imageName}`,
                    width: wi,
                    height: hi,
                };
            });
            this.setState({ hasMoreItems: true , loading: false })
            this.setState({ finalGalleryImages: finalGallery })
        }).catch(err => {
            console.log(err)
            this.setState({ connectionErr: true ,loading : false })
        })
    }
    scrollHandler=()=>{
        let a = document.getElementById('forHeight').clientHeight
        if(a === this.state.initialHeight ){
            window.scrollBy(0,100)
            window.scrollBy(0,-100)
        }else{
            this.clearFunction()
        }}
    clearFunction=()=>{clearInterval(this.interval)}
    componentDidMount() {
        
        window.scrollBy(0,500)
        window.scrollBy(0,-500)
        let a = document.getElementById('root')
        let b = document.getElementById('forHeight')
        if (a.clientHeight < (window.innerHeight+30)) {
            console.log('V-scrollbar is not active')
            document.getElementById('forHeight').style.minHeight = "98vh"
            this.setState({initialHeight : b.clientHeight})
            this.interval = setInterval(() => { this.scrollHandler() }, 3000)
        }
    }
    componentWillUnmount() {clearInterval(this.interval)}
    render() {
        const loader = <div className="loader text-center mx-auto d-block mb-2 text-warning  spinner-border spinner-border ">  </div>;
        return (
            <div className="" id="forHeight"    >
                <Cover Heading={this.props.galleryHeading} />
                {!this.props.AdminPermission ? null : <AdminGallery />}
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.loadItems.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    // loader={loader}
                    >
                    <div className="">
                        <section className="gallery" >
                        <SubGallery photos={this.state.finalGalleryImages} />
                        </section>
                        {this.state.loading ? loader :null}
                        {this.state.connectionErr ?
                            <h1 className="text-center text-uppercase " style={{ fontSize: "20px" }}  >Check your connection...</h1> : null}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(ProjectGallery)
