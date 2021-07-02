import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import AmirHodaiyan from "./views/39602649/index";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path={'/39602649/'} component={AmirHodaiyan}/>
            </Switch>
        </Router>
    )
}
