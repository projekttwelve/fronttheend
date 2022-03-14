import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { userSelector, personSelector } from '../../UserSlice'
/**
 * @component
 * functional component that renders user information
 * */
export const PersonalInformation = () =>{
  const { isLoggedIn, res } = useSelector(userSelector);
  const [user, setUser] = useState({user:null});

  /** @function useEffect
   * A react hook that handles React life-cycles, here
   * it checks if user is logged in or not and handles
   * setting user in the local state.*/
  useEffect(()=>{
    if( res && isLoggedIn){
      setUser(res.person)
      console.log("person: " + JSON.stringify(res.person));
    }
  },[isLoggedIn, res, user, setUser])

  return(
  <Formik>
  <Form>
  {Object.keys(user).map((key, val) => {
    if(key !== 'roleid') return <div key={key}>{key + ': ' + user[key]}
    </div>
  })};
  </Form>
  </Formik>
  )
}
