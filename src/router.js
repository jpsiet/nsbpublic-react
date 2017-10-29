import { BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';

  import React from 'react';
 
  import Hello from './containers/Hello';
  import GoodBye from './containers/GoodBye';
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
           <Route  path="/hello" component={Hello} />
            <Route  path="/admin" component={StudentList} />
		        <Route  path="/goodbye" component={GoodBye} />
            <Route  path="/aboutus" component={AboutUs} />
            <Route  path="/contactus" component={ContactUs} />
            <Route  path="/fun" component={Fun} />
     </div>
	   </Router>)
}

export default customRouter;