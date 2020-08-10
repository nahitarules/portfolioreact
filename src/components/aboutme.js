import React, { Component } from 'react'
import steve from '../steve.jpg'
import glassMe from '../glassMe.jpg'

export default class About extends Component {
    render() {
        
        return (
            <div className="about">
                <p className="quote">"If you are not busy being born, you're busy dying" - Bob Dylan</p>
                <h1 className="page-title">About me</h1>
                <div className="about-container">
                <p className="main-text">
                   Hello, I'm Nahome Gudeta Full Stack Web Developer.
                   I use Javascript and its main frameworks and libraries,
                   such as React and also HTML and CSS to build great websites.
                </p>

                <img class="about-image" src={glassMe} alt="my picture wearing glasses"/>
                </div>
                <div className="text-section">
                    <h2 className="section-title">Passionate Developer</h2>
                    <p className="main-text text">Web development is my passion, I enjoy building websites
                        and improving them. The other thing I like about web development
                        is there is always something new, new update or new library, you
                        are constantly learning.
                    </p>
                    <p className="main-text text">
                        Web development for me, is where art and technology intersect truly,
                        you have the artistic freedom, to imagine, create and distribute freely 
                        while building tools that help make people's lives easier.
                    </p>
                </div>

                <div className="footer">
                <div className="footer-container">
                    <div class="footer-main">
                        <p class="footer-text">Get in touch on social media</p>
                    </div>

                    <div className="social-list">
                        <a className="social-link" href="https://www.facebook.com/NahiiSD/" rel="noopener noreferrer" target="_blank">  
                            <i className="fab fa-facebook" aria-hidden="true" />
                        </a>

                        <a className="social-link" href="https://www.instagram.com/nahitaa/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-instagram" />
                        </a>

                        <a className="social-link" href="https://twitter.com/NahomeGudeta" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-twitter" />
                        </a>
                    </div>
                  </div>  
                        <p class="footer-fineprint" style={{marginBottom: 0}}>© Nahome Gudeta 2020</p>
                </div>
            </div>
        )
    }
}

