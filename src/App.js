import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Main from './Main';
import Error404 from './Error404';
import Contacts from './Contacts';
import Catalog from './Catalog';
import About from './About';
import ProductInfo from './ProductInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

function App(props) {
  const customHistory = createBrowserHistory();
  return (
    <Router history={customHistory}>
      <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/404' exact component={Error404} />
      <Route path='/catalog.html' component={Catalog} />
      <Route path='/about.html' component={About} />
      <Route path='/contacts.html' component={Contacts} />
      <Route path='/catalog/:id.html' component={ProductInfo} />
      </Switch>
    </Router>
  );
}

export default App;