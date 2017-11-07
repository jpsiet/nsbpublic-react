import React,{Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import FontAwesome from 'react-fontawesome';

export default class StudentDetails extends Component{
	constructor(props) {
    super(props);
     this.handleCloseDialog = this.handleCloseDialog.bind(this);
      this.handleChange = this.handleChange.bind(this);

      this.state = {props};
  }

 
 handleChange(event) {
  debugger;
    this.setState({value: event.target.value});
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
              <form onSubmit={this.handleSubmit}>
                 <div className="formRow"> <label> Name </label>
                 <input type="text" 
                  value={this.props.studentInfo.firstName} /> </div>
                  <div className="formRow"> <label> Rating </label><input type="text"  
                  value={this.props.studentInfo.rating} onChange={this.handleChange} />  </div>
                  <div className="formRow"> <label> Standard </label><input type="text" 
                   value={this.props.studentInfo.standard}  onChange={this.handleChange} /> </div>
                  <div className="formRow"> <label> Subject </label><input type="text"
                    value={this.props.studentInfo.subject}  onChange={this.handleChange} />  </div>
                  <div className="formRow"> <label> Roll Number </label><input type="text"  
                  value={this.props.studentInfo.rollNumber} /> </div> 
                </form>
                    
              </div>
          </DialogContent>
          <DialogActions>
          


          <a class="btn btn-default" href="#"  onClick={this.handleCloseDialog}>
             <FontAwesome
              className='icon-remove close-dialog' size='2x' name="close"
               />
          </a>
            
             
           
          </DialogActions>
        </Dialog>
      
    );
  }


	
}