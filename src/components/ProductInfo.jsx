import React, { Fragment, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';
import { getCartDataRequest } from '../actions/actionCreators';

export default function ProductInfo(props) {
    const { loading, error, orderInfo, cartData } = useSelector(state => state.skills);
    const [cartBut, setCartBut] = useState(false);
    const [orderSize, setOrderSize] = useState();
    const [orderCoin, setOrderCoin] = useState(1);
    const dispatch = useDispatch();

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }

    const handleButSize = (event) => {
        if (cartBut) {
            setCartBut(false);
            event.target.className = 'catalog-item-size';
            event.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].innerText = 1;
        } else {
            setCartBut(true);
            setOrderSize(event.target.innerText);
            event.target.className = 'catalog-item-size selected';
        }
    };
    const handleButCoin = (event) => {
        if (event.target.previousSibling !== null) {
            if (Number(event.target.previousSibling.innerText) < 10) {
                event.target.previousSibling.innerText = Number(event.target.previousSibling.innerText) + 1;
                setOrderCoin(event.target.previousSibling.innerText);
            }
        }
        else {
            if (Number(event.target.nextSibling.innerText) > 1) {
                event.target.nextSibling.innerText = Number(event.target.nextSibling.innerText) - 1;
                setOrderCoin(event.target.nextSibling.innerText);
            }
        }
    };
    const handleCart = () => {
        let mas = [];
        if (cartData == '[]') {
            const data = [{ title: orderInfo.title, size: orderSize, coin: orderCoin, price: orderInfo.price, id: orderInfo.id }];
            dispatch(getCartDataRequest(data));
        } else {
            mas = JSON.parse(cartData);
            mas.map((o) => {
                if (o.id === orderInfo.id && o.size === orderSize) {
                    o.coin += 1;
                } else {
                    mas.push({ title: orderInfo.title, size: orderSize, coin: orderCoin, price: orderInfo.price, id: orderInfo.id });
                }
            });
            dispatch(getCartDataRequest(mas));
        }
        // props.history.push(`/cart`);
        props.history.push(`/react-shoe-store/build/cart`);
    };
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
                                    {orderInfo.images[0] !== undefined ? <img src={orderInfo.images[0]} class="img-fluid" alt="pic" /> : <img />}
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
                                            o.avalible && <span class="catalog-item-size" onClick={handleButSize}>{o.size}</span>)}</p>
                                        {orderInfo.sizes.length !== 0 && <p>Количество: <span class="btn-group btn-group-sm pl-2">
                                            {cartBut ? <button class="btn btn-secondary" onClick={handleButCoin}>-</button> : <button class="btn btn-secondary">-</button>}
                                            <span class="btn btn-outline-primary">1</span>
                                            {cartBut ? <button class="btn btn-secondary" onClick={handleButCoin}>+</button> : <button class="btn btn-secondary">+</button>}
                                        </span>
                                        </p>}
                                    </div>
                                    {cartBut && <button class="btn btn-danger btn-block btn-lg" onClick={handleCart}>В корзину</button>}
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