import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl"
import glassMe from '../glassMe.jpg'

export default class Contacts extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Nahome Gudeta</h2>
                        <img  src={ glassMe } 
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Full stack web developer proficient in Javascript</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                         <List>
                             <ListItem>
                                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (619) 994-5136
                                 </ListItemContent>
                             </ListItem>

                             <ListItem>
                                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    gudetasd@gmail.com
                                 </ListItemContent>
                             </ListItem>

                         </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
