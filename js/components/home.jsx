import React from 'react';

function  Button() {
    return (
        <div id={"button"}>
            <p>Can you build the website of my dreams ?</p>
            <p>YUP, WE CAN DO THAT.</p>
            <button>Learn More</button>
        </div>
    )
}

function  Link(props) {
    return (
        <li>
            <a href={props.link}>{props.name}</a>
        </li>
    )

}

function Header() {
    return (
        <div id={'header'}>
            <div id={'logo'}>
                <img src="assets/logo.png" alt=""/>
                <p>ESCAPE</p>
            </div>
            <nav>
                <ul>
                    <Link link={"#"} name={"Home"}/>
                    <Link link={"#"} name={"Services"}/>
                    <Link link={"#"} name={"Clients"}/>
                    <Link link={"#"} name={"Team"}/>
                    <Link link={"#"} name={"Contact"}/>
                </ul>
            </nav>
        </div>
    );
}

function Home() {
    return (
        <div id={'home'}>
            <Header/>
            <Button/>
        </div>
    );
}

export default Home;