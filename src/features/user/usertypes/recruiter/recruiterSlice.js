import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import userService from  '../../../../services/user.service';

//const user = JSON.parse(localStorage.getItem("user"));

export const getApplications = createAsyncThunk('recruiter/getApplications',async (thunkAPI, start, end) =>{
  try{
    const res = await userService.getApplications(start, end);
    return res;
  }catch(err){
   throw new Error(err)
    //  return thunkAPI.rejectWithValue(err)
  }
})

const initialState = {
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
      state.list = action.payload.data;
    },
    [getApplications.rejected]: (state, action)=>{
    state.status = 'error';
      state.errorMsg = state.payload.data;
    }
  }
})
export const stateSelector = (state) => state.recruiter;
export default recruiterSlice.reducer;
