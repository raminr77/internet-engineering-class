import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import {Home} from './views/Home';


export default function Routes() {
    return (
        <Router>
            <Switch>

                    <Route component={Home} path='/' exact={true} />

            </Switch>
        </Router>
    )
}
