import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { stateSelector } from './recruitSlice'
import { PersonalInformation } from './PersonalInformation'
import { getCompetenceList, postApplication } from './recruitSlice';
export const ApplicationForm = () =>{

const [ErrorMsg, setErrorMsg] = useState(" ");
const [list, setList] = useState([]);
const dispatch = useDispatch()
const navigate = useNavigate()
const state = useSelector(stateSelector);

  useEffect(()=>{
    dispatch(getCompetenceList())
    if(state.status === 'success'){
      setList(state.list)
      console.log(state.list)
    }else if(state.status == 'error'){
      setErrorMsg(state.errorMsg)
    }
  },[setList. list, setErrorMsg]);
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
  }} onSubmit={handleSubmit}>
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
        <label >start date: </label>
        <Field name="startDate" type="date"/>
      <div>
        <label> end date: </label>
        <Field name="endDate" type="date"/>
      </div>
       <button type="submit">Submit</button>
      </Form>
  </Formik>

      </div>
)
  }else if(ErrorMsg){
    return <p style={{color:'red'}} className="error"> {ErrorMsg} </p>
  }else{
    return <p>loading...</p>
  }
}
