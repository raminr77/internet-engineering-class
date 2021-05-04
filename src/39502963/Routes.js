import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import {MojtabaMotevali39502963} from './views/Home';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={MojtabaMotevali39502963} path='/39502963' />
            </Switch>
        </Router>
    )
}
