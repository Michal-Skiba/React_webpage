import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Services from './components/services.jsx';
import Clients from './components/Clients.jsx';
import Team from './components/team.jsx';
import Contact from './components/contact.jsx';

ReactDOM.render(
    <div id={"body"}>
        <Home/>
        <Services/>
        <Clients/>
        <Team/>
        <Contact/>
    </div>,
    document.getElementById('app')
);
/*
Niezapomnij o dodaniu linków w menu !
<Contact/>
*/
