import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import Hit from './components/Hit';
import Items from './components/Items';

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
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
