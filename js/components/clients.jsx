import React from 'react';

function Title() {
    return (
        <div id={"title"}>
            <a name={'client'}>
                <p>Awesone <b>Clients</b></p>
                <p>See what nice things our clients said about us</p>
            </a>
        </div>
    );
}
function Clients() {
    return (
        <div id={"clients"}>
            <div id={"clientsRow1"}>
                <div className={"circleClient"}>
                </div>
                <div className={"talk"}>
                    <div id="triangleLeft" className={"triangle"}> </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, debitis dolor doloremque doloribus, eius eligendi enim error in"</p>
                    <p>-Bart Thomson, Founder Of Rainel</p>
                </div>
            </div>
            <div id={"clientsRow2"}>
                <div className={"circleClient"}>
                </div>
                <div className={"talk"}>
                    <div id="triangleRight" className={"triangle"}> </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, debitis dolor doloremque doloribus, eius eligendi enim error in"</p>
                    <p>-Jamie Richardson, Founder Of Cocoa Media</p>
                </div>
                <div className={"circleClient display"}>
                </div>
            </div>
        </div>
    );
}
function Logos() {
    return (
        <div id="logos">
            <img src="assets/envato_icon.png" alt=""/>
            <img src="assets/wordpress_icon.png" alt=""/>
            <img src="assets/tuts_icon.png" alt=""/>
            <img src="assets/microlancer_icon.png" alt=""/>
        </div>
    );
}

function Client() {
    return (
        <div id={'client'}>
            <Title/>
            <Clients/>
            <Logos/>
        </div>
    );
}

export default Client;