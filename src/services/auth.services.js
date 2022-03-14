/*
 * Authentication service
 *
 * a service that communicates with
 * the server and stores user information (data & jwt token)
 * in
 * */
import axios from 'axios';
/**
 * Site Name
 * @type {string}
 */
const API_URL = 'https://mycorsproxy123.herokuapp.com/https://obscure-tundra-74753.herokuapp.com';
/**
 * @function signUp
 *  This function executes a POST request using
 *  axios to the server. This is how a new user is
 * created
 * @param {object} an object containg user details such as username  */
const signUp = async (info) =>{
 const res = await axios.post(API_URL + "/api/ins", info)
    return res.data;
}
/**
 * @function signIn
 * This function makes a POST request
 * to the server using axios. The purpose
 * is to authenticate and log in a user.
 * @param {object} an object containgin
 * username and password.
 * @returns {object} containg the user object
 * and a jwt token.
 * */
const signIn = async (credentials) =>{
   const res = await axios.post(API_URL + "/auth", credentials)
    if(res.data){
      localStorage.setItem("user", JSON.stringify(res.data))
     // sessionStorage.setItem('jwt', res.data.jwt)
    }
    return res.data
}
/**
 *
 * @function logout
 * This function removes any data stored in the localstorage
 * and logs out the user.*/
const logout = () =>{
  localStorage.removeItem("user");
}


const authService = {
  signIn,
  signUp,
  logout,
}

export default authService;
