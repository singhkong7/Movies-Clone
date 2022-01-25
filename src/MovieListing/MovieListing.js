import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import {Settings} from "../Settings";
import { getAllMovies, getAllShows } from '../redux/Movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";
function MovieListing() {
    const movies=useSelector(getAllMovies);
    const shows=useSelector(getAllShows);
    //console.log(movies);
    //console.log(shows);
    let renderMovies="";
    let renderShows="";
    renderMovies=
        movies.Response ==="True" ? (movies.Search.map((movie,index)=>{
            return <MovieCard key={index} data={movie}/>
        })
    ): 
    (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )
    renderShows=
        shows.Response ==="True" ? (shows.Search.map((movie,index)=>{
            return <MovieCard key={index} data={movie}/>
        })
    ): 
    (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h1>MovieList</h1>
                <div className="movie-container">
                   <Slider {...Settings}>
                        {renderMovies}
                   </Slider>
                </div>
            </div>
            <div className="movie-list">
                <h1>Show List</h1>
                <div className="movie-container">
                    <Slider {...Settings}>
                        {renderShows}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing;
