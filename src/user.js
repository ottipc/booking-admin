import React from 'react';
import {Button, Drawer} from '@material-ui/core';
import {
    BooleanField,
    BooleanInput,
    ChipField,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    EmailField,
    List,
    ReferenceField,
    ReferenceManyField,
    SimpleForm,
    SingleFieldList,
    TextField,
    TextInput
} from 'react-admin';
// in src/posts.js
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import $ from "jquery";

const validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        //flexGrow: 1,
    }, heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const validateUserCreation = (values) => {
    //alert("Validating....")
    const errors = {};
    if (!values.name) {
        errors.name = ['The name is required'];
    }

    if (!values.email) {
        errors.email = ['The Email is required'];
    }
    //if (!validateEmail(values.email)) {
    //    errors.email = ['The Email is wrong format'];
    //}
    return errors
};


export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm validate={validateUserCreation}>
            <TextInput required="The name is required" source="name"/>
            <TextInput required="The Email is required" label="Email" source="email" type="email"/>
            <TextInput label="Firstname" source="first_name"/>
            <TextInput label="Lastname" source="last_name"/>
            <DateInput source="date_of_birth"/>
            <TextInput label="City" source="city"/>
            <BooleanInput source="activated"/>
        </SimpleForm>
    </Create>
);

export default function CreateDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    return (
        <div>
            {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant="contained" color="primary" data-class="MuiChip-label" data-animation="true" data-toggle="tooltip" title="Klick to Quick Create user"  onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        <UserCreate {...props}/>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
