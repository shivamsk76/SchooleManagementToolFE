import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'


const Nav2 = () =>{
    return(
        <div className="nnav">
            <nav>
             
                <table border="1" cellSpacing="5px"  className="ttable">
                      <tr>
                          <td>LOGIN </td>
                          <td  className="td1">SIGNUP</td>
                     </tr>
                </table>
         </nav>
     </div>
    ) 
}

export default Nav2
