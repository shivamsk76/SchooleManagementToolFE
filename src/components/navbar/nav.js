import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'
import {FaBars, IconName} from "react-icons/fa"


const Nav = () =>{
    return(
        <div class="nnav">
            <nav>
            <div class="sam"><FaBars  /></div>
               <ul>  <Link to="/"  class="Link"> <li class="hove">LOGIN 
                         <div class="submenu"> <ul >
                                                 <li  class="list" >As Teacher</li>  
                                                <li  class="list"> As Student</li></ul>
                         </div>
                                     
                    </li></Link>
                      <Link to="/"  class="Link">  <li class="hove">SIGNUP
                       <div class="submenu"> <ul ><li class="list">As Teacher</li> 
                                                 <li class="list"> As Student</li>
                                             </ul>
                      </div></li></Link>
                </ul>
                
         </nav>


         <Link to="/" class="Link">
         <li class="hove"><button class="btn btn-danger">LOGIN</button>
            <div class="submenu"> <ul >
                                       <li class="list" >As Teacher</li>
                                       <li class="list"> As Student</li>
                                   </ul>
           </div>

         </li>
       </Link>


       <Link to="/" class="Link"> 
           <li class="hove">SIGNUP
               <div class="submenu"> <ul>
                     <li class="list">As Teacher</li>
                    <li class="list"> As Student</li>
                   </ul>
                </div>
           </li>
       </Link>

     </div>
    ) 
}

export default Nav
