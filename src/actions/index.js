export const FETCH_STUDENT ="fetchstudent";
export const STUDENT_DATA_RECEIVED ="studentdatarecieved";
export const FILTER_STUDENT_LIST ="fetchfilterstudent";


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
     	}
}

export default actions
