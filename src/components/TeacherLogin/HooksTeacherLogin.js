import React, { useState } from 'react'
import axios from "axios"
import {  Modal, Button, ModalFooter } from 'react-bootstrap'


function HooksTeacherLogin(props) {

   
    var[EnrollmentId, setEnrollmentId] = useState('')
    var[Password, setPassword] = useState('')

    const submitHandle = (e) => {
        e.preventDefault();
        console.log("ok");
        console.log(EnrollmentId);

        var Data = {
          "Emailid":EnrollmentId,
          "Password":Password,
        }
       

        axios.post("http://192.168.43.231:4900/teacherslogin", Data ).then(Response => {
            console.log(Response);
        }).catch(err => {
            console.log(err);
        })

    }
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
        
    
            <div>
            <form onSubmit={submitHandle}>
                        Enrollment ID:<input type="text" id="Enrollment_ID"  onChange={(e)=>setEnrollmentId(e.target.value)}   placeholder="Resgistered ID" /><br /><br />
                             Password:<input type="text" id="Password"  onChange={(e)=>setPassword(e.target.value)}   placeholder="Password" /><br /><br />
          <ModalFooter>
        <input type="submit" onSubmit={submitHandle} />
        </ModalFooter>
           
        </form>
            </div>
        
           
          </Modal.Body>
         
         
        </Modal>
      );


   
}



  function TeacherLoginModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          AS  Teacher
        </Button>
  
        <HooksTeacherLogin
 
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> 
      </div>
    );
  }

export default  TeacherLoginModal
