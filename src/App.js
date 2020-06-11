import React from 'react';
import {Admin, EditGuesser, ListGuesser, Resource, ShowGuesser} from 'react-admin';
import dataProvider from './api/dataProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import 'react-dates/lib/css/_datepicker.css';
import EventCreate from "./comp/EventCreate";

import {NotificationContainer} from "react-notifications";
const theme = createMuiTheme({
  palette: {
   primary: {
     // light: will be calculated from palette.primary.main,
     main: '#ff4400',
     // dark: will be calculated from palette.primary.main,
     // contrastText: will be calculated to contrast with palette.primary.main
   },
   secondary: {
     light: '#0066ff',
     main: '#0044ff',
     // dark: will be calculated from palette.secondary.main,
     contrastText: '#ffcc00',
   },
   // Used by `getContrastText()` to maximize the contrast between
   // the background and the text.
   contrastThreshold: 3,
   // Used by the functions below to shift a color's luminance by approximately
   // two indexes within its tonal palette.
   // E.g., shift from Red 500 to Red 300 or Red 700.
   tonalOffset: 0.2,
 },
});

//const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (

    <Admin theme={theme} dataProvider={dataProvider}>
        <Resource name="user" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
        <Resource name="event" create={EventCreate} list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
        <Resource name="booking" list={ListGuesser} edit={EditGuesser} show={ShowGuesser}/>
    <NotificationContainer/>
    </Admin>

);


export default App
