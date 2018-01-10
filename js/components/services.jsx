import React from 'react';






function Development() {
    return (
        <div id={"development"}>
            <div className={"col-1"}>
                <p>Web <b>Development</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda aut autem dolor praesentium qui saepe? Cum enim est hic, ipsum iste laborum laudantium necessitatibus, numquam obcaecati rerum suscipit veniam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda</p>
            </div>
            <div className={"col-2"}>
                <img src="assets/flow_three.png" alt=""/>
            </div>
        </div>
    );
}

function Branding() {
    return (
        <div id={"branding"}>
            <div className={"col-2"}>
                <img src="assets/user_icon.png" alt=""/>
            </div>
            <div className={"col-1"}>
                <p>Col <b>Branding</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda aut autem dolor praesentium qui saepe? Cum enim est hic, ipsum iste laborum laudantium necessitatibus, numquam obcaecati rerum suscipit veniam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda</p>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <div id={"skills"}>

        </div>
    );
}

function Services() {
    return (
        <div className={"container"}>
            <Development/>
            <Branding/>
            <Skills/>
        </div>
    );
}

export default Services;