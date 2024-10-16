import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, logIn } = UserAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'user account';


        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

 
    const inputClass = useMemo(() => 'p-3 my-2 bg-gray-600 rounded', []);
    const buttonClass = useMemo(() => 'bg-red-600 py-3 my-6 rounded font-bold', []);

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover'
                     src='https://podborkino.com/wp-content/uploads/2021/08/uzhastiki-na-noch.jpg' alt='/' />
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Войти</h1>
                            {error && <p className='p-3 bg-red-400 my-2'>{error}</p>}
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input 
                                    onChange={handleEmailChange}
                                    className={inputClass} 
                                    type='email' 
                                    placeholder='Email' 
                                />
                                <input 
                                    onChange={handlePasswordChange}
                                    className={inputClass} 
                                    type='password' 
                                    placeholder='Password' 
                                />
                                <button className={buttonClass}>Войти</button>
                                <div className='flex justify-between items-center text-gray-300'>
                                    <p>
                                        <input className='mr-2' type='checkbox' /> Запомнить меня
                                    </p>
                                    <p>
                                        Нужна помощь?
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
