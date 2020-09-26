import React, { Component } from 'react'
import './footer.css'

export class footer extends Component {
    render() {
        return (
          <footer className="ffooter">
               <h1>contact us</h1> 
               <p>&copy;{new Date().getFullYear()}THICC SCHOOL INC  | All rights reserved | Terms Of Services |  Privacy</p>
            </footer>
            
        )
    }
}

export default footer
