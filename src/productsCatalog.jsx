import React, { Fragment, useState, useEffect } from 'react';

export default function ProductsCatalog() {
    const [categories, setcCategories] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_CATEGORIES_URL}`)
            .then(response => response.json()
            )
            .then(rates => {
                setcCategories(rates);
            });
    }
    )

    if (setcCategories == undefined || setcCategories.length == 0) {
        return null;
    }


    return (
        <Fragment>
            <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                        <a className="nav-link active" href="#" >Все</a>
                    </li>
                {categories.map(o =>
                    <li className="nav-item">
                        <a className="nav-link active" href="#" >{o.title}</a>
                    </li>)}
            </ul>
        </Fragment>
    )
}
