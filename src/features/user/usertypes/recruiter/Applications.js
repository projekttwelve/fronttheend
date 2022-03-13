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
    },[ content, setContent])

    const addStart = (e) =>{
        setPeriod({...state, endDate: e.target.value})
         console.log('sdate: ')
     }

    const addEnd = (e) =>{
         setPeriod({...state, startDate: e.target.value})
        console.log('enddate')
    }

    const handleSubmit = () =>{
        dispatch(getApplications(period));
        console.log('period: ' + period)
    }
  return(
    <div>
           <p>To list all available candidates during a certain period, please
             provide us with the dates for that period.</p>

        <label >start date: </label>
        <input name="startDate" type="date" onChange={addEnd}>
      <div>
        <label> end date: </label>
        <input name="endDate" type="date" onChange={addEnd}/>
        </div>
           <button type="submit" onSubmit={handleSubmit}>Submit</button>
      {content &&
          (<div>
                 {content.map((item)=>{
                  return   <div>${item}</div>
                 })}
                 </div>)
      }
    </div>);
}
