import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl"
import glassMe from '../glassMe.jpg'

export default function Contacts() {       
        return (
            <div className="contact-container">
                <h2 className="contact-header">Keep In Touch</h2>
                <div className="contact">
                    <p className="contact-text">Phone: 619-994-5136</p>
                    <p className="contact-text">email: gudetasd@gmail.com</p>
                </div>
            </div>
            
        )
}
