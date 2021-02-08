import React, { Component } from 'react'
import './gallery.css'
import AOS from 'aos';
// import './librariesJs/gallery2/node_modules/aos/dist/aos.css';
import ScrambledText from './ScrambledText'
export default class gallery extends Component {
    


    componentDidMount() {
        AOS.init();

    }

    render() {
        return (
            <div className="bg-dark mt-5">
                <ScrambledText/>
                <div className="dg-parent">
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/1.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/31.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/3.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/33.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/24.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/24.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/7.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/28.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/n1.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery3/13.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/11.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery7/11.JPG')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery6/25.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/14.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery7/7.JPG')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/25.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/17.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/26.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/19.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/20.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery3/16.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery2/32.png')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/gallery1/23.jpg')}`} alt="" />
                    </div>
                    <div>
                        <img data-aos="fade-up" data-aos-easing="" data-aos-delay="300" data-aos-duration="300" data-aos-anchor-placement="top-center" src={`${require('../../../../images/7.jpg')}`} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}



// import React, { Component } from 'react'
// import './gallery.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// // import './librariesJs/move-top   '
// export default class gallery extends Component {
//     componentDidMount(){
//         AOS.init();
//     }
//     render() {
//         return (
//             <div >

//                 <section class="content-main-w3" id="home">
//                     {/* <!--/nav--> */}
//                     <div class="header_top_w3ls">
//                         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                             <button class="navbar-toggler navbar-toggler-right mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span class="navbar-toggler-icon"></span>
//                             </button>

//                             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                                 <ul class="navbar-nav mx-auto">
//                                     <li class="nav-item active">
//                                         <a class="nav-link" href="index.html">Home
// 									<span class="sr-only">(current)</span>
//                                         </a>
//                                     </li>
//                                     <li class="nav-item">
//                                         <a class="nav-link" href="about.html">About</a>
//                                     </li>
//                                     <li class="nav-item">
//                                         <a class="nav-link" href="team.html">Photographers</a>
//                                     </li>
//                                     <li class="nav-item">
//                                         <a class="nav-link" href="pricing.html">Pricing</a>
//                                     </li>
//                                     <li class="nav-item">
//                                         <a class="nav-link" href="clients.html">Testimonials</a>
//                                     </li>
//                                     <li class="nav-item">
//                                         <a class="nav-link" href="contact.html">Contact</a>
//                                     </li>

//                                 </ul>
//                             </div>

//                         </nav>
//                         <div class="logo-wthree text-center">
//                             <a class="navbar-brand" href="index.html">
//                                 PhotoWall <span> Make Memories</span></a>
//                         </div>

//                     </div>
//                     {/* <!--//nav--> */}

//                     <div class="container-fluid gallery-lightbox my-5">
//                         <div class="row m-0">
//                             <div class="col-lg-2 col-md-2 col-sm-3 p-0 snap-img">
//                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                     <div class="gallery_effect">
//                                         <a href="images/1.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                     <div class="gallery_effect">
//                                         <a href="images/16.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                     <div class="gallery_effect">
//                                         <a href="images/2.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                     <div class="gallery_effect">
//                                         <a href="images/17.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-2 col-md-2 col-sm-3 p-0 snap-img">
//                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                     <div class="gallery_effect">
//                                         <a href="images/3.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                     <div class="gallery_effect">
//                                         <a href="images/4.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid"/> </figure>
//                             </a>
//                         </div>
//                                                         </div>
//                                         <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                             <div class="gallery_effect">
//                                                 <a href="images/18.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                     <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid"/> </figure>
//                             </a>
//                         </div>
//                                                             </div>
//                                             </div>
//                                             <div class="col-lg-2 col-md-2 col-sm-3 p-0 snap-img">
//                                                 <div class="gallery_grid1 hover08">
//                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                         <a href="images/5.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid"/> </figure>
//                             </a>
//                         </div>
//                                                             <div class="gallery_effect" data-aos="fade-up">
//                                                                 <a href="images/9.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                     <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid"/> </figure>
//                             </a>
//                         </div>
//                                                                     </div>
//                                                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                                                     <div class="gallery_effect">
//                                                                         <a href="images/19.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div class="col-lg-2 col-md-2 col-sm-3 p-0 snap-img">
//                                                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                                                     <div class="gallery_effect">
//                                                                         <a href="images/6.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="gallery_grid1 hover08">
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/7.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/8.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="gallery_grid1 hover08" data-aos="fade-up">
//                                                                     <div class="gallery_effect">
//                                                                         <a href="images/20.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div class="col-lg-2 col-md-2 p-0 snap-img">
//                                                                 <div class="gallery_grid1 hover08">
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/10.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>

//                                                                 </div>

//                                                                 <div class="gallery_grid1 hover08">
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/12.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>

//                                                                 </div>
//                                                                 <div class="gallery_grid1 hover08">
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/21.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>


//                                                             <div class="col-lg-2 col-md-2 p-0 snap-img">
//                                                                 <div class="gallery_grid1 hover08">
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/13.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="gallery_grid1 hover08">
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/14.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>

//                                                                 </div>
//                                                                 <div class="gallery_grid1 hover08">
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/15.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>

//                                                                 </div>
//                                                                 <div class="gallery_grid1 hover08">
//                                                                     <div class="gallery_effect" data-aos="fade-up">
//                                                                         <a href="images/22.jpg" data-lightbox="example-set" data-title-wthree="Lorem Ipsum is simply dummy the when an unknown galley of type and scrambled it to make a type specimen.">
//                                                                             <figure> <img src={`${require('../../../../images/gallery1/1.jpg')}`} alt=" " class="img-fluid" /> </figure>
//                                                                         </a>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>


//                                                                                                             </div>

//                                                     </div>
//                                                     {/* <!--/footer--> */}
//                                                     <footer class="mt-lg-5 mt-3">
//                                                         <div class="social_media_w3layouts text-center">
//                                                             <ul class="social-icons justify-content-center mt-md-5 mt-3">
//                                                                 <li class="mr-1"><a href="#"><span class="fab fa-facebook-f"></span></a></li>
//                                                                 <li class="mx-1"><a href="#"><span class="fab fa-twitter"></span></a></li>
//                                                                 <li class="mx-1"><a href="#"><span class="fab fa-google-plus-g"></span></a></li>
//                                                                 <li class="mx-1"><a href="#"><span class="fab fa-linkedin-in"></span></a></li>
//                                                             </ul>
//                                                             <p class="copy-right-w3ls my-3">© 2018 PhotoWall. All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
//                                                         </div>
//                                                     </footer>
//     </section>
//                                             </div>
//         )
//     }
// }

