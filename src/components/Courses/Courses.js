import React from 'react'
import {  Container, Media } from 'react-bootstrap'
import './Courses.css'
 import CLASS1 from '../images/CLASS1.jpg'

const Courses = () =>{
    return(
<div> <Container>  <p ><h2>OUR COURSES </h2></p><br/><br/><p><h3>Our School provides English classes for fluent English speaking children between the ages of 3 to 11 being brought up in a bilingual environment. Many of the children have one or two English-speaking parents and English is spoken at home. Others have returned from abroad where their schooling was in English and wish to maintain their fluency.

Our School is a non-profit Association and was established in 2003. It is run by a team of administrators and fully trained English-language mother tongue teachers.


Our School is based in premises owned by the Collège Sacré Coeur in the Saint Louis area of Versailles.


We strive to maintain class numbers adapted the requirements of bilingual teaching. The class numbers are therefore small and children develop their speaking, reading and writing abilities in English.

Nursery children take time off their French school two afternoons a week and the primary children attend school on Wednesdays. </h3></p>
  <Media>
    <img
      width={64}
      height={64}
      className="align-self-start mr-50"
      src={CLASS1}
      
      alt="class1"
    />
    <Media.Body>
      <h5 class="class1">Class</h5>
      <p>
       There are 6 subjects for Class I in our school
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-center mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h2> </h2>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-end mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p className="mb-0">
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media></Container>
</div> )}

export default Courses