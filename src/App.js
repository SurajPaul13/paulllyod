import {Route, Switch} from 'react-router-dom'

import './App.css'
import Github from './components/Github'
import EachRepo from './components/EachRepo'

const App = () => (
  <Switch>
    <Route exact path="/" component={Github} />
    <Route exact path="/repo/:login/:name" component={EachRepo} />
  </Switch>
)

export default App
