import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { stateSelector } from './recruitSlice'
import { PersonalInformation } from './PersonalInformation'
import { getCompetenceList, postApplication } from './recruitSlice';
import { Formik, Field, Form, ErrorMessage } from "formik";
/**
 *@Component
 * functional component that renders the applicationform
 * that is used to apply for work.
 * */
export const ApplicationForm = () =>{

const [ErrorMsg, setErrorMsg] = useState(" ");
const [list, setList] = useState([]);
const dispatch = useDispatch()
const navigate = useNavigate()
const state = useSelector(stateSelector); const validationSchema = Yup.object().shape({
    startDate: Yup.date().required("This field is required!"),
    endDate: Yup.date().when("startDate",
                             (startDate, Yup)=>startDate &&
                             Yup.min(startDate, "The last date cannot be before the first date")).required("This field is required!"),
  });

  /** @function useEffect
   * A react hook that handles React life-cycles, here
   * it checks if user is logged in or not and handles
   * setting skills list as well as setting error messages.*/
  useEffect(()=>{
    dispatch(getCompetenceList())
    if(state.status === 'success'){
      setList(state.list)
      console.log(state.list)
    }else if(state.status == 'error'){
      setErrorMsg(state.errorMsg)
    }
  },[setList. list, setErrorMsg]);
  /**
   * @function handleSubmit
   * handles the dispatching of postApplication
   * function. supplies the form value.*/
  const handleSubmit = (values) =>{
    const jobslist =  list.map((job) => values.jobs.includes(job) ? job : " ").filter((job)=> job != " ");
    const exp = values.experience.filter((exp)=> exp != null);

    const res = {
      jobs:jobslist,
      experience: exp,
      startDate: values.startDate,
      endDate: values.endDate
    }
    //alert(JSON.stringify(res, null, 2))
    dispatch(postApplication(res));
  }

  if(list && state.status === "success"){
  return(
  <div>
    <h1>Application Form: </h1>
    <h2>Personal information:</h2>
    <PersonalInformation/>
    <h2>Competens profile: </h2>
  <Formik initialValues={{
    jobs: [],
    experience: [],
    startDate: "",
    endDate: ""
  }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}>
      <Form>
        <div>experiences</div>
        <div>
            <label>
    <Field  type="checkbox" name="jobs" value="ticket sales"/>
              {list[0]}
            </label>
          <label> &nbsp; years of experience
              <Field type="number"  name="experience[0]" />
            </label>
    </div>
    <div>
            <label>
              <Field type="checkbox" name="jobs" value="lotteries"/>
               {list[1]}
              &nbsp; years of experience
              <Field type="number"  name="experience[1]"/>
            </label>
    <div/>
    <div>
            <label>
              <Field type="checkbox" name="jobs" value="roller coaster operation" />
              {list[2]}
              &nbsp; years of experience
              <Field type="number"  name="experience[2]" />

            </label>
    </div>
    </div>
        <label htmlFor="startDate">start date: </label>
        <Field name="startDate" type="date"/>
      <ErrorMessage name="startDate" className="alert alert-danger"/>
      <div>
        <label htmlFor="endDate"> end date: </label>
        <Field name="endDate" type="date"/>
      <ErrorMessage name="endDate" className="alert alert-danger"/>
      </div>
       <button type="submit">Submit</button>
      </Form>
  </Formik>

      </div>
)
  }else if(ErrorMsg && state.status === "success"){
    return <p style={{color:'blue'}}> {ErrorMsg} </p>

  }else if(ErrorMsg && state.status === "success"){
    return <p style={{color:'blue'}}> {ErrorMsg} </p>
  }else{
    return <p>loading...</p>
  }
}
