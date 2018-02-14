import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import TodosContaineer from '../containers/TodosContainer'

export default (
    <Route path='/' component={App}>
        <Route path='/todos' component={TodosContaineer}/>
    </Route>
)