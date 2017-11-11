import {STUDENT_DATA_RECEIVED,FILTER_STUDENT_LIST,FETCH_STUDENT,
UPDATE_STUDENT_RECORDS,DELETE_STUDENT_RECORD} from './../actions/index';

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

const handleStudentUpdateData = (state, payload) => {
    var newState = {};

    console.log(state);
    debugger;
    // first FInd the student Index in State,
    var index = state.filterStudentList.map(function(e) { return e.rollNumber; }).indexOf(payload.rollNumber);

    newState = Object.assign({},{...state, filterStudentList:[...state.filterStudentList.slice(0,index),payload,
        ...state.filterStudentList.slice(index+1)]});
    //var studnetIndex =   state.filterStudentList.filter( student =>  {return studnet.rollNumber ===1})
    return newState
}


const handleDeleteData = (state, payload) => {
    var newState = {};

    console.log(state);
    debugger;
    // first FInd the student Index in State,
    var index = state.filterStudentList.map(function(e) { return e.rollNumber; }).indexOf(payload.rollNumber);

     newState = Object.assign({},{...state, filterStudentList:[...state.filterStudentList.slice(0,index),
        ...state.filterStudentList.slice(index+1)]});
    //var studnetIndex =   state.filterStudentList.filter( student =>  {return studnet.rollNumber ===1})
    return newState
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

        case UPDATE_STUDENT_RECORDS:
         return  handleStudentUpdateData(state,action.payload);

         case  DELETE_STUDENT_RECORD:
         return  handleDeleteData(state,action.payload);
         
        case FETCH_STUDENT:
            return {...state, isStudentDataLoading:true}

			default:
			return state
        }


}

export default  reducer_students