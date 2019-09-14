import React, { Component } from 'react'
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
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover' }}>Bloc Jams React Project</CardTitle>
                                <CardText>
                                    Spotify like web app Built in React
                                </CardText>
                                <CardActions border>
                                    <Button colored ><a href="https://github.com/nahitarules/bloc-jams-react" target="_blank">Github</a></Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        
                    </div>


                    
                )
            } else if(this.state.activeTab === 1) {
                return (
                    <div className="projects-grid">
                    {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/illustrations/angular.png) center / cover' }}>Bloc Jams Angular</CardTitle>
                            <CardText>
                                Spotify like web app Built in Angular
                            </CardText>
                            <CardActions border>
                            <Button colored ><a href="https://github.com/nahitarules/my-bloc-jams-angularjs" target="_blank">Github</a></Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        
                    </div>
                )
            } else if(this.state.activeTab === 2) {
                return (
                    <div className="projects-grid">
                    {/* Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2015/01/Blog_About-Ruby2.jpg) center / cover' }}>Blocipedia</CardTitle>
                            <CardText>
                             Web app that allows users to create wikis built in Ruby on Rails
                            </CardText>
                            <CardActions border>
                            <Button colored ><a href="https://github.com/nahitarules/blocipedia" target="_blank">Github</a></Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/* Project 2 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}> 
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2015/01/Blog_About-Ruby2.jpg) center / cover' }}>Open to do</CardTitle>
                            <CardText>
                            Open to do is an externally usable API for a basic to-do list application
                            </CardText>
                            <CardActions border>
                            <Button colored ><a href="https://github.com/nahitarules/open-to-do" target="_blank">Github</a></Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
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
                    
            </div>
        )
    }
}
