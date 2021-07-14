import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import JavadFarokhi from "./views/39501369/index";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path={'/39501369/'} component={JavadFarokhi}/>
            </Switch>
        </Router>
    )
}
