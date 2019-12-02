import React, { Component } from "react";
import _ from 'lodash'
import ReactDOM from "react-dom";
// import { withRouter } from 'react-router-dom'

import { register } from "./UserFunctions";
import { Button, Container, Icon, Message, Form } from "semantic-ui-react";

class Register extends Component {
    state = { loading: false }
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({ loading: true })
        let form_data = new FormData();
        setTimeout(() => {
          this.setState({ loading: false })
        }, 1000)

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            // form_data.append('title', this.state.title);
            // form_data.append('content', this.state.content);
        };

        register(newUser).then(res => {
            if (res) {
                this.props.history.push("/Home");
            }
        });
    }

    render() {
        const { loading } = this.state
        return (
            <div>

              <div className="regContainer">
                <Container fluid>

                    {/* {this.state.name} */}

                <Form onSubmit={this.onSubmit} className="myform">
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </Form.Field>
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
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        {this.state.password.length  > 0 && this.state.password.length > 0}
                    </Form.Field>
                    <Button color="twitter"  loading={loading} type="submit">Submit</Button>
                </Form>

                </Container>

            </div>
            </div>
        );
    }
}

export default Register
if (document.getElementById('register')) {
    ReactDOM.render(<Register/>, document.getElementById('register'));
}
