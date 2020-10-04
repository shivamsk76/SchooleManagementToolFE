
import React from 'react'
import {Link} from 'react-router-dom';

import {FaBars, IconName} from "react-icons/fa"
import {  Tab,Row,Col,ListGroup } from 'react-bootstrap'
import './menu.css'



const Menu = () =>{
    return(
      <div class="Menu">
        <div  class="col-xl-10 col-md-20 col-12 SideNav-SidePanel-module--cls2--1PH6H SideNav-SidePanel-module--cls1--34IFY d-flex flex-column">
        <Tab.Container id="list-group-tabs-example" >
        <Row>
          <Col   sm={2} >
            <ListGroup  >
             <Link to="/Courses"> <ListGroup.Item >
                COURSES 
              </ListGroup.Item></Link>
              <ListGroup.Item action href="#ADMISSION">
                ADMISSION
              </ListGroup.Item>
              <ListGroup.Item action href="#CLASSROOMS">
                 CLASS ROOMS
              </ListGroup.Item>
              <ListGroup.Item action href="#SPORTS">
                SPORTS
              </ListGroup.Item>
             
              <ListGroup.Item action href="#FACULTY">
                FACULTY
              </ListGroup.Item>
              <ListGroup.Item action href="#EVENTS">
                EVENTS
              </ListGroup.Item>
              <ListGroup.Item action href="#OUR TOPPERS">
                OUR TOPPERS
              </ListGroup.Item>
              <ListGroup.Item action href="#SCHLORSHIP">
              SCHLORSHIP
            </ListGroup.Item>
            </ListGroup>
          </Col>
          
        </Row>
      </Tab.Container>
     
      </div> </div> ) 
}

export default Menu




