import * as React from 'react';

import { Link} from 'react-router-dom';

import { AppBar, Toolbar, Button, Typography, makeStyles,  Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            borderRadius: theme.shape.borderRadius,
            marginLeft: '10px',
            marginRight: '10px',
        },
    }),
);

const Header: React.FC = () => {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <Typography variant="h2" className={classes.title}>
                        Tyra Krehbiel
                    </Typography>
                    <Button className={classes.button} color="inherit" component={Link} to="/portfolio/about">
                        About
                    </Button>
                    <Button className={classes.button} color="inherit" component={Link} to="/portfolio/resume">
                        Resume
                    </Button>
                    <Button className={classes.button} color="inherit" component={Link} to="/portfolio/projects">
                        Projects
                    </Button>
                    <Button className={classes.button} color="inherit" component={Link} to="/portfolio/art">
                        Art
                    </Button>
                    <Button className={classes.button} color="inherit" component={Link} to="/portfolio/contact">
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;