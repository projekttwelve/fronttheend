
/**
 * @function authHeader is a service that will be used
 * to check wether a user has authorization to access certain
 * resourses.
 *
 * check in local storage, if there is a logged in user
 * return HTTP authorization, else return empty object.
 *
 * */
export const authHeader =()=> {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.jwtToken) {
    return { Authorization: 'Bearer ' + user.jwtToken };
  } else {
    return {};
  }
}
export const authHeaderW =(arg)=> {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.jwtToken) {
    return { Authorization: 'Bearer ' + user.jwtToken, arg };
  } else {
    return {};
  }
}
