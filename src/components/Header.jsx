import React, { Fragment, useState, useEffect } from 'react';
import mainLogo from '../img/header-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    const { loading, error, cartData } = useSelector(state => state.skills);
    const [searchInput, setSearchInput] = useState("");
    const [searchBut, setSearchBut] = useState(false);
    const dispatch = useDispatch();
    let cionInCart = 0;
    if (cartData != []&&cartData != null) {
        cionInCart = JSON.parse(cartData).length
    }
    const handleSearchBut = () => {
        if (searchBut) {
            if (searchInput !== "") {
                setSearchBut(false);
                // props.history.push('/catalog');
                props.history.push('/react-shoe-store/catalog');
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
                    // props.history.push('/catalog');
                    props.history.push('/react-shoe-store/catalog');
                    dispatch(changeSearchField(searchInput));
                }
            }
        }
    };
    const handleSearchInput = (evt) => {
        setSearchInput(evt.target.value);
    };
    const handleCart = () => {
        // props.history.push('/cart');
        props.history.push('/react-shoe-store/build/cart');
    };

    return (
        <Fragment>
            <header class="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            {/* <NavLink className="navbar-brand" exact to="/"> */}
                                <NavLink className="navbar-brand" exact to="/react-shoe-store/build/">
                                <img src={mainLogo} alt="Bosa Noga" />
                            </NavLink>
                            <div className="collapase navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        {/* <NavLink className="nav-link" exact to="/" >Главная</NavLink> */}
                                        <NavLink className="nav-link" exact to="/react-shoe-store/build/" >Главная</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {/* <NavLink className="nav-link" exact to="/catalog" >Каталог</NavLink> */}
                                        <NavLink className="nav-link" exact to="/react-shoe-store/build/catalog" >Каталог</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {/* <NavLink className="nav-link" exact to="/about" >О магазине</NavLink> */}
                                        <NavLink className="nav-link" exact to="/react-shoe-store/build/about" >О магазине</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {/* <NavLink className="nav-link" exact to="/contacts" >Контакты</NavLink> */}
                                        <NavLink className="nav-link" exact to="/react-shoe-store/build/contacts" >Контакты</NavLink>
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