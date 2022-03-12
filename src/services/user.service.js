/*
 * Data Service
 *
 * This handles retrieving of protected data from servers.
 *
 *
 */
import axios from 'axios';
import {authHeaderex, authHeader, authHeaderW} from './auth-headers';

const API_URL = 'https://mycorsproxy123.herokuapp.com/https://obscure-tundra-74753.herokuapp.com';

  const getRecruitPage = ()=> {
    return axios.get(API_URL + "/auth/user/recruit", {headers: authHeader()})
  }
const getRecruiterPage = ()=> {
    return axios.get(API_URL + "/auth/user/recruiter", {headers: authHeader()})
  }

const getCompetenceList = () =>{
    return axios.get(API_URL + "/api/competence/", {headers: authHeaderW()})
}

const postApplication = async (appl) =>{
  return await axios.post( API_URL + "/api/uploadApp",
                          { headers: authHeaderW(),  appl })
}

const getApplications = (startDate, endDate) =>{
  return axios.get(API_URL + "/api/available", { params: { startDate, endDate } })
}

const userService ={
  getRecruitPage,
  getRecruiterPage,
  getCompetenceList,
  postApplication,
  getApplications
}

export default userService;
