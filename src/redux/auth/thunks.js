import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_USER_URL = `https://connections-api.herokuapp.com`;
const userRegister = '/users/signup';
const userLogin = '/users/login';
const userLogout = '/users/logout';
const userCurrent = '/users/current';

axios.defaults.baseURL = BASE_USER_URL;

export const registerThunk = createAsyncThunk('users/signup', async(user, {rejectWithValue}) => {
      try {
           const res = await fetch(BASE_USER_URL + userRegister, {
               method: 'POST',
               headers: {
                   "Content-Type": "application/json"
              },
               body: JSON.stringify(user),
           });
           const data = await res.json();
         //   console.log(data);
             return data
       } catch (err) {
           rejectWithValue({ error: err.message})
       }
});

export const loginThunk = createAsyncThunk('users/login', async(user, {rejectWithValue}) => {
     try {
         const res = await fetch(BASE_USER_URL + userLogin, {
             method: 'POST',
             headers: {
                 "Content-Type": "application/json"
            },
             body: JSON.stringify(user),
         });
         const data = await res.json();
        //  console.log(data);
         return data
     } catch (err) {
         rejectWithValue({ error: err.message})
     }
})

export const currentThunk = createAsyncThunk('users/current', async(user, {rejectWithValue, getState}) => {
    const state = getState();
    const token = state.auth.token;
     if (!token) {
        throw new Error(200);
      }
     try {
         const res = await fetch(BASE_USER_URL + userCurrent, {
             method: 'GET',
             headers: {
                Authorization: state.auth.token
             }});
         const data = await res.json();
        //  console.log(data);
         return data
     } catch (err) {
         rejectWithValue({ error: err.message})
     }
})

export const logoutThunk = createAsyncThunk('users/logout', async(_, {rejectWithValue,getState}) => {
    const state = getState();
    if (!state.auth.token) return;
     try {
        //  const res =
         await fetch(BASE_USER_URL + userLogout, {
             method: 'POST',
             headers: {
                Authorization: state.auth.token
             }});
        //  console.log(res);
     } catch (err) {
         rejectWithValue({ error: err.message})
     }
})
