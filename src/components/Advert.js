import React, { Component } from "react";
import LocalAPI from "./../apis/local";

class AdvertView extends Component {
    state = {
        title: "",
        body: "",
        link: ""
    };

    async componentDidMount() {
        const response = await LocalAPI.get("/advert");
        // console.log(response.data[0]);
        this.setState({...response.data.reverse()[0]});
    }

render(){
    // console.log(this.state && this.state.title);
    const{
        title,
        body,
        link
    } = this.state;

    return (
        <div>
            <div><h1>{title}</h1></div>
            <div><p>{body}</p></div>
            <div><i>{link}</i></div>
        </div>
    );
}};

export default AdvertView;