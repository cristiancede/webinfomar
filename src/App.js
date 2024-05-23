import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Pagina1 from './Pagina1'
import Navegator from './Navegator'
function App() {
    return (
        <div>
            <Header />
            <Navegator/>
            <Footer />
        </div>
    );
}

export default App;