import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import userService from  '../../../../services/user.service';

const user = JSON.parse(localStorage.getItem("user"));
/**
 * @function getComptenceList
 * async function that exaecutes the userSrvice
 * function with the same name.
 * @returns { array } with objects containng usernames
 * */
export const getCompetenceList = createAsyncThunk('recruit/getCompetence',async (thunkAPI) =>{
  try{
    const res = await userService.getCompetenceList();
    return res;
  }catch(err){
   throw new Error(err)
    //  return thunkAPI.rejectWithValue(err)
  }
})
/**
 * @function postApplication
 *sends a POST request with autherization header,
 * @param { object } contains application details.
 * @returns { string } confirmation message.
 * */

export const postApplication = createAsyncThunk('recruit/poastApp', async(appl, thunkAPI)=>{
  try{
    const res = await userService.postApplication(appl);
    return res;
  }catch(err){
    throw new Error(err);
  }
})

const initialState = {
  list: null,
  status: 'idle',
  errorMsg: ' ',
  posted:{
    status: 'idle',
    res: null
  }
}

export const recruitSlice = createSlice({
  name: 'recruit',
  initialState,
  extraReducers:{
    [getCompetenceList.pending]: (state, action)=>{
      state.status = 'loading'
    },
    [getCompetenceList.fulfilled]: (state, action)=>{
      state.status = 'success';
      state.list = action.payload.data;
    },
    [getCompetenceList.rejected]: (state, action)=>{
    state.status = 'error';
      state.errorMsg = action.payload.response.data;
    }
  },
  [postApplication.pending]: (state, action)=>{
    state.posted.status = "pending";
  },
  [postApplication.fullfiled]: (state, action)=>{
    state.posted.status = "success";
    state.posted.res = action.payload.data;
  },
   [postApplication.rejected]: (state, action)=>{
     state.posted.status = "rejected";
    state.posted.res = action.payload.data;
  },
})
export const stateSelector = (state) => state.recruit;
export default recruitSlice.reducer;
