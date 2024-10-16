import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const withLike = (WrappedComponent) => {
    return (props) => {
        const [like, setLike] = useState(false);

        const toggleLike = useCallback(() => {
            setLike((prev) => !prev);
        }, []);

        useEffect(() => {
            console.log(`${props.item.title} is now ${like ? 'liked' : 'unliked'}`);
        }, [like, props.item.title]);


        return <WrappedComponent {...props} like={like} toggleLike={toggleLike} />;
    };
};

const Movie = ({ item, like, toggleLike }) => {
    const saveMovie = useCallback(() => {
        alert(`Saved ${item?.title || "Movie"}`);
    }, [item]);

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img
                className='w-full h-auto block'
                src={item.posterUrl || "https://via.placeholder.com/280x400"} 
                alt={item.title || "Movie poster"}
            />

            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p onClick={toggleLike} className='absolute top-4 left-4 cursor-pointer'>
                    {like ? (
                        <FaHeart className='text-red-500' />
                    ) : (
                        <FaRegHeart className='text-gray-300' />
                    )}
                </p>
                <button onClick={saveMovie} className="absolute bottom-4 left-4 text-white bg-blue-500 px-2 py-1 rounded">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

const EnhancedMovie = withLike(Movie);

const MovieList = () => {

    const movies = useMemo(() => [
        { id: 1, title: 'Inception', posterUrl: 'https://via.placeholder.com/280x400?text=Inception' },
        { id: 2, title: 'Interstellar', posterUrl: 'https://via.placeholder.com/280x400?text=Interstellar' },
        { id: 3, title: 'The Dark Knight', posterUrl: 'https://via.placeholder.com/280x400?text=The+Dark+Knight' },
    ], []); 

    return (
        <div className="movie-list">
            <h1>Movie List</h1>
            <div className="flex flex-wrap">
                {movies.map((movie) => (
                    <EnhancedMovie key={movie.id} item={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
