import React, { Component } from 'react'
import { Grid, Cell} from "react-mdl"
import Education from "./education"
import Experience from "./experience"
import Skills from "./skills"
import me from "../me.jpg"

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>

                     <h2 style={{paddingTop: '2em'}}>Nahome Gudeta</h2>
                     <h4 style={{color: 'grey'}}>Software Engineer</h4>

                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

                     <p></p>

                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                     <h5>Address</h5>
                     <p>4105 Georgia St</p>
                     <h5>Phone</h5>
                     <p>619 994-5136</p>
                     <h5>Email</h5>
                     <p>gudetasd@gmail.com</p>
                     <h5>Web</h5>
                     <p>nahomegudeta.com</p>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>

                     <Education 
                        startYear={2017} 
                        endYear={2019}
                        schoolName="BLOC"
                        schoolDescription="Remote immersive coding bootcamp that teaches full stack web development"
                     />

                     <Education 
                        startYear={2014} 
                        endYear={2017}
                        schoolName="San Diego City College"
                        schoolDescription="Succesfully Completed 33 unit courses including Calculus and C++ programming"
                     />

                     <hr style={{borderTop: '3px solid #e22947'}} />

                     <h2>Experience</h2>

                     <Experience 
                      startYear={2013}
                      endYear={2019}
                      jobName="7-eleven sales associate"
                      jobDescription="as a sales associate at 7-eleven I am responsible to handle cash transactions, provide excellent customer service, and stock items."
                     />

                     <hr style={{borderTop: '3px solid #e22947'}} />

                     <h2>Skills</h2>

                     <Skills 
                     skill="HTML/CSS"
                     progress={100}
                     />

                     <Skills 
                     skill="javascript"
                     progress={100}
                     />

                     <Skills 
                     skill="react"
                     progress={100}
                     />

                     <Skills 
                     skill="Nodejs"
                     progress={100}
                     />

                     <Skills 
                     skill="angular"
                     progress={80}
                     />

                     <Skills 
                     skill="java"
                     progress={60}
                     />

                     <Skills 
                     skill="c++"
                     progress={70}
                     />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
