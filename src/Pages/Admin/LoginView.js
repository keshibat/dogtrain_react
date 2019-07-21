import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";

class LoginView extends Component {

    state = {
        username: "",
        password: "",
        error: null
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/login`, { username, password });
            this.props.onLoginFormSubmit(response.data.token, () => {
                this.props.history.push("/admin");
            });
        } catch(error) {
            console.log(error)
            this.setState({error})
        }
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    }

    render() {
        const {
            username,
            password
        } = this.state;

      return (
        <>
            <h1>Admin Login</h1>
            <form onSubmit={this.onFormSubmit}>
                <div className="field">
                <label className="label">Username</label>
                <div className="control">
                <input className="input" type="text" name="username" value={username} onChange={(event) => this.onInputChange("username", event)} />
                </div>
                </div>

                <div className="field">
                <label className="label">Password</label>
                <div className="control">
                <input className="input" type="password" name="password" value={password} onChange={(event) => this.onInputChange("password", event)} />
                </div>
                </div>

                <div className="field is-centered">
                <div className="formButton control">
                <input className="button is-primary" type="submit" value="Login" />
                </div>
                </div>
            </form>
        </>
      );
    }
  }
  
export default LoginView