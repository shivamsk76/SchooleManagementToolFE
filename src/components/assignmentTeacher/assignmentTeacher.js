
import React, { Component } from 'react'
import axios from 'axios'

 class AssignmentTeacher extends Component {

    constructor(props) {


        super(props);
        this.state = {
           AssignmentTopic: "",
         AssignmentDescription :"",
           AssignmentClass :"",
           AssignmentBy :"",
           AssignmentAttachment :"",
           AssignmentSubmissionDate :""
        }
        this.HandleChange = this.HandleChange.bind(this)
        this.SubmitHandle = this.SubmitHandle.bind(this)
    }



    HandleChange(e) { this.setState({ [e.target.id]: e.target.value })
                       
                    }

    SubmitHandle(e) {
        e.preventDefault();
        console.log(this.state.AssignmentAttachment);

        axios.post('http://localhost:9000/assignmentteacher',this.state).then(Response=>{
            console.log(Response);
        }).catch(err=>{
            console.log(err);
        })
       
        
    }


    render() {
        return (<div>

            <form onSubmit={this.SubmitHandle}>

        AssignmentTopic: <input type="text" id="AssignmentTopic" placeholder="Assignment topic name" onChange={this.HandleChange} /> <br /> <br />
        Assignment Description:  <input type="text" id="AssignmentDescription" onChange={this.HandleChange} /> <br /><br />
        Assignment Class: <input type="text" id="AssignmentClass" onChange={this.HandleChange} /> <br /> <br />
        Assignment By: <input type="text" id=" AssignmentBy" onChange={this.HandleChange} /> <br /> <br />
        Assignment Attachment: <input type="file" id="AssignmentAttachment" onChange={this.HandleChange} /> <br /> <br />
        Assignment Submission Date: <input type="text" id="AssignmentSubmissionDate" onChange={this.HandleChange} /> <br /> <br />
       
                <input type="submit"></input>

            </form>




        </div>)




    }
}
export default  AssignmentTeacher