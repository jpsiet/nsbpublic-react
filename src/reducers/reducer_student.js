import {STUDENT_DATA_RECEIVED,FILTER_STUDENT_LIST} from './../actions/index';

const handleFilterData = function (studentList,filter){
	
    var newFilterList = studentList.originalStudentList.filter( (student) => {
    	if(!Boolean(filter.rating) && !Boolean(filter.standard)){
    		return student;

    	}
    	if(filter.rating  && !Boolean(filter.standard)){
    		return student.rating === filter.rating?student:false;
    		
    	}
    	if(!Boolean(filter.rating)  && filter.standard){
    		return student.standard === filter.standard?student:false;
    	}

        if(filter.rating && filter.standard){
    		return ((student.standard === filter.standard) && (student.currentRating === filter.rating))
    			?student:false;
    	}

    })

    var newState = Object.assign({},studentList,{filterStudentList:newFilterList})
	return newState;

}
 const reducer_students = function (studentList={ originalStudentList:[], filterStudentList:[]},action){
	switch(action.type){
		case STUDENT_DATA_RECEIVED:
			return {...studentList,originalStudentList:action.payload.data,
				filterStudentList:action.payload.data};

		case FILTER_STUDENT_LIST:
			return handleFilterData(studentList,action.payload);

			default:
			return studentList
        }


}

export default  reducer_students