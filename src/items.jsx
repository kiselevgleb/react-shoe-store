import React, { Fragment, useState, useEffect } from 'react';
import { getItemsRequest, getCategoriesRequest, getItemsCatRequest, getAddItemsRequest } from './actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';

export default function Items() {
    const { items, categories, hits, loading, error, search } = useSelector(state => state.skills);

    const [cat, setCat] = useState("");
    const [coin, setCoin] = useState(6);
    const dispatch = useDispatch();
    // let cat = "";
    // let coin = 6;
    useEffect(() => {
        dispatch(getItemsRequest());
        dispatch(getCategoriesRequest());
    }, [dispatch])

    const getProducts = id => {
        console.log(id)
        setCoin(6);
        setCat(id);
        dispatch(getItemsCatRequest(id));
    };

    const loadItems = () => {
        console.log(cat)
        dispatch(getAddItemsRequest(coin, cat));
        setCoin(coin+6);
    };
    return (
        <Fragment>
            <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={() => dispatch(getItemsRequest())}>Все</a>
                </li>
                {categories.map(o =>
                    <li className="nav-item">
                        <a className="nav-link active" href="#" onClick={() => getProducts(o.id)}>{o.title}</a>
                    </li>)}
            </ul>
            <div class="row">
                {items.map(o =>
                    <div className="col-4">
                        <div className="card catalog-item-card">
                            <img src={o.images[0]} className="card-img-top img-fluid" alt={o.title} />
                            <div className="card-body">
                                <p className="card-text">{o.title}</p>
                                <p className="card-text">{`${o.price} руб.`}</p>
                                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                            </div>
                        </div>
                    </div>)}
            </div>
            <div class="text-center">
                <button class="btn btn-outline-primary" onClick={() => loadItems()}>Загрузить ещё</button>
            </div>
        </Fragment>
    )
}
