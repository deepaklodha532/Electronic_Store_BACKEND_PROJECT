import { Col, Container, Row } from "react-bootstrap";
import Base from "../components/Base";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <Base title="ELECTRONIC Store / About Company  and owner " description={null}>
        
        <Container  className='shadow-sm'  bg="dark"  >
          <Row className="justify-content-center align-item-center">
            <Col md={'7'} className=" shadow my-3">
            <h5>About ElectronicStore and Creator <br /><br /> DEEPAK LODHA </h5>
              <h6>Full Stack Developer</h6>
               <div>
               <ul> 
               <li><b>Date of Birth : </b> 14th March 2004</li>
               <li><b>HomeTown  : </b> Guna, currently residing in Bhopal</li>
               <li><b>Education: </b> 
                   <ul>
                   <li>Pursuing B.Tech in Electrical and Electronics Engineering</li>
                   <li> <b>College:</b> Bansal Institute of Research & Technology, Bhopal</li>
                   <li><b>Batch</b> 2021 -  2025</li>
                   </ul>

               </li>
               <li><b>Professional Involvement:</b> 
                   <ul>
                   <li>Founded <b>ElectronicStore </b> in 2024</li>
                   <li><b>ElectronicStore</b> is a project-based company working on development and IoT-based projects</li>
                   <li><b>ElectronicStore</b> will  make self project in coming days ,  on this  as soon as start working  , 
                      therefore we are searching more effective  developer  if you are work with my team  you can join Our team ElectronicStore ,
                      job BASED ON Developer 
                   </li>
                   </ul>

               </li>
               </ul>
               </div>

               <strong > My about CODING JOURNEY  : </strong>
               
               <ul> 
               <li>Started with C and C++ during the first year of college, spending at least 6 months gaining good knowledge in these technologies</li>
               <li>In the second year, began a Java journey and joined an English-speaking course 
                   <ul>
                   <li>Spent 1 month learning English-speaking and 2 more months practicing, totaling 3 months
                   </li>
                   <li>Developed good communication skills, learned how to give effective presentations, and prepared for interviews</li>
                   </ul>
               </li>
               <li>After learning Java, studied Data Structures and Algorithms, solving over 1,000 problems, either independently or with the help of team members</li>
               <li>In the third year, considered the best year as he started development and began working with multiple technologies including HTML, CSS, JavaScript, React.js, Bootstrap, and React Bootstrap
                  <li>Also learned some form validation libraries during this time</li>
               </li>
               <li>Currently enhancing skills to become a more professional developer by pursuing a microservices course, focusing on learning through projects and practical examples</li>
               </ul>

               <h5>I Explain  my  All  Skills in Short Line  : </h5>
               <div>
               
               <b>Backend Technologies:</b>
               <li>Java 8,9,11,17,21  </li>
               <li>Java EE  - Servlet, JSP </li>
               <li>Spring JDBC</li>
               <li>Spring core</li>
               <li>Spring MVC </li>
               <li>Spring Data JPA OR Hibernate</li>
               <li>Spring Security </li>
               <li>Spring Sprint boot</li>
               <li>JUNIT AND MOCKITO </li>
               <li>Swagger</li>
               </div>
                <br />


                <b>Frontend Technologies:</b>
               <li>HTML</li>
               <li>CSS</li>
               <li>Java Script</li>
               <li>React.js</li>
               <li>Bootstrap</li>
               <li>React Bootstrap</li>
               <li>React Toastify and Redux </li>
               <li>From Validation  libraries </li>
               <li>etc more small libraries for helping  </li>
               <br />
               <b>Project Deployment Platform</b>
               <li>Docker</li>
               <li>Git and Github</li>
               <li>AWS</li>
               <li>Railway </li>
                <br />

               <b>Personal Traits and Interests:</b>
               <li>Self-motivated</li>
               <li>Team leader</li>
               <li>Professional developer</li>
               <li>Public Speaking</li>
               <li>Enjoys playing cricket and football</li>
               <li>Reads books and newspapers</li>
               <li>Listens to music</li>
               <li>Watches movies</li>
               <li>Learns about trending technologies</li>
               <br />
               <em><strong>Thank You all for Reading about Me and My Project   </strong></em> 
              
            </Col>
          </Row>
           
        </Container>
    </Base>
  );
}

export default About;
