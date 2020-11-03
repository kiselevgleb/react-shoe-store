import React, { Fragment, useState, useEffect } from 'react';

export default function ProductsCatalog() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_CATEGORIES_URL}`)
            .then(response => response.json()
            )
            .then(rates => {
                setCategories(rates);
            });
    },[categories] )

    if (setCategories === undefined || setCategories.length === 0) {
        return null;
    }


    return (
        <Fragment>
            <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                        <button className="nav-link active" >Все</button>
                    </li>
                {categories.map(o =>
                    <li className="nav-item">
                        <button className="nav-link active" >{o.title}</button>
                    </li>)}
            </ul>
        </Fragment>
    )
}
