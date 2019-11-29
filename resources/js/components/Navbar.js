import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem("usertoken");
        this.props.history.push("/");
    }
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

         const loginRegLink = (

            <div>
                <Menu  fixed='top' borderless size="large" className="Navbar">
                    <Menu.Item
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="messages"
                        active={activeItem === "messages"}
                        onClick={this.handleItemClick}
                    />

                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button primary>
                                <Link to="/Login">Add Senators</Link>
                            </Button>
                            <Button primary>
                                <Link to="/Register">Add Reps</Link>
                            </Button>
                            <Button primary>
                                <Link to="/Register">Add LocalReps</Link>
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );

        const userLink = (
            <div>
                <Menu size="small">
                    <Menu.Item
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="messages"
                        active={activeItem === "messages"}
                        onClick={this.handleItemClick}
                    />

                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button onClick={this.logOut.bind(this)} primary></Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );

        return (
            <div>
            {localStorage.userToken ? userLink :loginRegLink}
            </div>
        )
    }
}

export default Navbar;
