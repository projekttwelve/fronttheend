/*
 * Authentication service
 *
 * a service that communicates with
 * the server and stores user information (data & jwt token)
 * in
 * */
import axios from 'axios';

const API_URL = 'https://mycorsproxy123.herokuapp.com/https://obscure-tundra-74753.herokuapp.com';

const signUp = async (info) =>{
 const res = await axios.post(API_URL + "/api/ins", info)
    return res.data;
}

const signIn = async (credentials) =>{
   const res = await axios.post(API_URL + "/auth", credentials)
    if(res.data){
      localStorage.setItem("user", JSON.stringify(res.data))
     // sessionStorage.setItem('jwt', res.data.jwt)
    }
    return res.data
}

const logout = () =>{
  localStorage.removeItem("user");
}


const authService = {
  signIn,
  signUp,
  logout,
}

export default authService;
