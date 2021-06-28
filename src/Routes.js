import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NeginGhasemi from './views/39601418/index'

export default function Routes() {
    return (
        <Router>
            <Switch>

                <Route path="/39601418/" component={NeginGhasemi} />

            </Switch>
        </Router>
    )
}
