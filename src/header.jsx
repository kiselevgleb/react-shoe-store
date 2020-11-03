import React, { Fragment, useState, useEffect } from 'react';
import mainLogo from './img/header-logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from './actions/actionCreators';

export default function Header(props) {
    const [searchInput, setSearchInput] = useState("");
    const [searchBut, setSearchBut] = useState(false);
    const dispatch = useDispatch();
    const cartInfo = localStorage.getItem('orderInfo')
    let cionInCart = 0;
    if (cartInfo != null) {
        cionInCart = JSON.parse(cartInfo).length
    }

    const handleSearchBut = () => {
        if (searchBut) {
            if (searchInput !== "") {
                setSearchBut(false);
                props.history.push('/catalog.html');
                dispatch(changeSearchField(searchInput));

            } else {
                setSearchBut(false);
            }
        } else {
            setSearchBut(true);
        }
    };
    const handleSearchButEnter = (event) => {
        if (event.key === 'Enter') {
            if (searchBut) {
                if (searchInput !== "") {
                    setSearchBut(false);
                    props.history.push('/catalog.html');
                    dispatch(changeSearchField(searchInput));
                }
            }
        }
    };
    const handleSearchInput = (evt) => {
        setSearchInput(evt.target.value);
    };
    const handleCart = () => {
        props.history.push('/cart.html');
    };

    return (
        <Fragment>
            <header class="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <a className="navbar-brand" href="/react-shoe-store/">
                                <img src={mainLogo} alt="Bosa Noga" />
                            </a>
                            <div className="collapase navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/react-shoe-store/">Главная</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/react-shoe-store/catalog.html">Каталог</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/react-shoe-store/about.html">О магазине</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/react-shoe-store/contacts.html">Контакты</a>
                                    </li>
                                </ul>
                                <div>
                                    <div className="header-controls-pics">
                                        <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleSearchBut} ></div>
                                        <div className="header-controls-pic header-controls-cart" onClick={handleCart} >
                                            {cionInCart !== 0 ? <div><div className="header-controls-cart-full">{cionInCart}</div> <div className="header-controls-cart-menu"></div></div> : <div></div>}
                                        </div>
                                    </div>
                                    {searchBut &&
                                        <form data-id="search-form" className="header-controls-search-form form-inline">
                                            <input className="form-control" placeholder="Поиск" type="search" onChange={handleSearchInput} onKeyPress={handleSearchButEnter} />
                                        </form>}
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </header>
        </Fragment>
    )
}