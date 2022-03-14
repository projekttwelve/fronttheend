/*
 * Data Service
 *
 * This handles retrieving of protected data from servers.
 *
 *
 */
import axios from 'axios';
import {authHeaderex, authHeader, authHeaderW} from './auth-headers';
/**
 * Site name
 * @type { String }
 * */
const API_URL = 'https://mycorsproxy123.herokuapp.com/https://obscure-tundra-74753.herokuapp.com';

  const getRecruitPage = ()=> {
    return axios.get(API_URL + "/auth/user/recruit", {headers: authHeader()})
  }
const getRecruiterPage = ()=> {
    return axios.get(API_URL + "/auth/user/recruiter", {headers: authHeader()})
  }
/**
 * @function getCompetenceList
 * This function executes a get request with authorization headers.
 * @returns { array } containing different skills.
 * This is used to create check boxes and populate the applications view
 * */
const getCompetenceList = () =>{
    return axios.get(API_URL + "/api/competence/", {headers: authHeaderW()})
}
/**
 * @function postApplication
 *sends a POST request with autherization header,
 * @param { object } contains application details.
 * @returns { string } confirmation message.
 * */
const postApplication = async (appl) =>{
  const res = await axios.post(  "https://obscure-tundra-74753.herokuapp.com/api/uploadApp",appl,
                            { headers: authHeaderex()});

  return res.data;
}
/**
 *@function getApplications
 * This method is used to populate the "application list"
 * view for the recruiter.
 * @param { Date } dates are supplied byt the recruiter and
 * @ returns { object } conating list of users that are available
 * during that period
 * */
const getApplications = async({startDate, endDate}) =>{
  const res = await axios.get(API_URL + `/api/available`,  {headers: authHeaderex(), params: { startDate, endDate }}
                             )
  return res.data;
}

const userService ={
  getRecruitPage,
  getRecruiterPage,
  getCompetenceList,
  postApplication,
  getApplications
}

export default userService;
