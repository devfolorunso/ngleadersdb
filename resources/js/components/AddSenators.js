import React, { Component } from "react";
import _ from 'lodash';
import ReactDOM from "react-dom";
// import { withRouter } from 'react-router-dom'

import { addsenator } from "../insertFunctions";
import { Button, Container, Select, Form } from "semantic-ui-react";

class AddSenators extends Component {
    state = { loading: false }
    constructor() {
        super();
        this.state = {
            sen_name: "",
            sen_phone:"",
            sen_zone:"",
            sen_email:"",
            sen_pic:null
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onImage = this.onImage.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onImage(e){
        this.setState({ sen_pic: e.target.files[0]})
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        let formData = new FormData();
        this.setState({ loading: true })


        setTimeout(() => {
          this.setState({ loading: false })
        }, 1000)

        const newRecord = {
            sen_name:formData.append('sen_phone', this.state.sen_name),
            sen_phone:formData.append('sen_phone', this.state.sen_phone),
            sen_zone:formData.append('sen_zone', this.state.sen_zone),
            sen_email:formData.append('sen_email', this.state.sen_email),
            sen_pic:formData.append('sen_pic', this.state.sen_pic, this.state.sen_pic.name),
        };

        addsenator(newRecord).then(res => {
            if (res) {
                    
            }
        });
    }

    render() {
        const { loading } = this.state
        const districtOptions = [
            { key: 'Abia Central', value: 'Abia Central', text: 'Abia Central' },
            { key: 'Abia North', value: 'Abia North', text: 'Abia North' },
            { key: 'Abia South', value: 'Abia South', text: 'Abia South' },
            { key: 'Adamawa Central', value: 'Adamawa Central', text: 'Adamawa Central' },
            { key: 'Adamawa North', value: 'Adamawa North', text: 'Adamawa North' },
            { key: 'ad', value: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', text: 'Australia' },
            { key: 'at', value: 'at', text: 'Austria' },
            { key: 'az', value: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', text: 'Benin' },
        ]
        return (
            <div>

              <div className="regContainer">
                <Container fluid>
                <Form onSubmit={this.onSubmit} className="myform">
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Name"
                            name="sen_name"
                            value={this.state.sen_name}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="E-mail"
                            name="sen_email"
                            value={this.state.sen_email}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone</label>
                        <input
                            placeholder="Phone"
                            name="sen_phone"
                            value={this.state.sen_phone}
                            onChange={this.onChange}
                        />
                    </Form.Field>

                    <Form.Field
                            control={Select}
                            name="sen_zone"
                            label='Senatorial District'
                            options={districtOptions}
                            placeholder='Senatorial District'
                            value={this.state.sen_zone}
                            onChange={this.onChange}


                        />

                    <Form.Field>
                        <label>Phone</label>
                        <input
                        type="file"
                            placeholder="Phone"
                            name="sen_pic"
                            value={this.state.sen_pic}
                            onChange={this.onImage}
                        />
                    </Form.Field>

                          {/* <Button
                            content="Choose File"
                            labelPosition="left"
                            icon="file"
                            name="sen_pic"
                            onImage={this.onImage}
                            onClick={() => this.fileInputRef.current.click()}
                        /> */}

                    <Button color="twitter"  loading={loading} type="submit">Submit</Button>
                </Form>

                </Container>

            </div>
            </div>
        );
    }
}
export default AddSenators
if (document.getElementById('senators')) {
    ReactDOM.render(<AddSenators/>, document.getElementById('senators'));
}
