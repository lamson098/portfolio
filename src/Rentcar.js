import React from 'react';
import { Helmet } from 'react-helmet';
import img from './media/3.jpeg'
import img2 from './media/5.png'
import img3 from './media/6.jpg'
import img4 from './media/7.jpeg'
import img5 from './media/8.png'
import img6 from './media/9.webp'
import img7 from './media/10.webp'
import img8 from './media/11.jpeg'
import img9 from './media/12.jpeg'
import img11 from './media/13.png'
import img10 from './media/14.jpeg'
import img12 from './media/15.png'
import img13 from './media/16.png'



class Rent extends React.Component {
    state = {
        image: img2,
        price: "45$",
        model: "Audi",
        mark: "AI",
        year: "2012",
        door: "4/5",
        AC: "Yes",
        transmission: "Manual",
        fule: "Gasoline",

    }

    changeinfodefault = () => {
        this.setState({ image: img2, price: "45$", model: "Audi", mark: "AI", year: "2012", door: "4/5", AC: "Yes", transmission: "Manual", fule: "Gasoline" });
        document.querySelector(".one").style.background = "rgb(248, 83, 24)"
        document.querySelector(".one").style.color = "aliceblue"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"
        document.querySelector(".six").style.background = "white"
        document.querySelector(".six").style.color = "black"
    }

    changeinfo = () => {
        this.setState({ image: img3, price: "37$", model: "Golf 6", mark: "Volkswagen", year: "2008", door: "4/5", AC: "Yes", transmission: "Automatic", fule: "Diesel" });
        document.querySelector(".two").style.background = "rgb(248, 83, 24)"
        document.querySelector(".two").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"
        document.querySelector(".six").style.background = "white"
        document.querySelector(".six").style.color = "black"
    }
    changeinfo2 = () => {
        this.setState({ image: img4, price: "30$", model: "Camry", mark: "Toyota", year: "2006", door: "4/5", AC: "Yes", transmission: "Automatic", fule: "Hybrid" });
        document.querySelector(".three").style.background = "rgb(248, 83, 24)"
        document.querySelector(".three").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"
        document.querySelector(".six").style.background = "white"
        document.querySelector(".six").style.color = "black"
    }
    changeinfo3 = () => {
        this.setState({ image: img5, price: "35$", model: "320", mark: "BMW", year: "2012", door: "4/5", AC: "Yes", transmission: "Manual", fule: "Diesle" });
        document.querySelector(".four").style.background = "rgb(248, 83, 24)"
        document.querySelector(".four").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"
        document.querySelector(".six").style.background = "white"
        document.querySelector(".six").style.color = "black"
    }
    changeinfo4 = () => {
        this.setState({ image: img6, price: "50$", model: "Benz GLK", mark: "Mercedes", year: "2006", door: "4/5", AC: "Yes", transmission: "Manual", fule: "Diesel" });
        document.querySelector(".five").style.background = "rgb(248, 83, 24)"
        document.querySelector(".five").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
        document.querySelector(".six").style.background = "white"
        document.querySelector(".six").style.color = "black"
    }
    changeinfo5 = () => {
        this.setState({ image: img7, price: "25$", model: "Passat CC", mark: "Volkswagen", year: "2008", door: "4/5", AC: "Yes", transmission: "Automatic", fule: "Gasoline" });
        document.querySelector(".six").style.background = "rgb(248, 83, 24)"
        document.querySelector(".six").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
    }


