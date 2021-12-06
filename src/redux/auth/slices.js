import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, currentThunk, logoutThunk } from "./thunks";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: { name: null, email: null },
        token: null,
        error: null,
        isAuth: false,
        isRefresh: false,
    },
     extraReducers: {
         [registerThunk.fulfilled](state,action){
             return {
                 ...state,
                 user: action.payload.user,
                 token: action.payload.token,
                 isAuth: true,
             }
         },
         [loginThunk.fulfilled](state,action){
             return {
                 ...state,
                 user: action.payload.user,
                 token: action.payload.token,
                 isAuth: true,
             }
         },
         [logoutThunk.fulfilled](state,_){
            return {
                ...state,
                user: { name: null, email: null },
                token: null,
                isAuth: false,
            }
        },
         [currentThunk.pending](state,_){
             return {
                ...state,
                  isRefresh: true,
             }
         },
         [currentThunk.fulfilled](state,action, token){
             return {
                  ...state,
                 user: action.payload,
                 isAuth:true,
                 isRefresh: false,
             }
         },
         [currentThunk.rejected](state,action){
             return {
                 ...state,
                 error: action.payload,
                 isRefresh: false,
             }
         },
     }
})

export default authSlice.reducer;

//  CONTACTS
const UNIQUE_ID = `61968c60af46280017e7e165`;
const BASE_CONTACT_URL = `https://${UNIQUE_ID}.mockapi.io/api/v1`;
const contacts = '/contacts'

export const contactsApiSlice = createApi ({
    reducerPath: 'Contacts',
    baseQuery: fetchBaseQuery({baseUrl: BASE_CONTACT_URL}),
    tagTypes: [`Contact`],
    endpoints: (builder) => {
        return {

        fetchContacts: builder.query({ query: ()=> contacts,
        providesTags: (result, err, arg)=> (
          [...result.map(({id})=> {
           return {
               type: "Contact",
               id
           }})
        ]
        )
        }),

        addNewContact: builder.mutation({ query: (contact)=> {
            return {
                method: `POST`,
                url: contacts,
                body: contact
            }
        },
        invalidatesTags: [`Contact`]
        }),

        deleteContact: builder.mutation({ query: (id)=> {
            return {
                method: `DELETE`,
                url: `${contacts}/${id}`
            }
        },
        invalidatesTags: (result,error,id) => [{type: "Contact",
        id}]
        }),
}}
})

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducer: {
        'filter/value':(_,action) => action.payload,
        },
    }
)
 export const {setFilter} = filterSlice.actions;

export const {useFetchContactsQuery,useAddNewContactMutation,useDeleteContactMutation} = contactsApiSlice
