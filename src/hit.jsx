import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHitRequest } from './actions/actionCreators';

export default function Hit() {
    const { items, categories, hits, loading, error} = useSelector(state => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHitRequest());
    }, [dispatch])

    console.log(hits)
    if (hits==undefined||hits.length==0) {
        return null;
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
                                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                            </div>
                        </div>
                    </div>)}
                </div>
            </section>
        </Fragment>
    )
}
