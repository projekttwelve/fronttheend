import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getApplications, stateSelector } from './recruiterSlice';
import { Formik, Field, Form, ErrorMessage } from "formik";

export const ApplicationsList = () =>{
  //  const [period, setPeriod] = useState({startDate: null, endDate: null})
    const [content, setContent] = useState(null)
    const dispatch = useDispatch();
  const { status, list } = useSelector(stateSelector);

    useEffect(()=>{
        if(status === 'success'){
            setContent({content: list})
        }
    },[ content, setContent, status, list])

 /*   const addStart = (e) =>{
      setPeriod(state => ({...state, endDate: e.target.value}))
         console.log('sdate: ')
     }

    const addEnd = (e) =>{
      setPeriod(state=>({...state, startDate: e.target.value}))
        console.log('enddate')
    }
    */

    const handleSubmit = (period) =>{
        dispatch(getApplications(period));
        console.log('period: ' + period)
    }
  return(
    <div>
           <p>To list all available candidates during a certain period, please
             provide us with the dates for that period.</p>
      <Formik initialValues={{startDate: ' ', endDate: ' '}}
              onSubmit={handleSubmit}>
          <Form>
        <label >start date: </label>
        <Field name="startDate" type="date" />
      <div>
        <label> end date: </label>
        <Field name="endDate" type="date" />
        </div>
           <button type="submit">Submit</button>
        </Form>
        </Formik>
      {content &&
          (<div>
                 {content.map((item)=>{
                  return   <div>${item}</div>
                 })}
                 </div>)
      }
  </div>);
}
