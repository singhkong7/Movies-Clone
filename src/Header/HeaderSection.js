import React from 'react'
import {Link }from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.scss";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../redux/Movies/movieSlice';
function HeaderSection() {
    const[term,setTerm]=useState("");
    const dispatch = useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        if(term ===" ") return alert("Please Enter the text");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        console.log(term);
        setTerm("");
    }
    return (
        <div className="header">
            <Link to="/" style={{textDecorationLine:"none"}}>
                <h2>Movie App</h2>
            </Link>
            <form onSubmit={submitHandler}>
                <input type="text" value={term} placeholder='Search for Movies Or Shows' onChange={(e)=>setTerm(e.target.value)}/>
                <button type="submit"><SearchIcon/></button>

            </form>
            <div className="user-image">
                <img src="https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/user.png" alt="Account"/>
            </div>

        </div>
    )
}

export default HeaderSection;
