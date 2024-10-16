import React from 'react';
import Main from '../components/Main';
import Scroll from '../components/Scroll';

const Home = () => {
    return (
        <>
            <Main />
            <Scroll RowID='1' title='Фильмы-новинки' />
            <Scroll RowID='2' title='Популярные' />
            <Scroll RowID='3' title='Лучшие фильмы' />
            <Scroll RowID='4' title='Высокий рейтинг' />
            
            <div className='w-full flex flex-col items-center justify-center mt-8'>
                <div className='flex justify-around items-center w-full max-w-6xl px-10'>
                    <div className='text-center bg-gray-800 rounded-xl'></div>
                    <div className='w-200 text-center bg-gray-800 rounded-xl flex'></div>
                    <div className='text-center bg-gray-800 rounded-xl'></div>
                </div>
            </div>

        
            <footer className='bg-gray-900 text-white py-6'>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='flex flex-col md:flex-row md:justify-between'>
                        <div className='mb-4'>
                            <h3 className='font-bold mb-2'>О нас</h3>
                            <ul>
                                <li>О компании</li>
                                <li>Вакансии</li>
                                <li>Программа бета-тестирования</li>
                                <li>Информация для партнёров</li>
                                <li>Размещение рекламы</li>
                                <li>Пользовательское соглашение</li>
                                <li>Политика конфиденциальности</li>
                                <li>На Иви применяются рекомендательные технологии</li>
                                <li>Комплаенс</li>
                            </ul>
                        </div>
                        <div className='mb-4'>
                            <h3 className='font-bold mb-2'>Разделы</h3>
                            <ul>
                                <li>Мой Иви</li>
                                <li>Что нового</li>
                                <li>Фильмы</li>
                                <li>Сериалы</li>
                                <li>Мультфильмы</li>
                                <li>ТВ-каналы</li>
                                <li>Что посмотреть</li>
                                <li>Активация сертификата</li>
                                <li>Служба поддержки</li>
                            </ul>
                            <p className='text-gray-400'>Мы всегда готовы вам помочь. Наши операторы онлайн 24/7</p>
                            <p className='text-gray-400'>Написать в чате: <a href='mailto:ask.ivi.ru' className='underline'>ask.ivi.ru</a></p>
                        </div>
                        <div className='mb-4'>
                            <h3 className='font-bold mb-2'>Смотрите фильмы, сериалы и мультфильмы без рекламы</h3>
                            <p>Загрузить в App Store</p>
                            <p>Доступно в Google Play</p>
                            <p>Смотрите на Smart TV</p>
                            <p>Скачайте из RuStore</p>
                            <p>Откройте в AppGallery</p>
                            <p>Все устройства</p>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <p>© 2024 ООО «Иви.ру»</p>
                    <p>ТОО «Content Stream (Контент Стрим)»</p>
                    <p>HBO ® and related service marks are the property of Home Box Office, Inc</p>
                </div>
            </footer>
        </>
    );
};

export default Home;
