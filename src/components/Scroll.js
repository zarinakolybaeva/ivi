import React, { useEffect, useState, useRef } from 'react';
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const withMovies = (WrappedComponent) => {
    return (props) => {
        const [movies, setMovies] = useState([]);

    
        const sampleMovies = [
            { id: 1, title: 'Movie 1', backdrop_path: '' },
            { id: 2, title: 'Movie 2', backdrop_path: '' },
        ];

        useEffect(() => {
            setMovies(sampleMovies); 
        }, []);

        return <WrappedComponent {...props} movies={movies} />;
    };
};

const Scroll = ({ title, RowID, movies }) => {
    const sliderRef = useRef(null);

    const toLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 300; 
        }
    };

    const toRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 300; 
        }
    };

    return (
        <>
            <h2 className={'text-white font-bold md:text-xl p-4'}>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={toLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div ref={sliderRef} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item) => (
                        <Movie key={item.id} item={item} />
                    ))}
                </div>
                <MdChevronRight 
                    onClick={toRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </>
    );
};


export default withMovies(Scroll);
// Оборачиваем компонент Scroll в HOC withMovies