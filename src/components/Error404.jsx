import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';
export default function Error404(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
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
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
