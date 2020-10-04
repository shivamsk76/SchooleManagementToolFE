import React from 'react'
import './Nav.css'

import { Link } from 'react-router-dom';
import { BsFillBellFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import 'bootstrap/dist/css/bootstrap.min.css'
import {  NavDropdown, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'

import HooksStudentSignup from '../StudentSignup/HooksStudentSignup';
import HooksTeacherSignup from '../TeacherSignup/HooksTeacherSignup';


import HooksTeacherLogin from '../TeacherLogin/HooksTeacherLogin'
import HooksStudentLogin from '../StudentLogin/HooksStudentLogin'
import Menu from '../Menubar/menu'






const Nav2 = () => {

  return (
    
    <div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />

    <div  className="shivam" >

      <Navbar  bg="info" expand="lg" >
     

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
         


            <Nav.Link href="#home"><AiFillHome class="light mx-1 " />Home</Nav.Link>

            <Nav.Link href="#NOTIFICATION"><BsFillBellFill />NOTIFICATION</Nav.Link>


          </Nav>
          <Form inline>
         
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>


           <NavDropdown title="LOGIN" id="basic-nav-dropdown" class="drop">
          
                                    <HooksStudentLogin /> 

                                    <NavDropdown.Divider />
                                    
                                    <HooksTeacherLogin/>
           </NavDropdown>


           
         
          <NavDropdown title="SIGNUP" id="basic-nav-dropdown">
                           <HooksTeacherSignup/>
                           
                           <NavDropdown.Divider />
                           
                           <HooksStudentSignup/>
          
          </NavDropdown>



        </Navbar.Collapse>
      </Navbar>
</div>
      

    </div>)


}


export default Nav2
