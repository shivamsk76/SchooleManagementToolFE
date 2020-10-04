import React, { useState } from 'react'
import axios from "axios"

import {  Modal, Button, ModalFooter } from 'react-bootstrap'
function HooksTeacherSignup(props) {

    var[FirstName, setFirstName] = useState('')
    var[LastName, setLastName] = useState('')
    var[DOB, setDOB] = useState('')
    var[Sex, setSex] = useState('')
    var[FatherName, setFatherName] = useState('')
    var[MotherName, setMotherName] = useState('')
    var[Email, setEmail] = useState('')
    var[MobileNo, setMobileNo] = useState('')
    var[Address, setAddress] = useState('')
    var[Subject, setSubject] = useState('')
    var[Password, setPassword] = useState('')

    const submitHandle = (e) => {
        e.preventDefault();
        console.log("ok");
        console.log(FirstName);
       

       



          if (FirstName=='') { alert ("Enter FirstName")
            
          } else if (LastName=='') { alert ( "Enter LastName")
            
          } else if (FatherName=='') {alert( 'Enter FatherName')
            
          } else if (MotherName=='') { alert ('Enter Mother Name')
            
          } else if (MobileNo.length==10) { 
            if (Password.length==10 ) { alert("SignUp Completed") 
              
            }else alert("password should not lessthan 8 characters")
            
          } else alert("Enter valid mobile Number")

          var Data = {
            "Firstname":FirstName,
            "Lastname":LastName,
            "DoB":DOB,
            "Sex":Sex,
            "Fathername": FatherName,
            "Mothername": MotherName,
            "Emailid": Email,
            "Mobile":MobileNo,
           
            
            "Address": Address,
          
            "Subject":Subject,
            
            "Password":Password
          }
  
          axios.post("http://192.168.43.231:4900/teacheradmission", Data).then(Response => {
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
              SIGNUP
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
        
    
            <div>
            <form onSubmit={submitHandle}>
            First Name:<input type="text" id="FirstName"   onChange={(e)=>setFirstName(e.target.value)}  placeholder="First Name" /><br /><br />
        Last Name:<input type="text" id="LastName" onChange={(e)=>setLastName(e.target.value)} placeholder="LastName" /><br /><br />
        DOB:<input type="date" id="DOB" onChange={(e)=>setDOB(e.target.value)}  /><br /><br />
        Sex:<select  id="Sex" onChange={(e)=>setSex(e.target.value)} ><option>MALE </option>
                                                              <option>FEMALE</option>
        </select><br /><br />
        Father's Name:<input type="text" id="FatherName" onChange={(e)=>setFatherName(e.target.value)}  placeholder="Father's Name" /><br /><br />
        Mother's Name:<input type="text" id="MotherName" onChange={(e)=>setMotherName(e.target.value)}  placeholder="Mother's Name" /><br /><br />
        Email:<input type="email" id="Email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Email" /><br /><br />
        Mobile No.:<input type="text" id="MobileNo" onChange={(e)=>setMobileNo(e.target.value)}  placeholder="Mobile No." /><br /><br />
        Address:<input type="text" id="Address" onChange={(e)=>setAddress(e.target.value)}  placeholder="Enter Valid Adress" /><br /><br />
        Subject:<input type="text" id="Subject" onChange={(e)=>setSubject(e.target.value)}  /><br /><br />
        Password:<input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" /><br /><br />
        <ModalFooter>
        <input type="submit" onSubmit={submitHandle} />
        </ModalFooter>
           
        </form>
            </div>
        
           
          </Modal.Body>
         
         
        </Modal>
      );


   
}



  function TeacherSignupModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          AS  TEACHER
        </Button>
  
        <HooksTeacherSignup
 
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> 
      </div>
    );
  }

export default  TeacherSignupModal
