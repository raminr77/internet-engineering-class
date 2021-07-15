import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import ArmanAzarnik from './views/39400988/index'

export default function Routes() {
    return (
        <Router>
            <Switch>

                <Route path="/39400988/" component={ArmanAzarnik}/>

            </Switch>
        </Router>
    )
}
