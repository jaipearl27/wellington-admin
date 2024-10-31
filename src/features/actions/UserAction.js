import{createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../services/axiosInterceptor";

export const CreateFilm= createAsyncThunk(
    "CreateFilm", 
    async (  formData , { rejectWithValue }) => {
      try {
        const response = await axios.post("http://localhost:8000/api/v1/film", formData, {
          withCredentials: true,
          headers: {
            "Content-type": "multipart/form-data",
          },
        });
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.response || "Something went wrong");
      }
    }
  );


  export const getUsers= createAsyncThunk(
    "getUsers",
    async ( _ , { rejectWithValue }) => {
      try {
        const response =  await instance.get(`/game/users?page=1&limit=12`,
          
        {     
          "Content-type": "multipart/form-data",
        },);
               
        console.log("ressa",response)
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.response || "Something went wrong");
      }
    }
  )
  
  
  
  
  
  export const updateFilm = createAsyncThunk(
    "updateFilm",
    async ({ id,formData}, { rejectWithValue }) => {

      console.log("hf",id)
        try {
            const response = await axios.put(`http://localhost:8000/api/v1/film/${id}`,  formData, {
              withCredentials: true,
                "Content-type": "multipart/form-data",
              },
            
            );
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);



  
export const getDataById = createAsyncThunk(
  "getDataById",
  async ({ id}, { rejectWithValue }) => {

    console.log("hf",id)
      try {
          const response = await axios.get(`http://localhost:8000/api/v1/film/${id}`
          
          );
          return response.data; 
      } catch (error) {
          return rejectWithValue(error.response?.data || "Something went wrong");
      }
  }
);
