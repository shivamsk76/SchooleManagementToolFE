import React, { useState } from 'react'
import axios from "axios"
import {  Modal, Button, ModalFooter } from 'react-bootstrap'


function HooksStudentSignup(props) {

    var[FirstName, setFirstName] = useState('')
    var[LastName, setLastName] = useState('')
    var[DOB, setDOB] = useState('')
    var[Sex, setSex] = useState('')
    var[FatherName, setFatherName] = useState('')
    var[MotherName, setMotherName] = useState('')
    var[GuardianName, setGuardianName] = useState('')
    var[MobileNo, setMobileNo] = useState('')
    var[ParentsEmail, setParentsEmail] = useState('')
    var[Email, setEmail] = useState('')
    
    var[Address, setAddress] = useState('')
    var[Class, setClass] = useState('')
    var[Stream, setStream] = useState('')
    var[Extracurriculam, setExtracurriculam] = useState('')
    var[Password, setPassword] = useState('')

    var[Rollno, setRollno] = useState(0)

    const submitHandle = (e) => {
        e.preventDefault();



        if (FirstName=='') { alert ("Enter FirstName")
            
      } else if (LastName=='') { alert ( "Enter LastName")
        
      } else if (FatherName=='') {alert( "Enter Father's Name")
        
      } else if (MotherName=='') { alert ("Enter Mother's Name")
        
      } else if (GuardianName='') { alert ("Guardian's Name can not be empty")
        
      }else if (Address='') { alert ('Address can not be empty') 
         
      }      else if (MobileNo.length==10) { 
        if (Password.length==10 ) { alert("SignUp Completed") 


        setRollno(Rollno+1)
     
          
        }else alert("password should not lessthan 8 characters")
        
      } else alert("Enter valid mobile Number")

     
             var Data = {
               "Firstname":FirstName,
               "Lastname":LastName,
               "DoB":DOB,
               "Sex":Sex,
               "Fathername": FatherName,
               "Mothername": MotherName,
               "Guardianname":GuardianName,
               "Mobile":MobileNo,
               "ParentsEmailid":ParentsEmail,
               "Emailid": Email,
               "Address": Address,
               "Class": Class,
               "Stream":Stream,
               "Extracurriculam":Extracurriculam,
               "RollNo": Rollno,
               "Password":Password
             }
              
             console.log(Rollno);
              console.log("ok");
              console.log(FirstName);
             
      
              axios.post("http://192.168.43.231:4900/studentadmission", Data ).then(Response => {
                  console.log(Response);
                  console.log("data send");
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
        Father Name: <input type="text" id="Fathername"  onChange={(e)=>setFatherName(e.target.value)}  placeholder="Father's Name"  /> <br /> <br />
        Mother Name: <input type="text" id="Mothername"  onChange={(e)=>setMotherName(e.target.value)} placeholder="Mother's Name"  /> <br /> <br />
        Guardian Name: <input type="text" id="Guardianname" onChange={(e)=>setGuardianName(e.target.value)} /> <br /> <br />
        Mobile No.: <input type="text" id="Mobile"  onChange={(e)=>setMobileNo(e.target.value)}/>  <br /><br />
         Parent's Email : <input type="email" id="ParentsEmail" onChange={(e)=>setParentsEmail(e.target.value)}   placeholder=" Parent's Email"  /><br /><br />
        Email: <input type="email" id="Emailid"  onChange={(e)=>setEmail(e.target.value)} placeholder="Email" /> <br /> <br />
        Address: <input type="text" id="Address"  onChange={(e)=>setAddress(e.target.value)}  placeholder="Valid Address" /> <br /> <br />
        Class: <select id="Class"  onChange={(e)=>setClass(e.target.value)} placeholder="Choose"><option>Class I</option>
                                                                 <option>Class II</option>      
                                                                 <option>Class III</option>
                                                                 <option>Class IV</option>
                                                                 <option>Class V</option>
                                                                 <option>Class VI</option>
                                                                 <option>Class VII</option>
                                                                 <option>Class VIII</option>
                                                                 <option>Class IX</option>
                                                                 <option>Class X</option>                  
                   </select> <br /> <br />
        Stream: <input type="text" id="Stream"  onChange={(e)=>setStream(e.target.value)} /> <br /> <br />
        Extra Currriculam Activities: <input type="text" id="Extracurriculam" onChange={(e)=>setExtracurriculam(e.target.value)} /> <br /> <br />
        Password: <input type="text" id="Password"  onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />
              
        <ModalFooter>
        <input type="submit" onSubmit={submitHandle} />
        </ModalFooter>
           
        </form>
            </div>
        
           
          </Modal.Body>
         
         
        </Modal>
      );


   
}



  function StudentSignupModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          AS  Student
        </Button>
  
        <HooksStudentSignup
 
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> 
      </div>
    );
  }

export default  StudentSignupModal
