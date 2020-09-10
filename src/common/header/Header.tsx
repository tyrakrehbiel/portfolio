import * as React from 'react';

import { Link} from 'react-router-dom';

import { AppBar, Toolbar, Button, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    bar: {
        backgroundColor: 'transparent',
    },
    title: {
        flexGrow: 1
    },
    button: {
        marginLeft: '10px',
        marginRight: '10px',
    }
});

const Header: React.FC = () => {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <Typography variant="h6" className={classes.title}>
                        Tyra Krehbiel
                    </Typography>
                    <Button className={classes.button} color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button className={classes.button} color="inherit" component={Link} to="/resume">
                        Resume
                    </Button>
                    <Button className={classes.button} color="inherit" component={Link} to="/projects">
                        Projects
                    </Button>
                    <Button className={classes.button} color="inherit" component={Link} to="/art">
                        Art
                    </Button>
                    <Button className={classes.button} color="inherit" component={Link} to="/contact">
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;