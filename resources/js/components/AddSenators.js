import React, { Component } from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
// import { withRouter } from 'react-router-dom'
import { addsenator } from "../insertFunctions";

import { InputFile } from "semantic-ui-react-input-file";


// import {
//     DateInput,
//     TimeInput,
//     DateTimeInput,
//     DatesRangeInput
// } from "semantic-ui-calendar-react";

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
            party:"",
            senstate: ""
        };

        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            newRecord.append("political_party", this.state.party),
            newRecord.append("sen_email", this.state.semail),
            newRecord.append("sen_pic", this.state.file, this.state.imgname);

        addsenator(newRecord).then(res => {
            if (res) {
                // console.log(res.data);
            }
        });
    }

    render() {
        const { loading, value, imgname, file, fileURL } = this.state;
        const ngDistricts = [
            {
                key: "Abia North",
                value: "Abia North",
                text: "Abia North"
            },
            {
                key: "Abia Central",
                value: "Abia Central",
                text: "Abia Central"
            },
            {
                key: "Abia South",
                value: "Abia South",
                text: "Abia South"
            },
            { key: "Akwa Ibom North West", value: "Akwa Ibom North West", text: "Akwa Ibom West" },
            { key: "Akwa Ibom North East", value: "Akwa Ibom North East", text: "Akwa Ibom East" },
            { key: "Akwa Ibom North South", value: "Akwa Ibom North South", text: "Akwa Ibom South" },

            {
                key: "Adamawa North",
                value: "Adamawa North",
                text: "Adamawa North"
            },
            {
                key: "Adamawa South",
                value: "Adamawa South",
                text: "Adamawa South"
            },
            {
                key: "Adamawa Central",
                value: "Adamawa Central",
                text: "Adamawa Central"
            },
            {
                key: "Anambra North",
                value: "Anambra North",
                text: "Anambra North"
            },
            {
                key: "Anambra South",
                value: "Anambra South",
                text: "Anambra South"
            },
            {
                key: "Anambra Central",
                value: "Anambra Central",
                text: "Anambra Central"
            },
            {
                key: "Bauchi South",
                value: "Bauchi South",
                text: "Bauchi South"
            },
            {
                key: "Bauchi Central",
                value: "Bauchi Central",
                text: "Bauchi Central"
            },
            {
                key: "Bauchi North",
                value: "Bauchi North",
                text: "Bauchi North"
            },
            {
                key: "Bayelsa East",
                value: "Bayelsa East",
                text: "Bayelsa East"
            },
            {
                key: "Bayelsa Central",
                value: "Bayelsa Central",
                text: "Bayelsa Central"
            },
            {
                key: "Bayelsa West",
                value: "Bayelsa West",
                text: "Bayelsa West"
            },
            {
                key: "Benue North East",
                value: "Benue North East",
                text: "Benue  North East"
            },
            {
                key: "Benue South",
                value: "Benue South",
                text: "Benue South"
            },
            {
                key: "Benue North West",
                value: "Benue North West",
                text: "Benue North West"
            },
            {
                key: "Borno North",
                value: "Borno North",
                text: "Borno North"
            },
            {
                key: "Borno Central",
                value: "Borno Central",
                text: "Borno Central"
            },
            {
                key: "Borno South",
                value: "Borno South",
                text: "Borno South"
            },
            {
                key: "Cross River North",
                value: "Cross River North",
                text: "Cross River North"
            },
            {
                key: "Cross River Central",
                value: "Cross River Central",
                text: "Cross River Central"
            },
            {
                key: "Cross River South",
                value: "Cross River South",
                text: "Cross River South"
            },
            {
                key: "Delta North",
                value: "Delta North",
                text: "Delta North"
            },
            {
                key: "Delta Central",
                value: "Delta Central",
                text: "Delta Central"
            },
            {
                key: "Delta South",
                value: "Delta South",
                text: "Delta South"
            },
            {
                key: "Ebonyi North",
                value: "Ebonyi North",
                text: "Ebonyi North"
            },
            {
                key: "Ebonyi Central",
                value: "Ebonyi Central",
                text: "Ebonyi Central"
            },
            {
                key: "Ebonyi South",
                value: "Ebonyi South",
                text: "Ebonyi South"
            },
            {
                key: "Edo North",
                value: "Edo North",
                text: "Edo North"
            },
            {
                key: "Edo Central",
                value: "Edo Central",
                text: "Edo Central"
            },
            {
                key: "Edo South",
                value: "Edo South",
                text: "Edo South"
            },
            {
                key: "Ekiti North",
                value: "Ekiti North",
                text: "Ekiti North"
            },
            {
                key: "Ekiti Central",
                value: "Ekiti Central",
                text: "Ekiti Central"
            },
            {
                key: "Ekiti South",
                value: "Ekiti South",
                text: "Ekiti South"
            },
            {
                key: "Enugu East",
                value: "Enugu East",
                text: "Enugu East"
            },
            {
                key: "Enugu West",
                value: "Enugu West",
                text: "Enugu West"
            },
            {
                key: "Enugu North",
                value: "Enugu North",
                text: "Enugu North"
            },
            {
                key: "Gombe North",
                value: "Gombe North",
                text: "Gombe North"
            },
            {
                key: "Gombe Central",
                value: "Gombe Central",
                text: "Gombe Central"
            },
            {
                key: "Gombe South",
                value: "Gombe South",
                text: "Gombe South"
            },
            {
                key: "Imo East",
                value: "Imo East",
                text: "Imo East"
            },
            {
                key: "Imo West",
                value: "Imo West",
                text: "Imo West"
            },
            {
                key: "Imo North",
                value: "Imo North",
                text: "Imo North"
            },
            {
                key: "Jigawa South-West",
                value: "Jigawa South-West",
                text: "Jigawa South-West"
            },
            {
                key: "Jigawa North-East",
                value: "Jigawa North-East",
                text: "Jigawa North-East"
            },
            {
                key: "Jigawa North-West",
                value: "Jigawa North-West",
                text: "Jigawa North-West"
            },
            {
                key: "Kaduna North",
                value: "Kaduna North",
                text: "Kaduna North"
            },
            {
                key: "Kaduna Central",
                value: "Kaduna Central",
                text: "Kaduna Central"
            },
            {
                key: "Kaduna South",
                value: "Kaduna South",
                text: "Kaduna South"
            },
            {
                key: "Kano North",
                value: "Kano North",
                text: "Kano North"
            },
            {
                key: "Kano Central",
                value: "Kano Central",
                text: "Kano Central"
            },
            {
                key: "Kano South",
                value: "Kano South",
                text: "Kano South"
            },
            {
                key: "Kastina North",
                value: "Kastina North",
                text: "Kastina North"
            },
            {
                key: "Kastina Central",
                value: "Kastina Central",
                text: "Kastina Central"
            },
            {
                key: "Kastina South",
                value: "Kastina South",
                text: "Kastina South"
            },
            {
                key: "Kebbi North",
                value: "Kebbi North",
                text: "Kebbi North"
            },
            {
                key: "Kebbi Central",
                value: "Kebbi Central",
                text: "Kebbi Central"
            },
            {
                key: "Kebbi South",
                value: "Kebbi South",
                text: "Kebbi South"
            },
            {
                key: "Kogi East",
                value: "Kogi East",
                text: "Kogi East"
            },
            {
                key: "Kogi Central",
                value: "Kogi Central",
                text: "Kogi Central"
            },
            {
                key: "Kogi West",
                value: "Kogi West",
                text: "Kogi West"
            },
            {
                key: "Kwara North",
                value: "Kwara North",
                text: "Kwara North"
            },
            {
                key: "Kwara Central",
                value: "Kwara Central",
                text: "Kwara Central"
            },
            {
                key: "Kwara South",
                value: "Kwara South",
                text: "Kwara South"
            },
            {
                key: "Lagos East",
                value: "Lagos East",
                text: "Lagos East"
            },
            {
                key: "Lagos Central",
                value: "Lagos Central",
                text: "Lagos Central"
            },
            {
                key: "Lagos West",
                value: "Lagos West",
                text: "Lagos West"
            },
            {
                key: "Nassarawa South",
                value: "Nassarawa South",
                text: "Nassarawa South"
            },
            {
                key: "Nassarawa West",
                value: "Nassarawa West",
                text: "Nassarawa West"
            },
            {
                key: "Nassarawa North",
                value: "Nassarawa North",
                text: "Nassarawa North"
            },
            {
                key: "Niger South",
                value: "Niger South",
                text: "Niger South"
            },
            {
                key: "Niger East",
                value: "Niger East",
                text: "Niger East"
            },
            {
                key: "Niger North",
                value: "Niger North",
                text: "Niger North"
            },
            {
                key: "Ogun East",
                value: "Ogun East",
                text: "Ogun East"
            },
            {
                key: "Ogun Central",
                value: "Ogun Central",
                text: "Ogun Central"
            },
            {
                key: "Ogun West",
                value: "Ogun West",
                text: "Ogun West"
            },
            {
                key: "Ondo North",
                value: "Ondo North",
                text: "Ondo North"
            },
            {
                key: "Ondo Central",
                value: "Ondo Central",
                text: "Ondo Central"
            },
            {
                key: "Ondo South",
                value: "Ondo South",
                text: "Ondo South"
            },

            {
                key: "Osun East",
                value: "Osun East",
                text: "Osun East"
            },
            {
                key: "Osun Central",
                value: "Osun Central",
                text: "Osun Central"
            },
            {
                key: "Osun West",
                value: "Osun West",
                text: "Osun West"
            },
            {
                key: "Oyo North",
                value: "Oyo North",
                text: "Oyo North"
            },
            {
                key: "Oyo Central",
                value: "Oyo Central",
                text: "Oyo Central"
            },
            {
                key: "Oyo South",
                value: "Oyo South",
                text: "Oyo South"
            },
            {
                key: "Plateau North",
                value: "Plateau North",
                text: "Plateau North"
            },
            {
                key: "Plateau Central",
                value: "Plateau Central",
                text: "Plateau Central"
            },
            {
                key: "Plateau South",
                value: "Plateau South",
                text: "Plateau South"
            },
            {
                key: "Rivers East",
                value: "Rivers East",
                text: "Rivers East"
            },
            {
                key: "Rivers West",
                value: "Rivers West",
                text: "Rivers West"
            },
            {
                key: "Rivers South East",
                value: "Rivers South East",
                text: "Rivers South East"
            },
            {
                key: "Sokoto North",
                value: "Sokoto North",
                text: "Sokoto North"
            },
            {
                key: "Sokoto East",
                value: "Sokoto East",
                text: "Sokoto East"
            },
            {
                key: "Sokoto South",
                value: "Sokoto South",
                text: "Sokoto South"
            },
            {
                key: "Taraba North",
                value: "Taraba North",
                text: "Taraba North"
            },
            {
                key: "Taraba Central",
                value: "Taraba Central",
                text: "Taraba Central"
            },
            {
                key: "Taraba South",
                value: "Taraba South",
                text: "Taraba South"
            },
            {
                key: "Yobe North",
                value: "Yobe North",
                text: "Yobe North"
            },
            {
                key: "Yobe East",
                value: "Yobe East",
                text: "Yobe East"
            },
            {
                key: "Yobe South",
                value: "Yobe South",
                text: "Yobe South"
            },
            {
                key: "Zamfara North",
                value: "Zamfara North",
                text: "Zamfara North"
            },
            {
                key: "Zamfara Central",
                value: "Zamfara Central",
                text: "Zamfara Central"
            },
            {
                key: "Zamfara West",
                value: "Zamfara West",
                text: "Zamfara West"
            },
            {
                key: "Federal Capital Territory",
                value: "Federal Capital Territory",
                text: "Federal Capital Territory"
            },
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

                                {/* <Grid>
                                    <Grid.Column floated="left" width={6}>
                                    <label>Senator's Tenure</label>
                                <DatesRangeInput
                                    clearable
                                    name="electyear"
                                    placeholder="Senator's Tenure"
                                    value={this.state.electyear}
                                    onChange={this.handleChangeDate}
                                />
                                </Grid.Column> */}

                                {/* <Grid.Column floated="left" width={6}> */}
                                <label>Political Part</label>
                                <input
                                    placeholder="Political party"
                                    name="party"
                                    value={this.state.party}
                                    onChange={this.onChange}
                                />
                                {/* </Grid.Column>
                                </Grid> */}
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
