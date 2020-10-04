import React, { Component } from 'react'
import Headers from '../header/header'
import Footer from '../footer/footer'
import Navbar  from '../navbar/nav2'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


import Menu from '../Menubar/menu'
import Courses from '../Courses/Courses'
import HooksTeacherSignup from '../TeacherSignup/HooksTeacherSignup'


export class homepage extends Component {
    render() {
        return (
            <Router>
            <Headers/>
            <div>
          
            
               <Navbar/>
                <Switch>
                
                 <Route exact path= "/menu" exact component={Menu} ></Route>
                 <Route exact path= "/Courses" exact component={Courses} ></Route>
                 
                 
                
                
                </Switch>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
             <p>ksdfjakl;fjd;lfj;sdfjlasfdlk;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff</p>
                <Footer></Footer>
            </div>
            </Router>
        )
    }
}

export default homepage
