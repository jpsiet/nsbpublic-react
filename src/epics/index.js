import * as  RXJS from  'rxjs';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import { api } from '../services';
import actions,{FETCH_STUDENT} from '../actions';

/**
 * search products epic
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
const searchProducts = (action$) => {
  return action$
    .ofType(FETCH_STUDENT)
    .delay(5000)
    .switchMap(q => {
      return api.getProducts().map(actions.studentdatarecieved)
    });
};




export const rootEpic = combineEpics(
  searchProducts
);



