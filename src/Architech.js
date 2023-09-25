import React from "react";
import { Helmet } from 'react-helmet';
import img1 from './media/17.jpeg'
import img2 from './media/18.jpeg'
import img3 from './media/19.jpeg'
import img4 from './media/20.jpeg'
import img5 from './media/21.jpeg'
import img6 from './media/22.webp'
import img7 from './media/23.jpeg'

class Architech extends React.Component {
    render() {
        return (
            <div className="bauhaus">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Bauhaus</title>
                    <link rel="icon" type="image/png" href="favicon3.ico" sizes="16x16" />
                </Helmet>
                <div className="ar-page1">
                    <div className="ar-page1-head">
                        <div className="ar-head1">
                            <i className="fa-regular fa-square ar-logo"></i>
                            <div className="ar-head1-title">
                                <h3>bauhaus</h3>
                                <p className="graytext">architecture</p>
                            </div>

                        </div>
                        <div className="ar-head2">
                            <p><span className="graytext">CALL US:</span>  <span className="boldtext">(+080) 9684 32 45 789</span> </p>
                        </div>

                        <div className="ar-head3">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-google"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>

                    </div>

                    <img src={img1} alt="hinh" width="85%" />
                </div>

                <div className="ar-page2">
                    <div className="ar-page2-left">
                        <h3 className="graytext">ABOUT US</h3>
                        <h1>We Are The Leader In The Architectural</h1>
                        <p className="graytext">For each we establish relationships with partners who know will help us create added value for your project. As well as bringing togather the puplic and private sectors, we make setor-overarching links to gather knowledge and to lerarn from each other</p>
                        <div className="ar-experience">
                            <div className="ex-left">
                                <p>26</p>
                            </div>
                            <div className="ex-right">
                                <p>Years</p>
                                <p>Experience</p>
                                <p>Working</p>
                            </div>
                        </div>
                    </div>
                    <div className="ar-page2-right">
                        <img src={img2} alt="hinh" width="80%" />
                    </div>

                </div>

                <div className="ar-page3">
                    <h3 className="boldtext bigtext">Latest Projects</h3>
                    <div className="ar-img">
                        <div className="ar-img-contain">
                            <img src={img3} alt="hinh" width="100%" />
                            <p className="ar-img-title">Triangle <br /> Concrete <br /> House</p>
                        </div>

                        <div className="ar-img-contain">
                            <img src={img4} alt="hinh" width="100%" />
                            <p className="ar-img-title">The <br /> Luxury <br /> House</p>
                        </div>

                        <div className="ar-img-contain">
                            <img src={img5} alt="hinh" width="100%" />
                            <p className="ar-img-title">House <br /> With <br /> Pool</p>
                        </div>
                    </div>

                </div>

                <div className="ar-page4">
                    <h1 className="ar-page4-h1">From Great Our Clients</h1>
                    <div className="ar-page4-contain">
                        <div className="ar-page4-item">
                            <div className="ar-page4-head">
                                <img src={img6} alt="hinh" width="15%" className="cicle-img" />
                                <h3>Adam Stone <span className="graytext"> / CEO at Google INC</span></h3>
                                <i className="fa-solid fa-quote-right bigtext"></i>
                            </div>
                            <p className="graytext client">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sit facilis reprehenderit maiores dolores vel sequi? Minima dolorum molestias quaerat natus veritatis mollitia quod culpa eligendi aut. Enim, beatae laudantium.</p>
                        </div>
                        <div className="ar-page4-item">
                            <div className="ar-page4-head">
                                <img src={img7} alt="hinh" width="15%" className="cicle-img" />
                                <h3>Anabella Kleva <span className="graytext"> / Management at Envato</span></h3>
                                <i className="fa-solid fa-quote-right bigtext"></i>
                            </div>
                            <p className="graytext client">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sit facilis reprehenderit maiores dolores vel sequi? Minima dolorum molestias quaerat natus veritatis mollitia quod culpa eligendi aut. Enim, beatae laudantium.</p>
                        </div>
                    </div>

                </div>

                <div className="ar-page5">
                    <div className="ar-head1 ar-head-media">
                        <i className="fa-regular fa-square ar-logo"></i>
                        <div className="ar-head1-title">
                            <h3>bauhaus</h3>
                            <p className="graytext">architecture</p>
                        </div>
                    </div>

                    <div className="ar-page5-contain">
                        <p>Bauhaus 2023</p>
                        <p>All Rights Resevered</p>
                    </div>

                    <div className="ar-page5-contain">
                        <p>Site Map</p>
                        <p>Term & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Help</p>
                        <p>Affiliatep</p>
                    </div>

                    <div className="ar-page5-contain">
                        <p>Our Location</p>
                        <p>Career</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>

                    <div className="ar-head3 ">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>



                </div>

            </div>

        )
    }
}

export default Architech;