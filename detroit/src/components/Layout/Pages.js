import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Layout from './Layout';


export default function Pages() {
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" Component={Layout} />
                    <Route path='/contact' Component={Contact} />
                </Routes>
            </Router>
        </div>
    )
}
