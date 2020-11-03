import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderInfoRequest, getHitRequest } from './actions/actionCreators';
import Loader from 'react-loader';

export default function Hit(props) {
    const { items, categories, hits, loading, error, orderInfo} = useSelector(state => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHitRequest());
    }, [dispatch])

    if (hits==undefined||hits.length==0) {
        return null;
    }

    const getOrderRequest = id => {
        console.log(id)
        dispatch(getOrderInfoRequest(id));
        props.history.push(`/react-shoe-store/build/catalog/${id}.html`);
    };

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }
    
    return (
        <Fragment>
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <div className="row">
                {hits.map(o => 
                    <div className="col-4">
                        <div className="card">
                            <img src={o.images[0]} className="card-img-top img-fluid" alt={o.title} />
                            <div className="card-body">
                                <p className="card-text">{o.title}</p>
                                <p className="card-text">{`${o.price} руб.`}</p>
                                <a className="btn btn-outline-primary" onClick={() => getOrderRequest(o.id)}>Заказать</a>

                            </div>
                        </div>
                    </div>)}
                </div>
            </section>
        </Fragment>
    )
}
