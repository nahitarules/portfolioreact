import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import glassMe from '../glassMe.jpg'

export default class Landingpage extends Component {
    render() {
        return (
            <div className="container">
            <div className="hero">
                <img class="main-image" src={glassMe} alt="my picture wearing glasses"/>
                <div className="landing" >
                    <p>Hello, I'm Nahome.<br />
                    I'm full stack web developer</p>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div class="footer-main">
                        <p class="footer-text">Get in touch on social media</p>
                    </div>

                    <div className="social-list">
                        <a className="social-link" href="http://google.com" rel="noopener noreferrer" target="_blank">  
                            <i className="fab fa-facebook" aria-hidden="true" />
                        </a>

                        <a className="social-link" href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-instagram" />
                        </a>

                        <a className="social-link" href="http://google.com" rel="noopener noreferrer" target="_blank">
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
 