import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions';

class SearchBar extends Component{

	constructor(props){

        super(props);
		this.state= {
			rating:'',
			standard:''
		}
	}

      
  handleRatingChange(event){
  	
  	var rating = event.target.value;
    this.state.rating = Number(rating);
  //	this.setState({standard:standard});
  	this.props.fetchFilterStudent(this.state)

  }
   handleStandardChange(event){
   	var standard = event.target.value;
   	debugger;
   	this.state.standard = Number(standard);
  //	this.setState({standard:standard});
  	this.props.fetchFilterStudent(this.state)
  }


	render(){
	    console.log(this.props);

		return (  <div>
		              <select name="standard" onChange={ this.handleStandardChange.bind(this)} >
			             <option value="">Select standard</option>
						  <option value="1">1</option>
						  <option value="2">2</option>
						  <option value="3">3</option>
						  <option value="4">4</option>
						  <option value="5">5</option>
						  <option value="6">6</option>
						  <option value="7">7</option>
						  <option value="8">8</option>
					</select>

					<select name="rating" onChange={this.handleRatingChange.bind(this)}>
					     <option value="">Select Rating</option>
			               <option value="1">1</option>
						  <option value="2">2</option>
						  <option value="3">3</option>
						  <option value="4">4</option>
						  <option value="5">5</option>
						  <option value="6">6</option>
						  <option value="7">7</option>
						  <option value="8">8</option>
					</select>

             </div>

			)
      

	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actions, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);