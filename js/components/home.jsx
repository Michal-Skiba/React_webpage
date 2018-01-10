import React from 'react';

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
            <img src="assets/logo.png" alt=""/>
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
        </div>
    );
}

export default Home;