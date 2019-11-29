import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { login } from "./App";
import { Button, Container, Form } from "semantic-ui-react";



class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
            error:""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        login(user).then(res => {
            if(res){
                this.props.history.push(`/home`);
            }
        });
    }

    render() {
        return (
            <div className="loginContainer">
                <Container fluid>
                    {this.state.error}
                <Form onSubmit={this.onSubmit} className="myform">
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="E-mail"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Password</label>
                        <input
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Button color="twitter" type="submit">Submit</Button>
                </Form>
                </Container>
            </div>
        );
    }
}

export default  Login

// if (document.getElementById("login")) {
//     ReactDOM.render(<Login />, document.getElementById("login"));
// }
