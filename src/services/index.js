/**
 * Mocking client-server processing
 */
 import axios from 'axios';
import { Observable } from 'rxjs/Observable';
const productionUrl = "http://ec2-18-221-43-252.us-east-2.compute.amazonaws.com:9000/";
const localUrl = "http://localhost:3000/";
const ROOT_URL= window.location.hostname === "localhost"?localUrl:productionUrl;


const TIMEOUT = 100;
const MAX_CHECKOUT = 2; // max different items
 
 export const api = {
  getProducts() {
        
        const url = `${ROOT_URL}api/students`;
        return Observable.fromPromise(axios.get(url));
       
  },

 
}