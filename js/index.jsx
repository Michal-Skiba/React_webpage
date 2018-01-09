import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function Hello(props) {
        return <h1>Hello, {props.name} {props.surname}</h1>
    }

    ReactDOM.render(
        <div>
            <Hello name="Kasia" surname="Kowalska" />
            <Hello name="Kasia" surname="Nosowka" />
        </div>,
        document.getElementById('app')
    );
});

