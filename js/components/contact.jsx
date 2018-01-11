import React from 'react';

function Details(props) {
    return (
        <div className={'details'}>
            <div className={'icons'}>
                <i className={props.link} aria-hidden="true"></i>
            </div>
            <p>{props.message}</p>
        </div>
    );
}


function Contacts() {
    return (
        <div id={'contacts'}>
            <div id={'hello'}>
                <a name={'contact'}></a>
                <p>Say <b>Hello</b></p>
                <p>Don't be shy, drop us an email and say hello! we are really nice bunch of people</p>
            </div>
            <div id={'details'}>
                <div id={'details-col-1'}>
                    <Details message={"(416)555-0000"} link={"fa fa-mobile fa-2x"}/>
                    <Details message={"@escape"} link={"fa fa-twitter fa-2x"}/>
                    <Details message={"plus.com/escape"} link={"fa fa-google-plus fa-2x"}/>
                </div>
                <div id={'details-col-2'}>
                    <Details message={"hello@escape.pl"} link={"fa fa-envelope-o fa-2x"}/>
                    <Details message={"facebook.com/escape"} link={"fa fa-facebook fa-2x"}/>
                    <Details message={"pinterest.com/escape"} link={"fa fa-pinterest-p fa-2x"}/>
                </div>
            </div>
        </div>
    );
}


class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Your Name*',
            mail: 'Your Email*',
            text: 'Your Message*',
        }
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
    };

    handleChangeMail = (event) => {
        this.setState({
            mail: event.target.value,
        })
    };

    handleChangeText = (event) => {
        this.setState({
            text: event.target.value,
        })
    };


    render() {
        return (
            <div id={"form"}>
                <form>
                    <input type="text" onChange={this.handleChangeName} placeholder={ this.state.name }/>
                    <input type="email" onChange={this.handleChangeMail} placeholder={ this.state.mail }/>
                    <input type="text" onChange={this.handleChangeText} placeholder={ this.state.text }/>
                </form>
            </div>
        )
    }
}

function Footer() {
    return (
        <div id={'footer'}>
            <div id={"line"}></div>
            <p>© 2014 Escape by FreebiesXpress Made in Torrnto</p>
        </div>
    );
}

function Contact() {
    return (
        <div id={'contact'}>
            <div id={"contact-row"}>
                <Contacts/>
                <Form/>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;