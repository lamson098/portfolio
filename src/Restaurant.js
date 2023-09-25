import React from "react";
import img1 from './media/24.webp'
import img2 from './media/27.jpeg'
import img3 from './media/28.webp'
import img4 from './media/29.jpeg'
import img5 from './media/30.webp'
import { Helmet } from 'react-helmet';

class Restaurant extends React.Component {

    allfood = () => {

        document.querySelector(".one").style.background = "rgb(249, 62, 29)"
        document.querySelector(".one").style.color = "aliceblue"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"
        document.getElementById("123").innerHTML = `<div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Cappuccion</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div>
    <div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Americano</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div>      
    <div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Macchiato</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div>

    <div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Mocha</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div>

    <div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Piccolo Latte</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div>

    <div class="arcodion-item">
        <div class="arcordion-head">
            <h2> Ristretto</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div>
    `

    }

    breakfast = () => {
        document.querySelector(".two").style.background = "rgb(249, 62, 29)"
        document.querySelector(".two").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"

        document.getElementById("123").innerHTML = `<div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Cappuccion</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div>


    <div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Mocha</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div> `
    }
    lunch = () => {
        document.querySelector(".three").style.background = "rgb(249, 62, 29)"
        document.querySelector(".three").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"


        document.getElementById("123").innerHTML = `<div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Piccola Latte</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div> `
    }
    dinner = () => {
        document.querySelector(".four").style.background = "rgb(249, 62, 29)"
        document.querySelector(".four").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".five").style.background = "white"
        document.querySelector(".five").style.color = "black"

