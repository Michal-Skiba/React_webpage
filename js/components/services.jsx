import React from 'react';

function Development() {
    return (
        <div id={"development"}>
            <div className="container">
                <div className={"col-1"}>
                    <p>Web <b>Development</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda aut autem dolor praesentium qui saepe? Cum enim est hic, ipsum iste laborum laudantium necessitatibus, numquam obcaecati rerum suscipit veniam!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda</p>
                </div>
                <div className={"col-2"}>
                    <img src="assets/flow_three.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

function Branding() {
    return (
        <div id={"branding"}>
            <div className="container">
                <div className={"col-2"}>
                    <img src="assets/user_icon.png" alt=""/>
                </div>
                <div className={"col-1"}>
                    <p>Col <b>Branding</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda aut autem dolor praesentium qui saepe? Cum enim est hic, ipsum iste laborum laudantium necessitatibus, numquam obcaecati rerum suscipit veniam!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda</p>
                </div>
            </div>
        </div>
    );
}


function SkillsComponent(props){
    return(
        <div className={"skillsComponent"}>
            <div className={"circleSkills"}>
                <i className={props.link} aria-hidden="true"></i>
            </div>
            <div className={"contentSkills"}>
                <p>{props.title}</p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

function Skills() {
    let content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa nesciunt numquam possimus";
    return (
        <div id={"skills"}>
            <div id={"col-1"}>
                <SkillsComponent link={"fa fa-user fa-3x"} title={"Branding & Identity"} content={content}/>
                <SkillsComponent link={"fa fa-mobile fa-3x"} title={"Mobile app development"} content={content}/>
                <SkillsComponent link={"fa fa-star fa-3x"} title={"UI/UX"} content={content}/>
            </div>
            <div id={"col-2"}>
                <SkillsComponent link={"fa fa-desktop fa-2x"} title={"Web & Graphic Design"} content={content}/>
                <SkillsComponent link={"fa fa-video-camera fa-2x"} title={"Animations"} content={content}/>
                <SkillsComponent link={"fa fa-camera fa-2x"} title={"Photography"} content={content}/>
            </div>
        </div>
    );
}

function Services() {
    return (
        <div>
            <Development/>
            <Branding/>
            <Skills/>
        </div>
    );
}

export default Services;