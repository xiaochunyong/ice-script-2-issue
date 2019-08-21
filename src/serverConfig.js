import Axios from 'axios';
import {
  env
} from './appConfig';

let serverConfig;

switch (env) {
  case 'uat':
    serverConfig = {
      domain: '',
      apiEndpoint: ''
    };
    break;
  case 'pro':
    serverConfig = {
      domain: '',
      apiEndpoint: ''
    };
    break;
  default:
    serverConfig = {
      domain: 'http://localhost:4444',
      apiEndpoint: "http://localhost:8080",
      // apiEndpoint: "http://192.168.9.47:8080",
      // apiEndpoint: 'http://192.168.9.220:8080',
    };
    break;
}

export default serverConfig;