        document.getElementById("123").innerHTML = `<div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Americano</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div> 
    <div class="arcodion-item">
    <div class="arcordion-head">
        <h2>Piccolo Latte</h2>
        <p class="redtext bigtext">$49</p>
    </div>
    <br />
    <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
</div>

<div class="arcodion-item">
    <div class="arcordion-head">
        <h2> Ristretto</h2>
        <p class="redtext bigtext">$49</p>
    </div>
    <br />
    <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
</div>`
    }
    buffet = () => {
        document.querySelector(".five").style.background = "rgb(249, 62, 29)"
        document.querySelector(".five").style.color = "aliceblue"
        document.querySelector(".one").style.background = "white"
        document.querySelector(".one").style.color = "black"
        document.querySelector(".two").style.background = "white"
        document.querySelector(".two").style.color = "black"
        document.querySelector(".three").style.background = "white"
        document.querySelector(".three").style.color = "black"
        document.querySelector(".four").style.background = "white"
        document.querySelector(".four").style.color = "black"

        document.getElementById("123").innerHTML = `
    <div class="arcodion-item">
        <div class="arcordion-head">
            <h2>Ristretto</h2>
            <p class="redtext bigtext">$49</p>
        </div>
        <br />
        <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
    </div> 
    <div class="arcodion-item">
    <div class="arcordion-head">
        <h2>Mocha</h2>
        <p class="redtext bigtext">$49</p>
    </div>
    <br />
    <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
</div> `
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Restaurant Wow</title>
                    <link rel="icon" type="image/png" href="favicon4.ico" sizes="16x16" />
                </Helmet>
                <div className="res-page1">
                    <div className="res-p1-menu">
                        <p className="whitetext">HOME</p>
                        <p><a href="#ABOUT" className="whitetext">ABOUT</a></p>
                        <p><a href="#MENU" className="whitetext">MENU</a></p>
                        <p className="whitetext">GALLERY</p>
                        <p><a href="#BLOG" className="whitetext">BLOG</a></p>
                        <p><a href="#PAGES" className="whitetext">PAGES</a></p>
                        <p><a href="#CONTACT" className="whitetext">CONTACT</a></p>
                    </div>
                    <div className="res-page1-contain">
                        <div className="res-p1-contain">
                            <p>WIDE OPTIONS OF CHOICE</p>
                            <br />
                            <p className="big-text">Delicious Recipes</p>
                            <br />
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className="res-p1-button"><p>CHECK OUR MENU</p></div>
                    </div>


                </div>

                <div className="res-page2" id="ABOUT">
                    <div className="res-page2-left">
                        <h1>About Our Story</h1>
                        <br />
                        <p className="graytext">Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br />
                        <h3 className="res-p2-button">VIEW FULL MENU</h3>
                    </div>
                    <div className="res-page2-right">
                        <img src={img1} alt="hinh" width="90%" />
                    </div>

                </div>

                <div className="res-page3" id="MENU">
                    <div className="res-page3-head">
                        <h1>What kind of Foods we serve for you</h1>
                        <br />
                        <p className="graytext">Who are in extremely love with eco friendly system.</p>
                    </div>



                    <div className="res-page3-body">

                        <div className="res-page3-arcodion">
                            <h3 className="res-page3-arcodion-btn arcodion-btn-first one" onClick={this.allfood}>All Menu</h3>
                            <h3 className="res-page3-arcodion-btn two" onClick={this.breakfast}>Breakfast</h3>
                            <h3 className="res-page3-arcodion-btn three" onClick={this.lunch}>Lunch</h3>
                            <h3 className="res-page3-arcodion-btn four" onClick={this.dinner}>Dinner</h3>
                            <h3 className="res-page3-arcodion-btn arcodion-btn-last five" onClick={this.buffet}>Buffet</h3>
                        </div>

                        <div className="arcodion-item-contain" id="123">
                            <div class="arcodion-item">
                                <div class="arcordion-head">
                                    <h2>Cappuccion</h2>
                                    <p class="redtext bigtext">$49</p>
                                </div>
                                <br />
                                <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div>
                            <div class="arcodion-item">
                                <div class="arcordion-head">
                                    <h2>Americano</h2>
                                    <p class="redtext bigtext">$49</p>
                                </div>
                                <br />
                                <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div>
                            <div class="arcodion-item">
                                <div class="arcordion-head">
                                    <h2>Macchiato</h2>
                                    <p class="redtext bigtext">$49</p>
                                </div>
                                <br />
                                <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div>

                            <div class="arcodion-item">
                                <div class="arcordion-head">
                                    <h2>Mocha</h2>
                                    <p class="redtext bigtext">$49</p>
                                </div>
                                <br />
                                <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div>

                            <div class="arcodion-item">
                                <div class="arcordion-head">
                                    <h2>Piccolo Latte</h2>
                                    <p class="redtext bigtext">$49</p>
                                </div>
                                <br />
                                <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div>

                            <div class="arcodion-item">
                                <div class="arcordion-head">
                                    <h2> Ristretto</h2>
                                    <p class="redtext bigtext">$49</p>
                                </div>
                                <br />
                                <p class="graytext">Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="res-page4" id="PAGES">

                    <div className="res-page4-left">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email Address" />
                        <input type="tel" placeholder="Phone Number" />
                        <input type="date" placeholder="Select Date & Time" />
                        <select placeholder="Select Event" className="select-res">
                            <option value="option1">Event One</option>
                            <option value="option2">Event Two</option>
                            <option value="option3">Event Three</option>
                            <option value="option4">Event Four</option>
                        </select>
                        <div className="res-page4-btn">
                            <p>Make Reservation</p>
                        </div>
                    </div>
                    <div className="res-page4-right">
                        <h2>Reserve Your Seats to Confirm if You Come with Your Family</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    </div>
                </div>

                <div className="res-page5" id="BLOG">
                    <div className="res-page5-head">
                        <h2>Latest From Our Blog
                        </h2>
                        <br />
                        <p className="graytext">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="res-page5-contain">
                        <div className="res-page5-item">
                            <img src={img2} alt="hinh" width="320px" height="250px" />
                            <br />
                            <p className="day">07 Sep 2023</p>
                            <br />
                            <p className="boldtext res-title res-title">Cooking Perfect Fried Rice in minutes</p>
                            <br />
                            <p className="graytext">inappropriate behavior ippum dola sit amet, consectetur</p>
                        </div>
                        <div className="res-page5-item">
                            <img src={img3} alt="hinh" width="320px" height="250px" />
                            <br />
                            <p className="day">10 Sep 2023</p>
                            <br />
                            <p className="boldtext res-title">Secret of making Heart Shaped eggs</p>
                            <br />
                            <p className="graytext">inappropriate behavior ippum dola sit amet, consectetur</p>
                        </div>
                        <div className="res-page5-item">
                            <img src={img4} alt="hinh" width="320px" height="250px" />
                            <br />
                            <p className="day">15 Sep 2023</p>
                            <br />
                            <p className="boldtext res-title">How to check steak if it is tender or not</p>
                            <br />
                            <p className="graytext">inappropriate behavior ippum dola sit amet, consectetur</p>
                        </div>
                        <div className="res-page5-item">
                            <img src={img5} alt="hinh" width="320px" height="250px" />
                            <br />
                            <p className="day">20 Sep 2023</p>
                            <br />
                            <p className="boldtext res-title">Seaseme and black seed Flavored Bun Rocks</p>
                            <br />
                            <p className="graytext">inappropriate behavior ippum dola sit amet, consectetur</p>
                        </div>
                    </div>

                </div>

                <div className="res-lastpage">
                    <div className="res-lastpage-one lastpage-item">
                        <h3>Opening Hours</h3>
                        <br />
                        <br />
                        <div className="tabsize">
                            <p>Monday  - Friday</p>
                            <p>08:00 am - 10:00 pm</p>
                        </div>


                        <div className="tabsize">
                            <p>Saturday</p>
                            <p>08:00 am - 10:00 pm</p>
                        </div>
                        <div className="tabsize">
                            <p>Sunday</p>
                            <p>08:00 am - 10:00 pm</p>
                        </div>


                    </div>

                    <div className="res-lastpage-two lastpage-item" id="CONTACT">
                        <h3>Contact Us</h3>
                        <br />
                        <br />
                        <p>56/8, los angeles, rochy beach, Santa monica, United states of america - 1205</p>
                        <br />
                        <p className="boldtext bigtext">012-6532-568-9746</p>
                        <br />
                        <p className="boldtext bigtext">012-6532-568-9748</p>
                    </div>

                    <div className="res-lastpage-three lastpage-item">
                        <h3>Newsletter</h3>
                        <br />
                        <br />
                        <p>You can   trust us, we only send promo  offers, not a single spam</p>
                        <br />
                        <input type="text" placeholder="Your Email Address" className="res-input" />
                    </div>

                </div>
            </>
        )
    }
}

export default Restaurant;