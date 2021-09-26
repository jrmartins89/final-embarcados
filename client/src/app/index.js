import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { LampadasList, LampadaInsert, LampadaUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/lampadas/list" exact component={LampadasList} />
                <Route path="/lampadas/create" exact component={LampadaInsert} />
                <Route
                    path="/lampadas/update/:id"
                    exact
                    component={LampadaUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
