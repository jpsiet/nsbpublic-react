import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = {
  customWidth: {
    width: 150,
  },
};

class SearchBar extends Component{

	constructor(props){

        super(props);
		this.state= {
			rating:1,
			standard:1
		}
	}

      
  handleRatingChange= event => {
     
     this.state.rating = event.target.value;
   
   /*	this.setState(prevState => ({
         ...prevState,
        rating:Number(event.target.value)
    
    }))*/
     this.setState({ "rating": event.target.value });

   	this.props.fetchFilterStudent(this.state)
   } 

   handleStandardChange = event => {
    
   /* this.setState(prevState => ({
         ...prevState,
        standard:Number(event.target.value)
    
    }))*/
    this.setState({ "standard": event.target.value });
     //this.state.standard = event.target.value;

   	this.props.fetchFilterStudent(this.state)
   } 
 


	render(){
	    console.log(this.props);

		return (  <div>

					 <Select
				          value={this.state.standard}
				          onChange={ this.handleStandardChange.bind(this)}  style={styles.customWidth}>
					          <MenuItem value={1}  > 1</MenuItem>
					          <MenuItem value={2} > 2</MenuItem>
					          <MenuItem value={3} > 3</MenuItem>
					          <MenuItem value={4}> 4</MenuItem>
					          <MenuItem value={5}> 5</MenuItem>
					          <MenuItem value={6} >6 </MenuItem>
					          <MenuItem value={7} > 7</MenuItem>
					          <MenuItem value={8} > 8</MenuItem>
		              </Select>

		               <span>    </span>

					 <Select
				         value={this.state.rating} style={styles.customWidth}
				          onChange={ this.handleRatingChange.bind(this)}>
					          <MenuItem value={1} > 1</MenuItem>
					          <MenuItem value={2} > 2</MenuItem>
					          <MenuItem value={3} > 3</MenuItem>
					          <MenuItem value={4} > 4</MenuItem>
					          <MenuItem value={5} > 5</MenuItem>
					          <MenuItem value={6} > 6</MenuItem>
					          <MenuItem value={7} > 7</MenuItem>
					          <MenuItem value={8} > 8</MenuItem>
		              </Select>

             </div>

			)
      

	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actions, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);