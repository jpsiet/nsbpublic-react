export const FETCH_STUDENT ="fetchstudent";
export const STUDENT_DATA_RECEIVED ="studentdatarecieved";
export const FILTER_STUDENT_LIST ="fetchfilterstudent";
export const UPDATE_STUDENT_RECORDS ="UPDATE_STUDENT_RECORDS";
export const DELETE_STUDENT_RECORD = "DELETE_STUDENT_RECORD";


const actions = {

		fetchStudent : function (){
			
				return {
					type:FETCH_STUDENT
				}
     	},
       
       studentdatarecieved : function (sutdents){
				return {
					type:STUDENT_DATA_RECEIVED,
					payload:sutdents
				}
     	},


		fetchFilterStudent : function (filter){
				return {
					type:FILTER_STUDENT_LIST,
					payload:filter
				}
     	},

     	updateStudentRecord : function (student){
				return {
					type:UPDATE_STUDENT_RECORDS,
					payload:student
				}
     	},
     	deleteStudentRecord : function (student){
				return {
					type:DELETE_STUDENT_RECORD,
					payload:student
				}
     	}
}

export default actions
