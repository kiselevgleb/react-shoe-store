import React, { Fragment } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
export default function Error404() {

    return (
        <Fragment>
            <Header></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner></Banner>
                        <section className="top-sales">
                            <h2 className="text-center">Страница не найдена</h2>
                            <p>Извините, такая страница не найдена!</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </Fragment>
    )
}
