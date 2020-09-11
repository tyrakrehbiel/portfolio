import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import App from './App';
import * as serviceWorker from './serviceWorker';
import { grey } from '@material-ui/core/colors';

// Font imports 
import 'fontsource-raleway';
import 'fontsource-open-sans';

const fontFamily = ['raleway', 'open sans'].join(',');

const lightgrey = '#F6F6F6';
const green = '#51826F' // accent color
const medgrey = '#272727'

const theme = createMuiTheme({
    palette: {
        background: {
            default: 'white',
        },
        primary: {
            main: lightgrey,
            contrastText: medgrey
        },
        secondary: {
            main: medgrey,
            contrastText: '#FFF'
        },
        divider: 'white',
        // contrastThreshold: 3,
        // tonalOffset: 0.2
    },
    shadows: ["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"],
    typography: {
        fontFamily,
        h1: {
            font: 'Raleway',
            fontSize: '2.25rem',
            letterSpacing: '2px',
            color: green,
        },
        h2: {
            font: 'Raleway',
            fontSize: '1.75rem',
            letterSpacing: '2px',
            color: green,
        },
        h3: {
            font: 'Raleway',
            fontSize: '1.25rem',
            letterSpacing: '2px',
            color: medgrey,
            textTransform: 'uppercase',
            fontWeight: 500,
        },
        body1: {
            font: 'Open Sans',
            fontSize: '1rem',
            color: grey[800],
        },
        subtitle1: {
            font: 'Open Sans',
            fontSize: '0.9rem',
            color: grey[800]
        },
    },
    shape: {
        borderRadius: 2
    },
    overrides: {
        MuiTypography: {
        },
        MuiButton: {
            root: {
                textTransform: 'uppercase',
                letterSpacing: '2px',
            }
        },
        MuiPaper: {
            elevation1: {
                boxShadow:
                    '1px 2px 5px 0 rgba(63,63,68,0.1)'
            }
        }
    }

});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline>
            <Router>
                <App />
            </Router>
        </CssBaseline>
    </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();