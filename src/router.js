import { BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';

  import React from 'react';
 
 
  import Header from './components/Header';
  import StudentList from './containers/student_list';
   import AboutUs from './containers/about_us';
  import ContactUs from './components/contact_us';
    import Fun from './containers/fun';

const customRouter = function(){
 	return (<Router>
	   <div>
	    {Header()}
	    <hr/>
           
            <Route  path="/admin" component={StudentList} />
		         <Route  path="/aboutus" component={AboutUs} />
            <Route  path="/contactus" component={ContactUs} />
            <Route  path="/fun" component={Fun} />
     </div>
	   </Router>)
}

export default customRouter;