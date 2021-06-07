import React from 'react'
import Login from './Login'
import Task from './Task'
import { Switch,Route } from 'react-router-dom'
export default function App(){
  return(<main>
    <Switch>
  <Route exact path="/" ><Login /> </Route>
<Route exact path="/todo"><Task /></Route>
  </Switch>
  </main>)
}