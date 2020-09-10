import * as React from 'react';

import { Link} from 'react-router-dom';

import { AppBar, Toolbar, Button, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
});

const Header: React.FC = () => {

    const classes = useStyles();

    const preventDefault = (event: { preventDefault: () => any; }) => event.preventDefault();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Tyra Krehbiel
                    </Typography>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                    <Button color="inherit" component={Link} to="/projects">Projects</Button>
                    <Button color="inherit" component={Link} to="/resume">Resume</Button>
                    <Button color="inherit" component={Link} to="/art">Art</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;