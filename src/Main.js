import React, { Fragment, useEffect } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import Hit from './hit';
import Items from './items';

export default function Main(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner></Banner>

            <Hit history={props.history}></Hit>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <Items history={props.history}></Items>
            </section>
            </div>
                </div>
            </main>
            <Footer></Footer>
        </Fragment>
    )
}
