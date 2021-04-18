import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import RaminRezaei from './views/39601620/index'


export default function Routes() {
    return (
        <Router>
            <Switch>

                <Route path="/39601620/" component={RaminRezaei} />

            </Switch>
        </Router>
    )
}
