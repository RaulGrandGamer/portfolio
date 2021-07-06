import React from 'react';
import './App.scss';

function App() {
    return (
        <div className="container">
            <header className="header">
                <img src="logo.svg" alt=""/>
                <ul className="header__links">
                    <li><a className="header__link" href="#services">Услуги</a></li>
                    <li><a className="header__link" href="#portfolio">Портфолио</a></li>
                    <li><a className="header__link" href="#contacts">Контакты</a></li>
                    <li><a className="header__link button" href="#offer">Оставить заявку</a></li>
                </ul>
            </header>
            <main>
                <section className="hero">
                    <div className="left">
                        <h1 className="hero__title">создаем digital дизайн вашего бренда бизнеса
                            и продуктов</h1>
                        <span className="hero__subtitle">Разработка дизайна сайтов с учетом целевой аудитории, принципов юзабилити и требуемых задач</span>
                        <a className="button" href="#offer">заказать</a>
                    </div>
                    <div className="right">
                        <img src="hero.png" alt=""/>
                    </div>
                </section>
                <section id="portfolio">
                    <span className="section__title">Портфолио и мои работы</span>
                    <div className="portfolio__items">
                        <div className="portfolio__item"><img src="1.png" alt=""/></div>
                        <div className="portfolio__item"><img src="2.png" alt=""/></div>
                        <div className="portfolio__item"><img src="3.png" alt=""/></div>
                        <div className="portfolio__item"><img src="4.png" alt=""/></div>
                        <div className="portfolio__item"><img src="5.png" alt=""/></div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
