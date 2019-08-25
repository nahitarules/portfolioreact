import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import glassMe from '../glassMe.jpg'

export default class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                        src={glassMe}
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTMLCSS | Javascript | React | Node.js | Ruby on Rails</p>

                            {/* LinkedIn */}
                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                 {/* Github */}
                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                 </a>

                                 {/* FreeCodeCamp */}
                                 <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                 </a>

                            </div>
                       
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
 