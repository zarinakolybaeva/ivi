import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const BuyMovies = () => {
    const getSliderScrollAmount = (direction) => {
        return direction === 'left' ? -500 : 500;
    };

    const handleSlide = (direction) => () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft += getSliderScrollAmount(direction);
    };

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>Buy Movies</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={handleSlide('left')}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div
                    id='slider'
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                >
                  
                </div>
                <MdChevronRight
                    onClick={handleSlide('right')}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </>
    );
};

export default BuyMovies;
