import {STUDENT_DATA_RECEIVED,FILTER_STUDENT_LIST,FETCH_STUDENT} from './../actions/index';

const handleFilterData = function (studentList,filter){
	
    var newFilterList = studentList.originalStudentList.filter( (student) => {

        debugger;
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
    		return ((student.standard === filter.standard) && (student.rating === filter.rating))
    			?student:false;
    	}

    })

    var newState = Object.assign({},studentList,{filterStudentList:newFilterList})
	return newState;

}

const initalState = {
     originalStudentList:[], filterStudentList:[],
     isStudentDataLoading:false

}
 const reducer_students = function (state=initalState,action){
	switch(action.type){
		case STUDENT_DATA_RECEIVED:
			return {...state,originalStudentList:action.payload.data,
				filterStudentList:action.payload.data, "isStudentDataLoading":false};

		case FILTER_STUDENT_LIST:
			return handleFilterData(state,action.payload);
        case FETCH_STUDENT:
            return {...state, isStudentDataLoading:true}

			default:
			return state
        }


}

export default  reducer_students