import React,{Component} from 'react';
import principal from '../assets/principal.png' // relative path to image 

const AboutUs = function(){



		return (<div className="about-us-cont"> 
			 <img src={principal}/>
			
		    <p> Education is a lifelong process which is to be nurtured with love and care. 
			   It must be built on a firm and broad foundation for students to excel in life. Our aim is to 
			  prepare our students with the intellectually-stimulated learning which drives concept 
			 and practical approach which are necessary to meet the challenges in both academics and life
			  skills. We encourage our students to believe in themselves and their strengths. The policy 
			  of the school is to strengthen the child with the necessary skills to face the future. Total
			  Personality Development is the tool which the child gains from his  her school. This means, 
			  he or she is equipped with the confidence, creative awareness, moral values, social concern,
			   skills informatics and academics to lead life as a complete human being and a responsible citizen
			    of the country in the decades to come.
     </p>
     
      <span className="signature">Ms. Raj shree Bhadouriya  </span>
     </div>)
	

}

export default AboutUs

	