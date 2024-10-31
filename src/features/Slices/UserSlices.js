import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { redirect } from "react-router-dom";
import { CreateFilm,  getDataById,  getUsers} from "../actions/UserAction";


 const initialState={
    isLoading:false,
    isSuccess:false,
    UserData:[],
    errorMessage:"",
    isdeleted:false,

}

export  const  UserSlices=createSlice({
    name:"UserSlices",
    initialState,
    reducers:{
        clearIsSuccess:(state)=>{
            state.isSuccess=false,
            state.isdeleted=false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(CreateFilm.pending,(state,action)=>{

            state.isLoading=true,
            state.isSuccess=false,
            state.errorMessage=""
        })
        .addCase(CreateFilm.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.errorMessage="",
            state.UserData=action.payload       })
        .addCase(CreateFilm.rejected,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=false,
            toast.error(action?.payload || "Something went wrong",{
                position:"top-center"
              })
        })
        .addCase(getUsers.pending,(state,action)=>{

            state.isLoading=true,
            state.isSuccess=false,
            state.errorMessage=""
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.errorMessage="",
            state.UserData=action.payload       })
        .addCase(getUsers.rejected,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=false,
            toast.error(action?.payload || "Something went wrong",{
                position:"top-center"
              })
        })

        .addCase(getDataById.pending,(state,action)=>{

            state.isLoading=true,
            state.isSuccess=false,
            state.errorMessage=""
        })

        .addCase(getDataById.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.errorMessage="",
            state.UserData=action.payload       })


        .addCase(getDataById.rejected,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=false,
            toast.error(action?.payload || "Something went wrong",{
                position:"top-center"
              })
        })



    }


})



export const { clearIsSuccess } = UserSlices.actions;
export default  UserSlices.reducer;