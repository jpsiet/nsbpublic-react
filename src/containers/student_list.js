import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';
import {bindActionCreators} from 'redux';
import StudentSearchBar from './student_search_bar';


class StudentList extends Component{
  constructor(props){
   
    super(props);
    this.props.fetchStudent()

  }
	renderStudent(student,index){
		
			return ( <tr key={index}>
			  <td >{student.name}</td>
              <td> {student.currentRating} </td>
             <td>{student.standard} </td>
              <td>  </td>
          
             </tr>)
		

		
	}

	render(){
		 if(this.props.studentList.length <1)
		 	return <div className="progess-text"> Please wait for a moment while data Loading ..</div>
    
		return (
			    <div className="student-list-cont">

			      <div className="student-list-search">
			       <StudentSearchBar />

			      </div>

			      <div className="student-list">
                        <table className="table table-hover">
						    <thead>
						     <tr>
						       <td> Name </td>
						    
						      <td> Current Rating </td>
						      <td> Standards </td>
						       <td>  </td>
						     </tr>
						    </thead>

						    <tbody>
						    {this.props.studentList.
						    	map( (student,index) => {return  this.renderStudent(student,index)})}

						    </tbody>



						</table>
			      </div>

				   

			   </div>

			)
	}
}

function mapStateToProps(studentList){
	return {studentList:studentList.studentList.filterStudentList}

}
function mapDispatchToProps(dispatch){
   return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList)