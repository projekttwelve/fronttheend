import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getApplications, stateSelector } from './recruiterSlice';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
export const ApplicationsList = () =>{
    const [content, setContent] = useState(null)
    const dispatch = useDispatch();
  const [ErrorMsg, setErrorMsg] = useState('');
  const { status, list, errorMsg } = useSelector(stateSelector);
  const validationSchema = Yup.object().shape({
    startDate: Yup.date().required("This field is required!"),
    endDate: Yup.date().when("startDate",
                             (startDate, Yup)=>startDate &&
                             Yup.min(startDate, "The last date cannot be before the first date")).required("This field is required!"),
  });
    useEffect(()=>{
        if(status === 'success'){
            setContent(list)
        }else if(status === 'Error'){
          setErrorMsg(errorMsg)
        }
    },[ content, setContent, status, list, ErrorMsg, setErrorMsg, errorMsg])


    const handleSubmit = (period) =>{
        dispatch(getApplications(period));
    }
  return(
    <div>
           <p>To list all available candidates during a certain period, please
             provide us with the dates for that period.</p>
      <Formik initialValues={{startDate: ' ', endDate: ' '}}
                validationSchema={validationSchema}
              onSubmit={handleSubmit}>
          <Form>
        <label htmlFor="startDate">start date: </label>
        <Field name="startDate" type="date" />
      <ErrorMessage name="startDate" className="alert alert-danger"/>
      <div>
        <label htmlFor="endDate"> end date: </label>
        <Field name="endDate" type="date" />
      <ErrorMessage name="endDate" className="alert alert-danger"/>
        </div>
           <button type="submit">Submit</button>
        </Form>
        </Formik>
      {content && content.length > 0 &&
          (<div>
                 {content.map((item)=>{
                   return <div key={item.id}>{item.name}</div>
                 })}
                 </div>)
      }{content && content.length == 0 &&
        (<div>Nobody us available during the time interval</div>)
       }{errorMsg && (
  <p style={{color:'red'}} className="error"> {ErrorMsg} </p>
)}

  </div>);
}
