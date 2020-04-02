import React from 'react'
import UserInfo from './User'
import Admin from './Admin'
import { BrowserRouter, Route, Link } from 'react-router-dom'


function App(props){
    return(
        <BrowserRouter>
            <div>
                <Link to = '/user'>  </Link> 

                <Route path = '/user' component = {UserInfo} exact = {true}/>

            </div>
        </BrowserRouter>
    )
}

export default App