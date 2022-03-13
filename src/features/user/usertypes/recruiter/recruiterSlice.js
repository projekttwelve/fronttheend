import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import userService from  '../../../../services/user.service';

const user = JSON.parse(localStorage.getItem("user"));

export const getApplications = createAsyncThunk('recruiter/getApplications',async ( period,thunkAPI ) =>{
  try{
    const res = await userService.getApplications(period);
    return res;
  }catch(err){
   throw new Error(err)
    //  return thunkAPI.rejectWithValue(err)
  }
})

const initialState ={
  list: null,
  status: 'idle',
  errorMsg: ' ',
}

export const recruiterSlice = createSlice({
  name: 'recruiter',
  initialState,
  extraReducers:{
    [getApplications.pending]: (state, action)=>{
      state.status = 'loading'
    },
    [getApplications.fulfilled]: (state, action)=>{
      state.status = 'success';
      state.list = action.payload;
    },
    [getApplications.rejected]: (state, action)=>{
    state.status = 'error';
      state.errorMsg = action.payload.response.data;
    }
  }
})
export const stateSelector = (state) => state.recruiter;
export default recruiterSlice.reducer;
