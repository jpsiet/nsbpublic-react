import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';
import {bindActionCreators} from 'redux';
import StudentSearchBar from './student_search_bar';
import StudentDetails from './student_details';

import {
  Template, TemplateConnector, TemplateRenderer
} from '@devexpress/dx-react-core';


import {
  FilteringState,
  LocalFiltering,SelectionState
} from '@devexpress/dx-react-grid';
import {
  Grid,
  TableView,
  TableHeaderRow,
  TableSelection,
  TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';

import Paper from 'material-ui/Paper';

// calculate template arguments
const getSelectTableRowTemplateArgs = (
  { selectByRowClick, highlightSelected,  ...restParams },
  { selection }, // current selection
  { setRowsSelection }, // action that changes row selection
) => {
  const { rowId, row } = restParams.tableRow;
  return ({
    ...restParams,
    row,
    selectByRowClick,
    selected: highlightSelected && selection.indexOf(rowId) > -1,
    changeSelected: () => setRowsSelection({ rowIds: [rowId] }),
  });
};


class StudentList extends Component{
  constructor(props){
 
    super(props);
    this.props.fetchStudent();

    this.state = { columns:[
						      { name: 'rollNumber', title: 'Roll Number' },
						      { name: 'firstName', title: 'First Name' },
						      { name: 'rating', title: 'Rating' },
						      { name: 'standard', title: 'Standard' },
						      { name: 'subject', title: 'Subject' }
						    ],
				  open:false,
				  studentInfo:"false"
			    };

    this.tableRowTemplate = ({ row, children, selected, changeSelected }) => {
      // workaround for using the click & doubleClick events at the same time
      // from https://stackoverflow.com/questions/25777826/onclick-works-but-ondoubleclick-is-ignored-on-react-component
      let timer = 0;
      let delay = 200;
      let prevent = false;
      const handleClick = () => {
       timer = setTimeout(() => {
          if (!prevent) {
            changeSelected();
          }
          prevent = false;
        }, delay);
      };
      const handleDoubleClick = () => {
            clearTimeout(timer);
	        prevent = true;
            this.setState( {"studentInfo":row,"open": true} , function () {
			    console.log(this.state);
			});
            console.log(this.state);
        }
      return (
        <tr
          className={selected ? 'active' : ''}
          style={{ color: 'green' }}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        >
          {children}
        </tr>
      );
    
  }

}
 handleRequestClose = value => {
    this.setState({"open": false });
  };

handleCloseDialog(){
	this.setState( {"open" : false});
}
	render(){
	
		return (
		<div>
		         <StudentDetails  open={this.state.open}  studentInfo={this.state.studentInfo}
          onRequestClose={this.handleRequestClose} />
			    <div className="student-list-cont">
	                 <div className="student-list">


                                     <Paper>


                                        <Grid
										    rows={this.props.studentList}
										    columns={this.state.columns}>
										    <FilteringState defaultFilters={[]} />
                                            <LocalFiltering />
                                             <SelectionState />
										    <TableView tableRowTemplate={this.tableRowTemplate} />
                                             <TableSelection highlightSelected selectByRowClick />
										    <TableHeaderRow />
										    <TableFilterRow />


																				     // override default 'tableViewRow' template
										        <Template
										          name="tableViewRow"
										          // use custom template only for table data rows
										          predicate={({ tableRow }) => tableRow.type === 'data'}
										        >
										          {params => (
										            <TemplateConnector>
										              {(getters, actions) => (
										                <TemplateRenderer
										                  // custom template
										                  template={this.tableRowTemplate.bind(this)}
										                  // custom template params
										                  params={
										                    getSelectTableRowTemplateArgs({
										                      selectByRowClick: true,
										                      highlightSelected: true,
										                      ...params,
										                    }, getters, actions)
										                  }
										                />
										              )}
										            </TemplateConnector>
										          )}
										        </Template>

										  </Grid>
                                   </Paper>

							     
						    </div>

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