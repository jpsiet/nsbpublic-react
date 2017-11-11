import React,{Component} from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import {DELETE_STUDENT_RECORD,UPDATE_STUDENT_RECORDS} from './../actions/index';
import {bindActionCreators} from 'redux';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import FontAwesome from 'react-fontawesome';

 export default  class StudentDetails extends Component{
	constructor(props) {
    super(props);
     this.handleCloseDialog = this.handleCloseDialog.bind(this);
     this.state = { firstName:props.studentInfo.firstName,
                     standard:props.studentInfo.standard,
                     rating:props.studentInfo.rating,
                     rollNumber:props.studentInfo.rollNumber,
                      subject:props.studentInfo.subject};
    
  }

 


  handleFirstNameChange(event) {

    this.setState({firstName: event.target.value});
  }


   handleSubjectChange(event) {

      this.setState({subject: event.target.value});
  }
  

   handleRatingChange(event) {

    this.setState({rating: Number(event.target.value)});
  }
  
   handleStandardChange(event) {

    this.setState({standard: Number(event.target.value)});
  }
  

  AddNewStudentData(e){

  this.props.onRequestClose({});

  }
  saveStudentRecod(){
    
     this.props.onRequestClose({ type:UPDATE_STUDENT_RECORDS, data:this.state});
  }
  deleteStudentRecord(){
   
    this.props.onRequestClose({ type:DELETE_STUDENT_RECORD, data:this.state});
  }

  handleCloseDialog() {
  	 this.props.onRequestClose({});
  }
  
  handleRequestClose = () => {
	    this.props.onRequestClose(this.props.selectedValue);
	 };

  

  render() {
  
    return (
     
        <Dialog
         open={true} 
        >
          <DialogTitle>{"Student Details"} </DialogTitle>
          <DialogContent>
            <DialogContentText>
               If there is any problem with record then please edit and save it.
            </DialogContentText>
             <div className="student-details">
              <form onSubmit={this.handleSubmit}>


                  <div className="formRow"> <label> Roll Number </label><span type="text"  
                   >{this.state.rollNumber} </span> </div> 

                 <div className="formRow"> <label> Name </label>
                 <input type="text" 
                  value={this.state.firstName} onChange={(e) => this.handleFirstNameChange(e)}  /> </div>
                  <div className="formRow"> <label> Rating </label><input type="text"  
                  value={this.state.rating} onChange={(e) => this.handleRatingChange(e)} />  </div>

                  <div className="formRow"> <label> Standard </label><input type="text" 
                   value={this.state.standard}  onChange={(e) => this.handleStandardChange(e)}  /> </div>

                  <div className="formRow"> <label> Subject </label><input type="text"
                    value={this.state.subject}  onChange={(e) => this.handleSubjectChange(e)}  />  </div>


                    <div className="student-icon-cont">

                       <a className="btn btn-default" href="#"  onClick={(e) => this.saveStudentRecod()}>
                         <FontAwesome
                          className='fa fa-floppy-o' size='2x' name="save"
                           />
                        </a>

                      <a className="btn btn-default" href="#"  onClick={(e) => this.deleteStudentRecord()}>
                         <FontAwesome
                          className='fa fa-trash' size='2x' name="trash"
                           />
                      </a>

                       <a className="btn btn-default" href="#"  onClick={ (e) => this.handleCloseDialog()}>
                         <FontAwesome
                          className='fa fa-window-close-o' size='2x' name="close"
                           />
                      </a>


                    </div>

                    
                 
                
                </form>
                    
              </div>
          </DialogContent>
          <DialogActions>
          
          <a className="btn btn-default" href="#"  onClick={this.handleCloseDialog}>
             <FontAwesome
              className='icon-remove close-dialog' size='2x' name="close"
               />
          </a>
            
             
           
          </DialogActions>
        </Dialog>
      
    );
  }


	
}


