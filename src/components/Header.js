import React from 'react';
import  {Link } from 'react-router-dom';
import logo from '../assets/logo.png' // relative path to image 
const header = function(){

	return ( <div className="header clearfix">
				<div className="header-logo"> <img src={logo} />
				 <span> NSB PUBLIC SCHOOL </span>
				 
                 </div>
				<div className="header-links">

				<ul className="clearfix">
                  
                      <li> <a> About Us </a>

			        <ul>
			        	<li ><a  href="">Message</a></li>
			        	<li ><a href=""> School Information </a></li>
			        </ul>
		        </li>
		        <li> <a>Academics</a>

			       <ul>
			          <li> <a href=""> Pre Primary &amp; Primary </a></li>
			          <li> <a href=""> Middle School </a></li>
			       	
                     </ul>

		        </li>
		       <li> <a>Admission</a> </li>
		         <li> <a href="">Co-Curricular</a>
					<ul> 

			            <li> <a    href="">School Competition</a>  </li>
					</ul> 
                </li>
		        <li>  <a> Contact </a>
		
				 	 <ul>
			        	 <li> <a> Career</a></li>
			       
			        </ul>

		
		        </li>

		       <li> <Link to="/admin">Admin</Link>

			         <ul>
			         	<li><a>As a Principal</a></li>
			         	<li><a>As a Teacher</a></li>
			         </ul>

		        </li>

		        <li> <a href="http://nsbpubliceducation-ag.s3-website.us-east-2.amazonaws.com/students">
		         Angular version </a> </li>

				</ul>



						
				</div>

 
		    </div>)

}

export default header;