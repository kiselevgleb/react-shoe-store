import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Main from './Main';
import Error404 from './Error404';
import Contacts from './Contacts';
import Catalog from './Catalog';
import About from './About';
import ProductInfo from './ProductInfo';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

function App(props) {
  const customHistory = createBrowserHistory();
  return (
    <Router history={customHistory}>
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
    </Router>
  );
}

export default App;