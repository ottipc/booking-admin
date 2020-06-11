import React from 'react';
// Import Datepicker
import moment from 'moment';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import {DateField, SimpleForm, TextInput} from "react-admin";
import Box from "@material-ui/core/Box";
import myApiService from "../api/apiService";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});
export default class EventCreate extends React.Component {
    constructor(props, context) {
        var record = props.record, resource = props.resource;
        console.log("********************* CONSTRUCTING CALENDAR ****************************************")
        console.log(props)
        super(props, context);
        this.state = {
            date: moment().startOf('year'),
            startDate: moment().startOf('year'),
            endDate: moment().startOf('year'),
            street: "",
            city: "",
            zip: "",
            description: '',
            last_modified_by: '',
            created_by: ""
        }
        this.onSave = this.onSave.bind(this);
    }

    onSave() {
        console.log("**********************On Save******************************8")

    };


    handleSubmit(e) {
        //e.preventDefault();
        function buildPayload() {
            let JsonObj = {
                description: this.state.description,
                end: this.state.endDate,
                start: this.state.startDate,
                title: this.state.title,
                address: {street: this.state.street, city: this.state.city, zip: this.state.zip},
                last_modified_by: this.state.last_modified_by,
                created_by: this.state.created_by,
                created: this.state.created
            }
            return JsonObj;
        };
        if (this.state.title) {
            let payLoad = buildPayload.call(this);
            myApiService.createEvent(JSON.stringify(payLoad));
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("********************* DERIVED STATE FROM PROPS CALENDAR****************************************");
        console.log(props);
        console.log(state);
        return null;
        return {
            props: props,
            state: state
        };
    }

    componentDidUpdate(prevProps, prevState, snapshotRestoreStateCode) {
        console.log(JSON.stringify(this.this))

        if ((JSON.stringify(this.state.startDate) !== JSON.stringify(this.state.oldStartDate) ||
            (JSON.stringify(this.state.endDate) !== JSON.stringify(this.state.oldEndDate)))) {
            this.setState({
                    oldEndDate: this.state.endDate,
                    oldStartDate: this.state.startDate,
                    startDate: this.state.startDate,
                    endDate: this.state.endDate
                }
            )

        }
    }

    handleChange(event) {
        let stateProps = {};
        if (this) {
            console.log("Cahnging : " + event.target.id);
            stateProps[event.target.id] = event.target.value;
            this.setState(stateProps);
        }
    }

    render() {
        console.log("********************* RENDERING CALENDAR ****************************************")
        console.log(this.state)

        let toDate = this.state.startDate == null ? null : this.state.startDate.toDate().toString();
        let endDate = this.state.endDate == null ? null : this.state.endDate.toDate().toString();
        console.log("Start Date : " + toDate)
        console.log("End Date : " + endDate)

        return (
            <div>
                <SimpleForm>
                    <div id="create-div" style={{width: '100%', height: '100%'}}>
                        <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                            <Box width="30%" bgcolor="white.300">
                                <TextInput required="Please Fill in title"
                                           source="title"/>
                                <TextInput
                                    label="city" id="city" source="city"/>
                                <TextInput
                                    label="street" id="street" source="street"/>
                                <DateField
                                    label="Created"
                                    id="created" source="created"/>
                                <TextInput //onChange={this.handleChange}
                                    label="Created By" id="created_by" source="created_by"/>
                                <TextInput id="description"
                                           label="Description" source="description"/>
                                <TextInput label="price"
                                           id="price" source="price"/>
                            </Box>
                            <Box width="70%" bgcolor="white.300">
                                <DateRangePicker
                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                    startDateId="start_date_id" // PropTypes.string.isRequired,
                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                    endDateId="end_date_id" // PropTypes.string.isRequired,
                                    onDatesChange={({startDate, endDate}) => this.setState({
                                        startDate,
                                        endDate
                                    })} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => this.setState({focusedInput})} // PropTypes.func.isRequired,
                                />
                            </Box>
                        </Box>
                    </div>
                </SimpleForm>
            </div>
        );
    }
}
