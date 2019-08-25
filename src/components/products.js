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
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://avatarfiles.alphacoders.com/118/118618.jpg) center / cover' }}>React Project</CardTitle>
                            <CardText>
                                Spotify like web app Built in React
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    
                )
            } else if(this.state.activeTab === 1) {
                return (
                    <div><h1>This is Angular</h1></div>
                )
            } else if(this.state.activeTab === 2) {
                return (
                    <div><h1>This is Ruby on Rails</h1></div>
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
