import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
              <div className={classes.root}>{"This div's text looks like that of a button."}</div>
            </Container>
          </React.Fragment>
        );
    }
}


if (document.getElementById("home")) {
    ReactDOM.render(<Home />, document.getElementById("home"));
}
