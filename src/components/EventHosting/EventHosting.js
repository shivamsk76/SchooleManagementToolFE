
import React, { Component } from 'react'
import axios from 'axios'

 class AssignmentTeacher extends Component {

    constructor(props) {


        super(props);
        this.state = {
           Eventname: "",
         Eventaddress :"",
           Organizedby :"",
           Eventfees :"",
           Eventdate :"",
           Eventtime :""
        }
        this.HandleChange = this.HandleChange.bind(this)
        this.SubmitHandle = this.SubmitHandle.bind(this)
    }



    HandleChange(e) { this.setState({ [e.target.id]: e.target.value })
                       
                    }

    SubmitHandle(e) {
        e.preventDefault();
        

        axios.post('http://localhost:9000/eventhosting',this.state).then(Response=>{
            console.log(Response);
        }).catch(err=>{
            console.log(err);
        })
       
        
    }


    render() {
        return (<div>

            <form onSubmit={this.SubmitHandle}>

            Event Name : <input type="text" id="Eventnam" placeholder="Assignment topic name" onChange={this.HandleChange} /> <br /> <br />
            Event Address:  <input type="text" id=" Eventaddress" onChange={this.HandleChange} /> <br /><br />
            Organized By: <input type="text" id=" Organizedby" onChange={this.HandleChange} /> <br /> <br />
            Event Fees: <input type="text" id=" Eventfees" onChange={this.HandleChange} /> <br /> <br />
            Event Date : <input type="file" id=" Eventdate " onChange={this.HandleChange} /> <br /> <br />
            Event Time: <input type="text" id="Eventtime" onChange={this.HandleChange} /> <br /> <br />
       
                <input type="submit"></input>

            </form>




        </div>)




    }
}
export default  AssignmentTeacher