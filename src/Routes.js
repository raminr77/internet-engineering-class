import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import MohammadAhmadian from './views/39602242/index'

export default function Routes() {
    return (
        <Router>
            <Switch>

             < Route path="/39602242/" component={MohammadAhmadian} />   

            </Switch>
        </Router>
    )
}
