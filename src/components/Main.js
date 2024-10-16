import React, { useState } from 'react';


const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
};


const MovieInfo = ({ movie }) => {
    if (!movie) return null;

    return (
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
            <p className='text-gray-400 text-sm'>Released: {movie.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{movie.overview}</p>
        </div>
    );
};




const Main = () => {
    const staticMovies = [
        {
            id: 1,
            title: "Example Movie 1",
            release_date: "2022-09-15",
            overview: "This is an example description for Movie 1.",
            backdrop_path: ""
        },
        {
            id: 2,
            title: "Example Movie 2",
            release_date: "2023-03-22",
            overview: "This is an example description for Movie 2.",
            backdrop_path: ""
        }
    ];

    
    const [movies] = useState(staticMovies);
    const [currentMovie] = useState(getRandomMovie(movies)); 

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover'
                     src={`https://static.wixstatic.com/media/f8f5c6_5de16ad034cb47ff9d57104169209d92~mv2.jpg/v1/fill/w_576,h_571,al_c,q_80,enc_auto/f8f5c6_5de16ad034cb47ff9d57104169209d92~mv2.jpg`} alt={currentMovie?.title} />
                <MovieInfo movie={currentMovie} /> {}
    
            </div>
        </div>
    );
};

export default Main;
