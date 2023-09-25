import './App.css';
import img1 from './media/1.jpeg'
import img2 from './media/2.jpeg'
import React from 'react';
import { Helmet } from "react-helmet";
import vid1 from './media/35.mov'
import vid2 from './media/36.mov'
import vid3 from './media/37.mov'


class App extends React.Component {
  playvideo = async (e) => {
    await e.target.play();

  }

  pausevideo = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  }

  render() {
    return (
      <div className='portfolio'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Nguyen Lam Son</title>
          <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        </Helmet>
        <div className="page1">
          <div className="infor"><p className='name'>Nguyen Lam Son</p>
            <p>Front End Developer</p>
            <br />
            <p>Creating beutiful and engaging digital experiences in Ho Chi Minh City</p>
          </div>
          <div className="nav">
            <p><a href="#about" className='button'>ABOUT</a></p>
            <p><a href="#product" className='button'>PRODUCT</a></p>
            <p><a href="#contact" className='button'>CONTACT</a></p>
          </div>
        </div>

        <div className="page2" id='about'>
          <h1 className='abouttitle'>ABOUT</h1>

          <div className="aboutcontain">
            <div className="about">
              <p className='title'>Front-end React Developer</p>
              <p className='infor'>Hi, Im Son. A passionate Front-end React Developer based in Ho Chi Minh City, Viet Nam </p>
              <i className='fa-brands fa-github logogit'></i>
              <div className="skill">
                <div className="skilltitle">Tech Stack</div>
                <div className="skilllogo">
                  <i className='fa-brands fa-html5 html5'></i>
                  <i className='fa-brands fa-css3-alt css3'></i>
                  <i className='fa-brands fa-js js'></i>
                  <i className='fa-brands fa-react react'></i>
                  <i className='fa-brands fa-sass sass'></i>
                </div>
              </div>
            </div>

            <div className="aboutme">
              <div className="img">
                <img src={img2} width='160px' className='img1' alt='img' />
                <img src={img1} width='200px' className='img2' alt='img' />
              </div>
              <div className="inforofme">
                <p className="title">Little About Me</p>
                <br />
                <p className='graytext'>
                  <br />
                  Born in Dong Nai, studying and working in Ho Chi Minh City. <br /><br /> My hobbies are camping, listening to music, watching movies, and discovering new things. <br /><br /> I studied Korean language and worked as a Korean interpreter for nearly 2 years, but because I was very curious and wanted to learn about the information technology industry so I switched to this field to study. <br /><br /> I am currently studying at FPT Aptech for 1 semester and I'm really eager to apply for a company to work. <br /><br /> With what I've learned at school and my passion for learning, I believe I will make a good contribution to the development of company
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="app-page3" id='product'>
          <div className="app-page3-head">
            <h1 className='abouttitle'>PRODUCT</h1>
            <br />
            <h1>Each project is a unique piece of development</h1>
          </div>


          <div className="app-page3-body">
            <div className="app-page3-contain">
              <video src={vid1} width="50%" loop preload="auto" className='por-vid' id='rent-vid' onMouseOver={this.playvideo} onMouseOut={this.pausevideo} muted></video>
              <div className="app-page3-text">
                <p className='bigtext boldtext'>CAR RENTAL</p>
                <p className='graytext'>A car rental website is an online platform tha allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reseving cars</p>
                <p className='boldtext'>React</p>
                <a href="/rent" target="_blank" className='boldtext app-page3-button'>Live Demo</a>
              </div>

            </div>

            <div className="app-page3-contain app-page3-contain-revese">
              <div className="app-page3-text">
                <p className='bigtext boldtext'>RESTAURANT WOW</p>
                <p className='graytext'>This website would be very interesting. The website contains more than just information, it contains very appealing pictures of food.</p>
                <p className='boldtext'>React</p>
                <a href="/restaurant" target="_blank" className='boldtext app-page3-button'>Live Demo</a>
              </div>
              <video src={vid3} width="50%" loop preload="auto" className='por-vid' id='rent-vid' onMouseOver={this.playvideo} onMouseOut={this.pausevideo} muted></video>
            </div>

            <div className="app-page3-contain">
              <video src={vid2} width="50%" loop preload="auto" className='por-vid' id='rent-vid' onMouseOver={this.playvideo} onMouseOut={this.pausevideo} muted></video>
              <div className="app-page3-text">
                <p className='bigtext boldtext'>BAUHAUS</p>
                <p className='graytext'>The Bauhaus website is a clean and minimalist design style that works great for architecture websites. This website design style keeps the photos of your work as the center of focus, while also providing a pleasant user experience.</p>
                <p className='boldtext'>React</p>
                <a href="/architech" target="_blank" className='boldtext app-page3-button'>Live Demo</a>
              </div>
            </div>

          </div>

        </div>

        <div className="app-footer" id='contact'>
          <div className="app-footer-head">
            <h1 className='abouttitle'>CONTACT</h1>
            <p className='graytext'>Dont be shy, hit me up</p>
          </div>

          <div className="app-footer-body">
            <p className='boldtext bigtext'>EMAIL</p>
            <p className='bigtext'>nguyenlamson4321@gmail.com</p>
            <br />
            <p className='boldtext bigtext'>TEL</p>
            <p className='bigtext'>0902667394</p>
          </div>

        </div>

      </div>
    )
  }
}


export default App;