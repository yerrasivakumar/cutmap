
import {createSlice} from "@reduxjs/toolkit";
const state ={
     token:'',
     id:'',
     branchName:'',
     adminToken:'',
     adminName:'',
     adminEmail:'',
     adminEmployeeId:'',
     adminPhonenumber:'',
     loading: false,
//      accepted:'',
//      message:''
 }
const userslice = createSlice(
    {
    name:'user',
    initialState:state,
    reducers:{
        usertoken:(state,{payload})=>{
            state.token =payload
        },
        setuserid:(state,{payload})=>{
            state.id =payload
        },
        setbranch:(state,{payload})=>{
         state.branchName = payload
        },
        setAdminToken:(state,{payload})=>{
         state.adminToken = payload
        },
        setAdminName:(state,{payload})=>{
         state.adminName = payload
        },
        setAdminEmail:(state,{payload})=>{
         state.adminEmail = payload
        },
        setAdminEmployeeId:(state,{payload})=>{
         state.adminEmployeeId = payload
        },
        setAdminPhoneNumber:(state,{payload})=>{
         state.adminPhonenumber = payload
        },
        setloading:(state,{payload})=>{
       state.loading = payload
        },
        // setAccepted:(state,{payload})=>{
        //     state.accepted = payload
        // },
        // setmessage:(state,{payload})=>{
        //     state.message = payload
        // },
        logout:(state)=>{
         state.token=null
         state.userid=null
         state.branchName=null
         state.adminToken=null
        //  state.accepted=null
        //  state.message=null
        }
         }
})

export const { usertoken ,setuserid,setbranch,logout,setAdminToken,setAdminName,setAdminEmail,setAdminEmployeeId,setAdminPhoneNumber,setloading} = userslice.actions
export default userslice.reducer;