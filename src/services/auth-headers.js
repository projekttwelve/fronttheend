
/**
 * @function authHeader is a service that will be used
 * to check wether a user has authorization to access certain
 * resourses.
 *
 * check in local storage, if there is a logged in user
 * return HTTP authorization, else return empty object.
 *
 * */
export const authHeaderex =()=> {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.jwtToken) {
    return { Authorization: 'Bearer ' + user.jwtToken };
  } else {
    return {};
  }
}
export const authHeaderW =()=> {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.jwtToken) {
    return { Authorization: 'Bearer ' + user.jwtToken,   'X-Requested-With': 'XMLHttpRequest'};
  } else {
    return {};
  }
}
export const authHeader =()=> {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.jwtToken) {
    return { Authorization: 'Bearer ' + user.jwtToken,
             'Access-Control-Allow-Origin': 'https://safe-fjord-62405.herokuapp.com/ '}
  } else {
    return {};
  }
}
