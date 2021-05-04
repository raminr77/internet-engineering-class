import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import MahdiGhorbani from './views/39601955/index'

export default function Routes() {
    return (
        <Router>
            <Switch>

                <Route path='/39601955/' component={MahdiGhorbani}/>

            </Switch>
        </Router>
    )
}
