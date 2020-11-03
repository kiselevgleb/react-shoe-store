import React, { Fragment } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import Hit from './hit';
import Items from './items';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from './Error404';
import Contacts from './Contacts';
import Catalog from './Catalog';
import About from './About';
import ProductInfo from './ProductInfo';
import Cart from './Cart';
export default function Main(props) {

    return (
        <Fragment>
            <Router>
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
            <div className="page">
            <Switch>
            <Route path='/react-shoe-store/build/catalog/:id.html'  component={ProductInfo} />
        <Route path='/react-shoe-store/build/404'  component={Error404} />
        <Route path='/react-shoe-store/build/catalog.html'  component={Catalog} />
        <Route path='/react-shoe-store/build/about.html'  component={About} />
        <Route path='/react-shoe-store/build/contacts.html'  component={Contacts} />
        <Route path='/react-shoe-store/build/cart.html'  component={Cart} />
        <Route exact path='/react-shoe-store/build/'  component={Main} />
        <Route path='/react-shoe-store/build/' component={Error404} />
            </Switch>
          </div>
          </Router>
        </Fragment>
    )
}
