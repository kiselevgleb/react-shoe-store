import React, { Fragment, useState, useEffect } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';

export default function Catalog(props) {
    const { items, categories, hits, loading, error, search, orderInfo } = useSelector(state => state.skills);

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }
    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner></Banner>
                        <section class="catalog-item">
                            <h2 class="text-center">{orderInfo.title}</h2>
                            <div class="row">
                                <div class="col-5">
                                    <img src={orderInfo.images[0]} class="img-fluid" alt="" />
                                </div>
                                <div class="col-7">
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Артикул</td>
                                                <td>{orderInfo.sku}</td>
                                            </tr>
                                            <tr>
                                                <td>Производитель</td>
                                                <td>{orderInfo.manufacturer}</td>
                                            </tr>
                                            <tr>
                                                <td>Цвет</td>
                                                <td>{orderInfo.color}</td>
                                            </tr>
                                            <tr>
                                                <td>Материалы</td>
                                                <td>{orderInfo.material}</td>
                                            </tr>
                                            <tr>
                                                <td>Сезон</td>
                                                <td>{orderInfo.season}</td>
                                            </tr>
                                            <tr>
                                                <td>Повод</td>
                                                <td>{orderInfo.reason}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="text-center">
                                        <p>Размеры в наличии:
                                        {orderInfo.sizes.map(o =>
                                            <span class="catalog-item-size">{o.size}</span>)}</p>
                                        <p>Количество: <span class="btn-group btn-group-sm pl-2">
                                            <button class="btn btn-secondary">-</button>
                                            <span class="btn btn-outline-primary">1</span>
                                            <button class="btn btn-secondary">+</button>
                                        </span>
                                        </p>
                                    </div>
                                    <button class="btn btn-danger btn-block btn-lg">В корзину</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </Fragment>
    )
}