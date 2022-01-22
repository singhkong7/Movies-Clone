import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {APIkey} from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";
export const fetchAsyncMovies=createAsyncThunk(
  "movies/fetchAsyncMovies",
  async()=>{
    const movieText="Harry";
    const response= await movieApi.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
      );
     return response.data;
  }
);
export const fetchAsyncShows=createAsyncThunk(
  "movies/fetchAsyncShows",
  async()=>{
    const seriesText="Friends";
    const response= await movieApi.get(
      `?apiKey=${APIkey}&s=${seriesText}&type=series`
      );
     return response.data;
  }
);
export const fetchAsyncMoviesOrShows=createAsyncThunk(
  "movies/fetchAsyncMoviesOrShows",
  async(id)=>{
    const response= await movieApi.get(
      `?apiKey=${APIkey}&i=${id}&Plot=full`
      );
     return response.data;
  }
);
const initialState = {
  movies: {},
  shows:{},
  moviesOrShows:{},
};
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow:(state)=>{
      state.moviesOrShows={};
    }
  },
  extraReducers:{
    [fetchAsyncMovies.pending]:()=>{
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
      console.log("Successfull");
      return {...state,movies:payload};

    },
    [fetchAsyncMovies.rejected]:()=>{
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
  },
  [fetchAsyncMoviesOrShows.fulfilled]: (state, { payload }) => {
    console.log("Fetched Successfully!");
    return { ...state, moviesOrShows: payload };
},
}
})
export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getMovieOrShowDetails=(state)=>state.movies.moviesOrShows;
export default movieSlice.reducer;