/*
 * Data Service
 *
 * This handles retrieving of protected data from servers.
 *
 *
 */
import axios from 'axios';
import {authHeaderW, authHeaderZ} from './auth-headers';

const API_URL = 'https://obscure-tundra-74753.herokuapp.com';

  const getRecruitPage = ()=> {
    return axios.get(API_URL + "/auth/user/recruit", {headers: authHeaderW()})
  }
const getRecruiterPage = ()=> {
    return axios.get(API_URL + "/auth/user/recruiter", {headers: authHeaderW()})
  }

const getCompetenceList = () =>{
    return axios.get(API_URL + "/api/competence/", {headers: authHeaderW()})
}

const postApplication = async (appl) =>{
  return await axios.post(API_URL + "/api/uploadApp",
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
