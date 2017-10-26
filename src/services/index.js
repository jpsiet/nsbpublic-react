/**
 * Mocking client-server processing
 */
 import axios from 'axios';
import { Observable } from 'rxjs/Observable';
const ROOT_URL="http://ec2-18-221-43-252.us-east-2.compute.amazonaws.com:9000/api/students";

const TIMEOUT = 100;
const MAX_CHECKOUT = 2; // max different items

export const api = {
  getProducts() {
        
        const url = `${ROOT_URL}`;
        return Observable.fromPromise(axios.get(url));
       
  },

 
}