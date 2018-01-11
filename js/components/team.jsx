import React from 'react';

function Text() {
    return (
        <div id={"amazingTeam"}>
            <a name={'team'}></a>
            <p>Amazing <b>Team</b></p>
            <p>These wonderful people make work enjoyable</p>
        </div>
    );
}

function Pint(){
    return(
        <div className={"little-circ"} id={"pint"}>
            <i className={"fa fa-pinterest-p"} aria-hidden="true"></i>
        </div>
    )
}

function Face() {
    return(
        <div className={"little-circ"} id={"face"}>
            <i className={"fa fa-facebook"} aria-hidden="true"></i>
        </div>
    )
}

function Google() {
    return(
        <div className={"little-circ"} id={"google"}>
            <i className={"fa fa-google-plus"} aria-hidden="true"></i>
        </div>
    )
}

function Twitter() {
    return(
        <div className={"little-circ"} id={"twitter"}>
            <i className ={"fa fa-twitter"} aria-hidden="true"></i>
        </div>
    )
}

function Persons() {
    return (
        <div id={"persons"}>
            <div id={"person-col-1"} className={"persons-all"}>
                <div className={"person-circle"}>
                </div>
                <p>Kimberly Thomson</p>
                <p>Marketer</p>
                <div className={"person-hover"}>
                    <Twitter/>
                    <Face/>
                    <Google/>
                </div>
            </div>
            <div id={"person-col-2"} className={"persons-all"}>
                <div className={"person-circle"}></div>
                    <p>Rico Massimo</p>
                    <p>Coder</p>
                <div className={"person-hover"}>
                    <Twitter/>
                    <Face/>
                    <Pint/>
                </div>
            </div>
            <div id={"person-col-3"} className={"persons-all"}>
                <div className={"person-circle"}>
                </div>
                <p>Uku Mason</p>
                <p>Graphic Designer</p>
                <div className={"person-hover"}>
                    <Face/>
                    <Pint/>
                </div>
            </div>
        </div>
    );
}

function BottomText() {
    return (
        <div id={"person_bottom"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem beatae et ipsa maxime mollitia neque nesciunt possimus, voluptatum. Enim est</p>
        </div>
    );
}


function Team() {
    return (
        <div id={"team"}>
            <Text/>
            <Persons/>
            <BottomText/>
        </div>
    );
}

export default Team;