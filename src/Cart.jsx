import React, { Fragment, useState, useEffect } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';
import { getOrderInfoRequest, getCartRequest } from './actions/actionCreators';

export default function Cart(props) {
    const { items, categories, hits, loading, error, search, cart } = useSelector(state => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartRequest());
    }, [dispatch])


    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }
    let divStyle = {
        'maxWidth': '30rem',
        'margin': '0 auto'
    };
    let num = 0;
    let total = 0;
    let cartJSON = JSON.parse(localStorage.getItem('orderInfo'));

    if (cartJSON != null) {
        cartJSON.forEach((o) => total += o.price * o.coin);
    }

    const handleDel = id => {
        let cartJSONFiltered = cartJSON.filter((o) => Number(o.id) !== id);
        if (cartJSONFiltered.length === 0) {
            localStorage.removeItem('orderInfo');
        }
        localStorage.setItem('orderInfo', JSON.stringify(cartJSONFiltered));
        props.history.push(`/cart.html`);
    };
    const getOrderRequest = id => {
        dispatch(getOrderInfoRequest(id));
        props.history.push(`/catalog/${id}.html`);
    };
    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner></Banner>
                        <section className="cart">
                            <h2 className="text-center">Корзина</h2>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Название</th>
                                        <th scope="col">Размер</th>
                                        <th scope="col">Кол-во</th>
                                        <th scope="col">Стоимость</th>
                                        <th scope="col">Итого</th>
                                        <th scope="col">Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartJSON.map(o =>
                                        <tr>
                                            <th scope="row">{num += 1}</th>
                                            <td><a onClick={() => getOrderRequest(o.id)}>{o.title}</a></td>
                                            <td>{o.size}</td>
                                            <td>{o.coin}</td>
                                            <td>{`${o.price} руб.`}</td>
                                            <td>{`${o.price * o.coin} руб.`}</td>
                                            <td><button className="btn btn-outline-danger btn-sm" onClick={() => handleDel(o.id)}>Удалить</button></td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td colSpan="5" className="text-right">Общая стоимость</td>

                                        <td>{total} руб.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section className="order">
                            <h2 className="text-center">Оформить заказ</h2>
                            <div className="card" style={divStyle}>
                                <form className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="phone">Телефон</label>
                                        <input className="form-control" id="phone" placeholder="Ваш телефон" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Адрес доставки</label>
                                        <input className="form-control" id="address" placeholder="Адрес доставки" />
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="agreement" />
                                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                                    </div>
                                    <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </Fragment>
    )
}