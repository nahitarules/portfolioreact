import React, { Component } from 'react'
import Contacts from './contacts'
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell } from "react-mdl";

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }
        toggleCategories() {
            if(this.state.activeTab === 0) {
                return (
                    <div className="projects-grid">  
                        {/* Project 1 */}
                            <Card className="card"> 
                                <CardTitle className="card-title react" style={{color: 'white'}}>Bloc Jams React Project</CardTitle>
                                <CardText>
                                    Spotify like web app Built in React
                                </CardText>
                                <CardActions border>
                                    <Button colored ><a href="https://github.com/nahitarules/bloc-jams-react" target="_blank">Github</a></Button>
                                </CardActions>
                                <CardMenu className="card-menu">
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                            <Card className="card"> 
                                <CardTitle className="card-title react" style={{color: 'white'}}>Resort App With Rooms</CardTitle>
                                <CardText>
                                    Hotel Resort Web App that lets Users Filter rooms.
                                </CardText>
                                <CardActions border>
                                    <Button colored ><a href="https://github.com/nahitarules/resort" target="_blank">Github</a></Button>
                                </CardActions>
                                <CardMenu className="card-menu">
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                            <Card className="card"> 
                                <CardTitle className="card-title react" style={{color: 'white'}}>React Smart Phone Store</CardTitle>
                                <CardText>
                                    E-commerce website for smart phones
                                </CardText>
                                <CardActions border>
                                    <Button colored ><a href="https://github.com/nahitarules/react-phone-store" target="_blank">Github</a></Button>
                                </CardActions>
                                <CardMenu className="card-menu">
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        
                    </div>
                )
            } else if(this.state.activeTab === 1) {
                return (
                    <div className="projects-grid">
                    {/* Project 1 */}
                        <Card className="card" > 
                            <CardTitle className="card-title angular">Bloc Jams Angular</CardTitle>
                            <CardText>
                                Spotify like web app Built in Angular
                            </CardText>
                            <CardActions border>
                            <Button colored ><a href="https://github.com/nahitarules/my-bloc-jams-angularjs" target="_blank">Github</a></Button>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        
                    </div>
                )
            } else if(this.state.activeTab === 2) {
                return (
                    <div className="projects-grid">
                    {/* Project 1 */}
                        <Card className="card" > 
                            <CardTitle className="card-title ruby">Blocipedia</CardTitle>
                            <CardText>
                             Web app that allows users to create wikis built in Ruby on Rails
                            </CardText>
                            <CardActions border>
                            <Button colored ><a href="https://github.com/nahitarules/blocipedia" target="_blank">Github</a></Button>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 2 */}
                        <Card className="card"> 
                            <CardTitle className="card-title ruby">Open to do</CardTitle>
                            <CardText>
                            Open to do is an externally usable API for a basic to-do list application
                            </CardText>
                            <CardActions border>
                            <Button colored ><a href="https://github.com/nahitarules/open-to-do" target="_blank">Github</a></Button>
                            </CardActions>
                            <CardMenu className="card-menu" >
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                )
            }
        }

    
    render() {
        return (
        <div className="category-tabs">
        <div className="projects-contact">
            <div>
            <Tabs activeTab={ this.stateactiveTab } onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Ruby On Rails</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                <div>
                    <Contacts />
                </div>  
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
