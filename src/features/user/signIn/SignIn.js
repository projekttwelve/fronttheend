import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { signInUser, userSelector } from '../UserSlice'
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
/**
 * @Component
 *This is a functional component that renders the sign in view
 * for users.
 * */
export function SignIn(){
  const [credentials, setCredentials] = useState({username: '', password:''});
  const [errorMsg, setErrorMsg]=useState('')

  const dispatch = useDispatch();
  const { status, res, isLoggedIn } = useSelector(userSelector)
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });
/**
  const setUserName=(name)=>{
    setCredentials(state =>({...state, username: name}))
  }
  const setPassword=(passwd)=>{
    setCredentials(state =>({...state, password: passwd}))
  }
  */

  /** @function useEffect
   * A react hook that handles React life-cycles, here
   * it checks if user is logged in or not and handles
   * navigation as well as setting error messages.*/

  useEffect(()=>{
    if(isLoggedIn){
      navigate("/UserRecruit")
      setErrorMsg('')
    }else if(status === 'error'){
      setErrorMsg(res)
      console.log("err: " + errorMsg)
    }

  },[errorMsg, isLoggedIn, navigate, res, status])
/**
 *@function handleSubmit
 * This function dispatches the singInUser function
 * and it supplies it with credentials.
 * */
  const handleSubmit =( formValue)=>{
    const   {username, password } = formValue;
    dispatch(signInUser( {username, password} ))

  }

  return(
    <div>
    <Formik
      initialValues={credentials}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
<Form>
    <div>
      <label htmlFor="username"> Username: </label>
      <Field name="username" type="text" />
      <ErrorMessage name="username" className="alert alert-danger"/>
    </div>
    <div>
    <label htmlFor="password">
      password:
    </label>
      <Field type='password'  name="password"/>
      <ErrorMessage name="password"/>
    </div>
  <div>
    <button type="submit">Log in</button>
  </div>
  </Form>
</Formik>
{errorMsg && (
  <p style={{color:'red'}} className="error"> {errorMsg} </p>
)}
</div>
  );

}
