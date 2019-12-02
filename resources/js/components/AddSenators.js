import React, { Component } from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
// import { withRouter } from 'react-router-dom'
import { InputFile } from "semantic-ui-react-input-file";
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from "semantic-ui-calendar-react";

import {
    Button,
    Container,
    Image,
    Grid,
    Select,
    Form
} from "semantic-ui-react";

class AddSenators extends Component {
    state = { loading: false };

    constructor() {
        super();
        this.state = {
            sname: "",
            sphone: "",
            semail: "",
            // district: "",
            imgname: "",
            zone: "",
            electyear: "",
            party:"",
            senstate: ""
        };

        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleChangeZone = this.handleChangeZone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onImage = this.onImage.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.fileInput = React.createRef();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onImage(e) {
        this.setState({
            file: e.target.files[0],
            imgname: e.target.files[0].name,
            fileURL: URL.createObjectURL(e.target.files[0])
        });
    }

    handleChange = (e, { value }) => this.setState({ value });

    handleChangeDate = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    };

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        //Instantiating formdata to newRecord
        let newRecord = new FormData();

        // Loadash timer
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);

        /*
        Appending all
            FormData to newRecord to be passed into addSenators function
        */

              newRecord.append("sen_name", this.state.sname),
            newRecord.append("sen_phone", this.state.sphone),
            newRecord.append("district", this.state.value),
            newRecord.append("sen_zone", this.state.zone),
            newRecord.append("state", this.state.senstate),
            newRecord.append("year_elected", this.state.electyear),
            newRecord.append("political_party", this.state.party),
            newRecord.append("sen_email", this.state.semail),
            newRecord.append("sen_pic", this.state.file, this.state.imgname);

        addsenator(newRecord).then(res => {
            if (res.data) {
                console.log(res.data.success);
            }
        });
    }

    render() {
        const { loading, value, imgname, file, fileURL } = this.state;
        const ngDistricts = [
            {
                key: "Abia Central",
                value: "Abia Central",
                text: "Abia Central"
            },
            { key: "Abia North", value: "Abia North", text: "Abia North" },
            { key: "Abia South", value: "Abia South", text: "Abia South" },
            {
                key: "Adamawa Central",
                value: "Adamawa Central",
                text: "Adamawa Central"
            },
            {
                key: "Adamawa North",
                value: "Adamawa North",
                text: "Adamawa North"
            }
        ];

        // const ngzones = [
        //     {
        //         key: "North Central",
        //         value2: "North Central",
        //         text: "North Central"
        //     },
        //     { key: "North East", value2: "North East", text: "North East" },
        //     { key: "North West", value2: "North West", text: "North West" },
        //     { key: "South East", value2: "South East", text: "South East" },
        //     { key: "South South", value2: "South South", text: "South South" },
        //     { key: "South West", value2: "South West", text: "South West" }
        // ];
        return (
            <div>
                <div className="regContainer">
                    <Container fluid>
                        <Form onSubmit={this.onSubmit} className="myform">
                            <Form.Field required>
                                <label>Name</label>
                                <input
                                    placeholder="Name"
                                    name="sname"
                                    value={this.state.sname}
                                    onChange={this.onChange}
                                />
                            </Form.Field>

                            <Form.Field required>
                                <label>State</label>
                                <input
                                    placeholder="State"
                                    name="senstate"
                                    value={this.state.senstate}
                                    onChange={this.onChange}
                                />
                            </Form.Field>

                            <Form.Field required>
                                <label>Geo ZOne</label>
                                <input
                                    placeholder="Geo Zone"
                                    name="zone"
                                    value={this.state.zone}
                                    onChange={this.onChange}
                                />
                            </Form.Field>

                            <Form.Field required>

                                <Grid>
                                    <Grid.Column floated="left" width={6}>
                                    <label>Senator's Tenure</label>
                                <DatesRangeInput
                                    clearable
                                    name="electyear"
                                    placeholder="Senator's Tenure"
                                    value={this.state.electyear}
                                    onChange={this.handleChangeDate}
                                />
                                </Grid.Column>

                                <Grid.Column floated="left" width={6}>
                                <label>Political Part</label>
                                <input
                                    placeholder="Political party"
                                    name="party"
                                    value={this.state.party}
                                    onChange={this.onChange}
                                />
                                </Grid.Column>
                                </Grid>
                            </Form.Field>

                            <Form.Field required>
                                <label>Email</label>
                                <input
                                    placeholder="E-mail"
                                    name="semail"
                                    value={this.state.semail}
                                    onChange={this.onChange}
                                />
                            </Form.Field>

                            <Form.Field required>
                                <label>Image</label>
                                <Grid>
                                    <Grid.Column floated="left" width={6}>
                                        <InputFile
                                            button={{ ref: this.fileInput }}
                                            input={{
                                                id: "input-control-id",
                                                onChange: this.onImage
                                            }}
                                        />
                                    </Grid.Column>
                                    <Grid.Column floated="right" width={6}>
                                        <Image src={this.state.fileURL} />
                                        {this.state.imgname}
                                    </Grid.Column>
                                </Grid>
                            </Form.Field>

                            <Form.Field >
                                <label>Phone</label>
                                <input
                                    placeholder="Mobile Number"
                                    name="sphone"
                                    value={this.state.sphone}
                                    onChange={this.onChange}
                                />
                            </Form.Field>

                            <Form.Field
                                required
                                control={Select}
                                name="district"
                                label="Senatorial District"
                                options={ngDistricts}
                                placeholder="Senatorial District"
                                value={value}
                                onChange={this.handleChange}
                            />

                            <Button
                                color="twitter"
                                disabled={
                                    !this.state.sname ||
                                    !this.state.senstate ||
                                    !this.state.value ||
                                    !this.state.sphone ||
                                    !this.state.semail ||
                                    !this.state.zone
                                }
                                loading={loading}
                                type="submit"
                            >Submit</Button>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
}
export default AddSenators;
if (document.getElementById("senators")) {
    ReactDOM.render(<AddSenators />, document.getElementById("senators"));
}
