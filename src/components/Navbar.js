import React, { useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const canLogOut = useCallback((user) => {
        return !!user;
    }, []);


    useEffect(() => {
        console.log(user ? `User is logged in: ${user.email}` : 'User is logged out');
    }, [user]); 

    const handleLogOut = async () => {
        if (canLogOut(user)) {
            try {
                await logOut(); 
                navigate('/'); 
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("User cannot log out");
        }
    };

    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute bg-black text-white'>
            <Link to='/'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Иви</h1>
            </Link>

        
            <div className='flex space-x-4'>
                <Link to='/my-ivi' className='hover:text-gray-400'>Мой Иви</Link>
                <Link to='/movies' className='hover:text-gray-400'>Фильмы</Link>
                <Link to='/series' className='hover:text-gray-400'>Сериалы</Link>
                <Link to='/cartoons' className='hover:text-gray-400'>Мультфильмы</Link>
                <Link to='/tv-channels' className='hover:text-gray-400'>ТВ-каналы</Link>
                <Link to='/signup' className='hover:text-gray-400'>Смотреть 30 дней бесплатно</Link>
            </div>

      
            <div className='flex items-center'>
                <input
                    type="text"
                    placeholder="Поиск"
                    className='p-2 rounded text-black'
                />
            </div>

           
            <div className='flex items-center'>
                {user?.email ? (
                    <div className='flex items-center'>
                        <Link to='/account' className='hover:text-gray-400'>
                            <button className='text-white pr-4'>Мой аккаунт</button>
                        </Link>
                        <button
                            onClick={handleLogOut}
                            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
                        >
                            Выйти
                        </button>
                    </div>
                ) : (
                    <div className='flex items-center'>
                        <Link to='/login'>
                            <button className='text-white pr-4'>Войти</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
