import React,{Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

export default class StudentDetails extends Component{
	constructor(props) {
    super(props);
     this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

 

  handleCloseDialog() {
  	 this.props.onRequestClose("abc");
  }
  
  handleRequestClose = () => {
	    this.props.onRequestClose(this.props.selectedValue);
	  };


  render() {
  	//const {onRequestClose, ...other } = this.props;
    return (
     
        <Dialog
         open={this.props.open} 
        >
          <DialogTitle>{"Student Details"} </DialogTitle>
          <DialogContent>
            <DialogContentText>
               If there is any problem with record then please edit and save it.
            </DialogContentText>
             <div className="student-details">
               <div className="formRow"> <label> Name </label><input type="text" 
                value={this.props.studentInfo.firstName} /> </div>
                <div className="formRow"> <label> Rating </label><input type="text"  
                value={this.props.studentInfo.rating} />  </div>
                <div className="formRow"> <label> Standard </label><input type="text" 
                 value={this.props.studentInfo.standard} /> </div>
                <div className="formRow"> <label> Subject </label><input type="text"
                  value={this.props.studentInfo.subject} />  </div>
                <div className="formRow"> <label> Roll Number </label><input type="text"  
                value={this.props.studentInfo.rollNumber} /> </div> 
                    
              </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="primary">
              Save
            </Button>
            <Button onClick={this.handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      
    );
  }


	
}