    render() {
        let { image, price, model, mark, year, door, AC, transmission, fule } = this.state;


        return (
            < div className='rentcar'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Rent Car</title>
                    <link rel="icon" type="image/png" href="favicon2.ico" sizes="16x16" />
                </Helmet>

                <div className='page3'>
                    <div className="head">
                        <div className="logo">
                            <img src={img} width="100px" alt='logo' />
                        </div>

                        <div className="rentnav">
                            <p className='rentnavb renthome'>Home</p>
                            <p className='rentnavb rentabout'><a href="#about">About</a></p>
                            <p className='rentnavb'><a href="#model">Vehecle Model</a></p>
                            <p className='rentnavb'><a href="#team">Our Team</a></p>
                            <p className='rentnavb rentcontact'><a href="#contact">Contact</a></p>
                        </div>
                        <div className="rentbutton">
                            <p className='Rentsign'>Sign In</p>
                            <p className='Rentregister'>Register</p>
                        </div>
                    </div>

                    <div className="Banner">
                        <h3>Plan your trip now</h3>
                        <p className='big'>Save big with with our <span className='car'>car</span>  rental</p>
                        <p className='rentdetail'>Rent the car of your dream. unlimited miles. Flexible pick-up options and much more</p>
                        <div className="rentbanerbutton">
                            <p className='rentbanerbutton-a'><a href="#model" className='rentbanerbutton-a'>Book Ride</a></p>
                            <p className='rentbanerbutton-b'>Learn More</p>
                        </div>
                    </div>
                </div>

                <div className="page4">
                    <div className="bookcar" id='bookcar'>
                        <h2>Book a car</h2>
                        <div className="selectfirst">
                            <form action="">
                                <i className="orange fa-solid fa-car"></i>
                                <label >Select Your Car Type</label>
                                <br />
                                <br />
                                <select name="cartype" id="cartype" className='select'>
                                    <option disabled selected hidden>Select your car type</option>
                                    <option value="Audi" >Audi A1 S-Line</option>
                                    <option value="Golf">VW Golf 6</option>
                                    <option value="Camry">Toyota Camry</option>
                                    <option value="MordernLine">BMW 320 MordernLine</option>
                                    <option value="Merceedes">Merceedes-Benz GLK</option>
                                    <option value="Passat">VW Passat CC</option>
                                </select>
                            </form>

                            <form action="">
                                <i className="orange fa-solid fa-location-dot"></i>
                                <label >Pick-up</label>
                                <br />
                                <br />
                                <select name="pickup" id="pickup" className='select'>
                                    <option disabled selected hidden>Select pick-up location</option>
                                    <option value="Belgrade">Belgrade</option>
                                    <option value="Novi">Novi Sad</option>
                                    <option value="Nis">Nis</option>
                                    <option value="Kragujevac">Kragujevac</option>
                                    <option value="Subotica">Subotica</option>
                                </select>
                            </form>

                            <form action="">
                                <i className="orange fa-solid fa-location-dot"></i>
                                <label >Drop-of</label>
                                <br />
                                <br />
                                <select name="pickup" id="pickup" className='select'>
                                    <option disabled selected hidden>Select drop-off location</option>
                                    <option value="Belgrade">Belgrade</option>
                                    <option value="Novi">Novi Sad</option>
                                    <option value="Nis">Nis</option>
                                    <option value="Kragujevac">Kragujevac</option>
                                    <option value="Subotica">Subotica</option>
                                </select>
                            </form>
                        </div>

                        <div className="selectsecond">
                            <div>
                                <i className="orange fa-solid fa-calendar-days"></i>
                                <label>Pick-up</label>
                                <br />
                                <br />
                                <input type="date" className='date' />
                            </div>
                            <div>
                                <i className="orange fa-solid fa-calendar-days"></i>
                                <label>Drop-of</label>
                                <br />
                                <br />
                                <input type="date" className='date' />
                            </div>
                            <div className="selecthird">
                                <h3 >Search</h3>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="page5" id='team'>
                    <div className="tripplan">
                        <div className="triplan-head">
                            <h3>Plan your trip now</h3>
                            <br />
                            <h1>Quick & easy car rental</h1>
                        </div>
                        <div className="tripplan-detail">
                            <div className="detail-detail">
                                <i className="orange tripplan-icon fa-solid fa-car"></i>
                                <br />
                                <br />
                                <br />
                                <h2>Select Car</h2>
                                <br />
                                <p className='graytext'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                            </div>
                            <div className="detail-detail">
                                <i className="orange tripplan-icon fa-solid fa-headphones"></i>
                                <br />
                                <br />
                                <br />
                                <h2>Contact Operator</h2>
                                <br />
                                <p className='graytext'>Our knowledgeble and friendly operators are always ready to help with any quetions or concerns</p>
                            </div>
                            <div className="detail-detail">
                                <i className="orange tripplan-icon fa-solid fa-cloud-sun-rain"></i>
                                <br />
                                <br />
                                <br />
                                <h2>Let's Drive</h2>
                                <br />
                                <p className='graytext'>Whether you're hitting the open road. We've got you covered with our wide range of cars</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="page6" id='model'>
                    <div className="vehiclemodel">
                        <div className="vehiclehead">
                            <h2>Vehicle Models</h2>
                            <h1>Our rental fleet</h1>
                            <p className='graytext'>Choose from a variety our amazing vehicles to rent for your next advanture or bussiness trip</p>
                        </div>
                        <div className="vehicleretail">
                            <div className="vehicletype">
                                <h3 id="Audi" className='cartype one' onClick={this.changeinfodefault} >Audi A1 S-Line</h3>
                                <h3 id="Golf" className='cartype two' onClick={this.changeinfo}>VW Golf 6</h3>
                                <h3 id="Camry" className='cartype three' onClick={this.changeinfo2}>Toyota Camry</h3>
                                <h3 id="MordernLine" className='cartype four' onClick={this.changeinfo3}>BMW 320 MordernLine</h3>
                                <h3 id="Merceedes" className='cartype five' onClick={this.changeinfo4}>Merceedes-Benz GLK</h3>
                                <h3 id="Passat" className='cartype six' onClick={this.changeinfo5}>VW Passat CC</h3>
                            </div>
                            <img src={image} alt="cartype" width="100%" />
                            <div className="vehicleprice">
                                <div className="vp-head">
                                    <h2>{price}</h2>
                                    <p> / rent per day</p>
                                </div>
                                <div className="vehicleprice-detail">
                                    <div className="vp-detail">
                                        <div className="vp-detail-left">
                                            <p className='vp-detail-item'>Model</p>
                                            <p className='vp-detail-item'>Mark</p>
                                            <p className='vp-detail-item' >Year</p>
                                            <p className='vp-detail-item' >Doors</p>
                                            <p className='vp-detail-item' >AC</p>
                                            <p className='vp-detail-item' >Transmission</p>
                                            <p className='vp-detail-item' >Fuel</p>
                                        </div>
                                        <div className="vp-detail-right">
                                            <p className='vp-detail-item'>{model}</p>
                                            <p className='vp-detail-item' >{mark}</p>
                                            <p className='vp-detail-item' >{year}</p>
                                            <p className='vp-detail-item' >{door}</p>
                                            <p className='vp-detail-item' >{AC}</p>
                                            <p className='vp-detail-item' >{transmission}</p>
                                            <p className='vp-detail-item' >{fule}</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className='vp-button'><a href="#bookcar" className='bc-btn'>RESERVE NOW</a></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page7" id='about'>
                    <div className="page7-head">
                        <h1>Save big with our cheap car rental!</h1>
                        <p>Top Airports. Local Suppliers. <span className='redtext'>24/7</span>  Support.</p>
                    </div>
                    <div className="page7-img">
                        <img src={img5} alt="car" width="50%" />
                        <img src={img4} alt="car" width="50%" />
                    </div>

                    <div className="page7-footer" >
                        <div className="page7-footer-left">
                            <h3>Why Choose Us</h3>
                            <h1>Best valued deals you will ever find</h1>
                            <br />
                            <p className='graytext'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money. So you can enjoy top-quality services and products without breaking the bank. Our deals ar designed to give you the ultimat renting experience. So dont't miss out on your chance to save big</p>
                            <br />
                            <h3 className='footer-button'>Find Details</h3>
                        </div>

                        <div className="page7-footer-right">
                            <div className="page7-footer-right-text">
                                <i className="footer-logo fa-solid fa-car"></i>
                                <div>
                                    <h3>Cross Country Drive</h3>
                                    <br />
                                    <p className='graytext'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                                </div>
                            </div>

                            <div className="page7-footer-right-text">
                                <i class="footer-logo fa-solid fa-sack-dollar"></i>
                                <div>
                                    <h3>All Inclusive Pricing</h3>
                                    <br />
                                    <p className='graytext'>Get everuthing you need in one convenient. Transparent price with our all-inclusive pricing palicy</p>
                                </div>
                            </div>

                            <div className="page7-footer-right-text">
                                <i class="footer-logo fa-solid fa-hand-holding-dollar"></i>
                                <div>
                                    <h3>No Hidden Charges</h3>
                                    <br />
                                    <p className='graytext'>Enjoy peace of mind with our no hidden charges policy. We belive in transparent and honest pricing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page8">
                    <div className="pag8-head">
                        <h3>Reviewed by People</h3>
                        <h1>Client's Testimonials</h1>
                        <p className='graytext'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results. and they're eager to share their positive experiences with you</p>
                    </div>

                    <div className="qoute-contain">
                        <div className="qoute">
                            <p className='boldtext'>"We reted a car from this websitr and had an amazing experience! The booking was easy and the rental rates were very afforable"</p>
                            <div className="page8-cus">
                                <img src={img9} alt="harry" width="50px" className='cus' />
                                <div className="qoute-name">
                                    <h3>Parry Hotter</h3>
                                    <p>Belgrade</p>
                                </div>

                                <i class="fa-solid fa-quote-right page7-icon"></i>
                            </div>


                        </div>

                        <div className="qoute">
                            <p className='boldtext'  >"The car was in great condition and made our trip even better. Highly recommend for this car rental website"</p>
                            <div className="page8-cus">
                                <img src={img8} alt="Ron" width="50px" className='cus' />
                                <div className="qoute-name">
                                    <h3>Ron Rizzly</h3>
                                    <p>Noii Sad</p>
                                </div>

                                <i class="fa-solid fa-quote-right page7-icon"></i>
                            </div>

                        </div>
                    </div>


                </div>

                <div className="page9">
                    <div className="page9-head">
                        <h3>FAQ</h3>
                        <h1>Frequently Asked Questions</h1>
                        <p className='graytext'>Frequently Asked Questions About the Car Rental Booking Process on Our Website Answers to <br /> Common Concerns and inquires</p>
                    </div>
                    <div className="page9-body">
                        <img src={img10} alt="hinh" width="200px" className='page9-img2' />
                        <input type="radio" name="faq" id="faq1" />
                        <label htmlFor="faq1" className='accordion'>
                            <h3 className='page9-h3'>1. What is special about comparing rental ar deals?<span className='v'><i class="fa-solid fa-angle-down"></i></span></h3>
                        </label>
                        <p className='graytext page9-context'> Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements. ensuring you get the most value for your money. By comparing various options, you can find deals by researching online and comparing prices from different rental comoanies.</p>

                        <input type="radio" name="faq" id="faq2" />
                        <label htmlFor="faq2" className='accordion'>
                            <h3 className='page9-h3'>2. How  do i find the car rental deals?<span className='v'><i class="fa-solid fa-angle-down"></i></span></h3>
                        </label>
                        <p className='graytext page9-context'>You can find car rental deals by  researching online and  comparing pries from  different rental companies. Website such as Expedia, Kayak, and Travelocity allowyou to compare prices  and view available rental options. It is also recommended  to  sign up for email newsletters and follow  rental car companies  on social media to be indormed of any special deals or promotions.</p>

                        <input type="radio" name="faq" id="faq3" />
                        <label htmlFor="faq3" className='accordion'>
                            <h3 className='page9-h3'>3.  How  do i findsuch low rental car prices?<span className='v'><i class="fa-solid fa-angle-down"></i></span></h3>
                        </label>
                        <p className='graytext page9-context'>Book in  advance. Booking your rental car ahead of time can oftenresult in lower prices. Compare  prices from  multiple  companies: Use website like Kayak, Expedia, or  Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices</p>
                    </div>




                </div>

                <div className="page10" id='contact'>
                    <div className="page10-head">
                        <div className="page10-head-left">
                            <h1>Download our app to get <br /> most out of it</h1>
                            <br />
                            <p className='graytext'>Thrown shy denote ten ladies though ask saw. Or by to he going think <br /> order event music. Incommode so intention defective at convinced. <br /> Led income months itself and houses you</p>
                            <img src={img11} alt="hinh" width="150px" className='page10-img' />
                            <img src={img12} alt="hinh" width="150px" className='page10-img' />
                        </div>
                        <div className="page10-head-right">
                            <img src={img13} alt="hinh" width="500px" className='page10-img2' />
                        </div>

                    </div>

                    <div className="page10-body">
                        <div className="car-rental car-body">
                            <p><span className='boldtext'> CAR </span>Rental</p>
                            <p className='graytext'>We offers a big range-of vehicles for <br /> all your friving needs. We have the <br /> perfect car to meet your needs</p>
                            <div className="contact-info">
                                <p className='boldtext'>123-456-789</p>
                                <p className='boldtext'>carrental@gmail.com</p>
                            </div>

                        </div>

                        <div className="car-company car-body">
                            <p className='boldtext'>COMPANY</p>
                            <p>New York</p>
                            <p>Careers</p>
                            <p>Mobile</p>
                            <p>Blog</p>
                            <p>How we work</p>
                        </div>

                        <div className="car-working car-body">
                            <p className='boldtext'>WORKING HOURS</p>
                            <p>Mon - Fri: 9:00Am - 9:00PM</p>
                            <p>Sat: 9:00AM - 19:00PM</p>
                            <p>Sun: Closed</p>
                        </div>

                        <div className="car-sub car-body">
                            <p className='boldtext'>SUBSCRIPTION</p>
                            <p>Subscribe your Email address for <br /> latest news & updates</p>
                            <input type="email" name="email" placeholder='Enter Email Address' className='footer-input' />
                            <h3 className='footer-button'>Submit</h3>
                        </div>


                    </div>


                </div>

            </div>

        )
    }
}
export default Rent;


