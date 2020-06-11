import React from 'react';
// Import Calendar
import {Create, DateField, SimpleForm, TextInput} from 'react-admin';
// Import Datepicker
import Box from '@material-ui/core/Box';
import {NotificationContainer} from "react-notifications";
// in src/posts.js
export const EventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <div id="create-div" style={{width: '100%', height: '100%'}}>
                <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
                    <Box width="30%" bgcolor="white.300">
                        <TextInput required="Please Fill in title"
                                   source="title"/>
                        <TextInput
                            label="city" id="city" source="address.city"/>
                        <TextInput
                            label="street" id="street" source="address.street"/>
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
                    </Box>
                </Box>
            </div>
            <NotificationContainer/>
        </SimpleForm>
    </Create>
);
