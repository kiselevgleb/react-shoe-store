import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Main from './Main';
import Error404 from './components/Error404';
import Contacts from './components/Contacts';
import Catalog from './components/Catalog';
import About from './components/About';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { getCartDataRequest } from './actions/actionCreators';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

function App(props) {
  const customHistory = createBrowserHistory();

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getCartDataRequest('ref'));
  }, )

  return (
    <Router history={customHistory}>
      <Switch>
        {/* <Route path='/catalog/:id'  component={ProductInfo} />
        <Route path='/404'  component={Error404} />
        <Route path='/catalog'  component={Catalog} />
        <Route path='/about'  component={About} />
        <Route path='/contacts'  component={Contacts} />
        <Route path='/cart'  component={Cart} />
        <Route exact path='/'  component={Main} />
        <Route path='/' component={Error404} /> */}

        <Route path='/react-shoe-store/build/catalog/:id'  component={ProductInfo} />
        <Route path='/react-shoe-store/build/404'  component={Error404} />
        <Route path='/react-shoe-store/build/catalog'  component={Catalog} />
        <Route path='/react-shoe-store/build/about'  component={About} />
        <Route path='/react-shoe-store/build/contacts'  component={Contacts} />
        <Route path='/react-shoe-store/build/cart'  component={Cart} />
        <Route exact path='/react-shoe-store/build/'  component={Main} />
        <Route path='/react-shoe-store/build/' component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;