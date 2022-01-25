import React,{useEffect} from 'react'
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } from '../redux/Movies/movieSlice';
import {useDispatch} from "react-redux";
function Home() {
    const dispatch = useDispatch();
    const movieText="Harry";
    const ShowText="Friends";
    useEffect(() => {
          dispatch(fetchAsyncMovies(movieText));
          dispatch(fetchAsyncShows(ShowText));
    }, [dispatch]);
  return (
    <div>
        <div className="banner-img"></div>
        <MovieListing/>
    </div>
  )
}

export default Home;
