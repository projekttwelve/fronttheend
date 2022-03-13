import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getApplications, stateSelector } from './recruiterSlice';

export const ApplicationsList = () =>{
    const [period, setPeriod] = useState({startDate: null, endDate: null})
    const [content, setContent] = useState(null)
    const dispatch = useDispatch();
    const state = useSelector(stateSelector);

    useEffect(()=>{
        if(state.list){
            setContent({content: state.list})
        }
    },[state.list, content])

     const addStart = (date) =>{
         setPeriod({...state, endDate: date})
     }

    const addEnd = (date) =>{
         setPeriod({...state, startDate: date})
    }

    const handleSubmit = () =>{
        dispatch(getApplications());
    }
  return(
    <div>
           <p>To list all available candidates during a certain period, please
             provide us with the dates for that period.</p>

        <label >start date: </label>
        <input name="startDate" type="date"/>
      <div>
        <label> end date: </label>
        <input name="endDate" type="date" onChange={addEnd((e)=> e.value)}/>
        </div>
           <button type="submit" onSubmit={handleSubmit}>Submit</button>
      {if(content){
          retrun(<div>
                 {content.map((item)=>{
                     <div>${item}</div>
                 })}
                 </div>)
      }}
    </div>);
}
