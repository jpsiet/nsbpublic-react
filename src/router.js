import { BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';

  import React from 'react';
 
  import Hello from './containers/Hello';
  import GoodBye from './containers/GoodBye';
  import Header from './components/Header';
  import App from './containers/student_list';

const customRouter = function(){
 	return (<Router>
	   <div>
	    {Header()}
	  
      <hr/>
           <Route  path="/hello" component={Hello} />
            <Route  path="/admin" component={App} />
		   <Route  path="/goodbye" component={GoodBye} />
	   </div>
	   </Router>)
}

export default customRouter;