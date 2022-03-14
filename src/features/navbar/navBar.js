import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { signInUser, userSelector, personSelector, logout } from '../user/UserSlice'

/**
 * @component
 *
 * a functional component that builds the navigation bar
 * and renders the correct type of navbar depending on the user
 * as well as the type of user that is logged in
 * */
export function Navbar (){
  const { isLoggedIn, res } = useSelector(userSelector);
  const [ loggedInNavBar, setLoggedInNavbar] = useState(false);
  const [ currentUser, setCurrentUser ] = useState(null);

  const dispatch = useDispatch();
  /**
   * @function useEffect is a hook that handles the React life-cycle
   * we use it here to set the type of navbar.
   * */
  useEffect(()=>{
    if(isLoggedIn){
      setLoggedInNavbar(true)
      setCurrentUser(res.person)
    }else{
      setLoggedInNavbar(false)
      setCurrentUser(null);
    }
  },[isLoggedIn, setLoggedInNavbar, res])
/**
 *@function handleLogOut dispatches the logout
 * function.
 * */
  const handleLogOut = () =>{
    dispatch(logout());
  }
const recruitNavbar = () =>{
      console.log('logged in navbar')
    return(
    <nav>
      <div className='containter'>
        <ul>
          <li><NavLink to='/application'>apply here!</NavLink></li>
          <li><NavLink to='/UserRecruit'>{currentUser.name}</NavLink></li>
          <li><a href='/SignIn' onClick={handleLogOut}>Log out</a></li>
        </ul>
      </div>
    </nav>);
}
const recruiterNavbar = () =>{
      console.log('logged in navbar')
    return(
    <nav>
      <div className='containter'>
        <ul>
          <li><NavLink to='/applications'>Application Forms</NavLink></li>
          <li><NavLink to='/UserRecruit'>{currentUser.name}</NavLink></li>
          <li><a href='/SignIn' onClick={handleLogOut}>Log out</a></li>
        </ul>
      </div>
    </nav>);
}
  const defaultNavbar = () =>{
     return(
    <nav>
      <div className='containter'>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/SignUp'>Sign up</NavLink></li>
          <li><NavLink to='/SignIn'>Sign in</NavLink></li>
        </ul>
      </div>
    </nav>
  );
  }
  if(loggedInNavBar){
    return currentUser.roleid === 2 ? recruitNavbar() : recruiterNavbar();
  }else{
    return defaultNavbar();
  }


}

