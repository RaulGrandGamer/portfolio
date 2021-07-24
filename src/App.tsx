import React from 'react';
import './App.scss';
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
    return (
        <div className="container">
            <header className="header">
                <img className="logo" src="logo.svg" alt=""/>
                <ul className="header__links">
                    <li>
                        <AnchorLink className="header__link active" href="#services">Услуги</AnchorLink>
                    </li>
                    <li><AnchorLink className="header__link" href="#portfolio">Портфолио</AnchorLink></li>
                    <li><AnchorLink className="header__link" href="#contacts">Контакты</AnchorLink></li>
                    <li><AnchorLink className="header__link button" href="#brif">Оставить заявку</AnchorLink></li>
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
                <section id="services">
                    <span className="section__title">мои услуги</span>
                    <div className="services__items">
                        <div className="services__item">
                            <img className="services__item-img" src="engine.svg" alt=""/>
                            <span className="services__item-title">разработка дизайна сайта</span>
                            <span className="services__item-subtitle">создания сайтов от LANDING PAGE до виртуальных магазинов</span>
                        </div>
                        <img className="arrow" src="arrow.svg" alt=""/>
                        <div className="services__item">
                            <img className="services__item-img" src="ads.svg" alt=""/>
                            <span className="services__item-title">Создания рекламных дизайнов</span>
                            <span className="services__item-subtitle">баннеры, посты и дизайны для продвижения ваших продуктов</span>
                        </div>
                        <img className="arrow" src="arrow.svg" alt=""/>
                        <div className="services__item">
                            <img className="services__item-img" src="browser.svg" alt=""/>
                            <span className="services__item-title">Улучшения для бренда</span>
                            <span className="services__item-subtitle">создаю логотипы, брендовые визитки и тд.</span>
                        </div>
                    </div>
                </section>
                <section className="brif">
                    <span className="section__title with__subtitle">Бриф</span>
                    <span className="section__subtitle">для Сотрудничества оставьте заявку</span>
                    <form className="brif__form">
                        <input className="input" type="text" placeholder="ИМЯ"/>
                        <input className="input"  type="text" placeholder="ФАМИЛИЯ"/>
                        <input className="input" type="text" placeholder="E-MAIL"/>
                        <select className="input">
                            <option>Услуги</option>
                        </select>
                        <input className="input" type="text" placeholder="БЮДЖЕТ"/>
                        <input className="input" type="text" placeholder="СРОК"/>
                        <textarea className="input textarea" placeholder="Опишите вашу задачу"/>
                        <button className="button">Отправить</button>
                    </form>
                </section>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
