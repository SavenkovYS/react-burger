import './App.css';

import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route exact path="/" component={BurgerBuilder} />
                    <Route exact path="/orders" component={Orders} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
