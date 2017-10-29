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
                  
                      <li> <a  href="/aboutus"> About Us </a>
		        </li>
		       
		         <li>  <a href="contactus"> Contact </a></li>
                  <li> <Link to="/admin">Admin</Link>
                   <ul>
			        	<li><a>As a Principal</a></li>
			         	<li><a>As a Teacher</a></li>
			         </ul>

		        </li>
		        <li><a href="/fun"> Fun</a> </li>
		        <li> <a href="http://nsbpubliceducation-ag.s3-website.us-east-2.amazonaws.com/students">
		         Angular version </a> </li>

				</ul>
	
				</div>

 
		    </div>)

}

export default header;