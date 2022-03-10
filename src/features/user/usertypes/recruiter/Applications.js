import React from 'react';

 export const ApplicationsList = () =>{

  return(
    <div>
           <p>To list all available candidates during a certain period, please
             provide us with the dates for that period.</p>

        <label >start date: </label>
        <input name="startDate" type="date"/>
      <div>
        <label> end date: </label>
        <input name="endDate" type="date"/>
        </div>
           <button type="submit">Submit</button>
    </div>);
}
