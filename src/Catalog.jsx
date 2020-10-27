import React, { Fragment, useState, useEffect  } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import ProductsCatalog from './productsCatalog';
import Items from './items';

export default function Catalog() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ITEMS_URL}`)
            .then(response => response.json())
            .then(rates => {
                setProducts(rates);
            });
    })

    return (
        <Fragment>
            <Header></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner></Banner>
                        <section className="catalog">
                            <h2 className="text-center">Каталог</h2>
                            <form className="catalog-search-form form-inline">
                                <input className="form-control" placeholder="Поиск" />
                            </form>
                            <Items></Items>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </Fragment>
    )
}