import React, { Fragment, useState } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';
import { getOrderInfoRequest, postCartRequest } from './actions/actionCreators';
export default function Cart(props) {
    const { loading, error, cart } = useSelector(state => state.skills);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [sentBut, setSentBut] = useState(false);
    const [inpTel, setInpTel] = useState(false);
    const [inpAddress, setInpAddress] = useState(false);
    const [inpCheckbox, setInpCheckbox] = useState(false);
    const [middleCheck, setInpMiddleCheck] = useState(false);

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

    let modalWin = {
        'z-index': '9999',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'min-width': '250px',
        'min-height': '100px',
        'padding': '15px',
        'border-radius': '10px',
        'transform': 'translate(-50%, -50%)',
        'background': '#fff',
    };
    let bgModal = {
        'z-index': '9998',
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'top': '0',
        'left': '0',
        'background': 'rgba(0, 0, 0, 0.3)',
    }
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
        props.history.push(`/react-shoe-store/build/cart`);
    };
    const getOrderRequest = id => {
        dispatch(getOrderInfoRequest(id));
        props.history.push(`/react-shoe-store/build/catalog/${id}`);
    };

    const handlePostOrder = evt => {
        evt.preventDefault();
        if (sentBut) {
            let items = cartJSON.map(o => ({ "id": o.id, "price": o.price, "count": o.coin }))
            let data = JSON.stringify({ "owner": { "phone": evt.target.phone.value, "address": evt.target.address.value, }, "items": items })
            dispatch(postCartRequest(data));
            setModal(true);
            localStorage.setItem('orderInfo', JSON.stringify([]));
            setInpMiddleCheck(false);
        } else {
            setInpMiddleCheck(true);
        }
    };
    const closeModal = evt => {
        setModal(false);
        setSentBut(false);
    };

    const checkInput = evt => {
        if (evt.target.id == "phone") {
            if (evt.target.value !== "") {
                setInpTel(true);
            } else {
                setInpTel(false);
            }
        } else if (evt.target.id == "address") {
            if (evt.target.value !== "") {
                setInpAddress(true);
            } else {
                setInpAddress(false);
            }
        } else if (evt.target.id == "agreement") {
            if (evt.target.value !== "") {
                setInpCheckbox(true);
            } else {
                setInpCheckbox(false);
            }
        }
        if (inpTel && inpAddress && inpCheckbox) {
            setSentBut(true);
        } else {
            setSentBut(false);
        }
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
                                            <td>
                                                <a onClick={() => getOrderRequest(o.id)}>{o.title}</a>
                                            </td>

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
                                <form className="card-body" onSubmit={handlePostOrder}>
                                    <div className="form-group">
                                        {!inpTel && middleCheck ? <label htmlFor="phone">Телефон ERROR</label> : <label htmlFor="phone">Телефон </label>}
                                        {/* <label htmlFor="phone">Телефон</label> */}
                                        <input className="form-control" id="phone" placeholder="Ваш телефон" name="phone" onChange={checkInput} />
                                    </div>
                                    <div className="form-group">
                                        {!inpAddress && middleCheck ? <label htmlFor="address">Адрес доставки ERROR</label> : <label htmlFor="address">Адрес доставки </label>}
                                        {/* <label htmlFor="address">Адрес доставки</label> */}
                                        <input className="form-control" id="address" placeholder="Адрес доставки" name="address" onChange={checkInput} />
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="agreement" onChange={checkInput} />
                                        {/* <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label> */}
                                        {!inpCheckbox && middleCheck ? <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки ERROR</label> : <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>}
                                    </div>
                                    <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
            {modal ? <>
                <div className="modalWin" style={modalWin}>
                    <h3>Заказ отправлен!</h3></div>
                <div className="bg" style={bgModal} onClick={closeModal} /></> : <p></p>}
        </Fragment>
    )
}