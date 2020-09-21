import { createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexgrow: 1,
        },
        paper: {
            backgroundImage: `url(${'../../images/landing.jpg'})`,
        },
        title: {
            padding: "40px",
            textAlign: "center",
        },
    })
);

const Landing: React.FC = () => {

    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <Typography variant="h1" className={classes.title}>Landing Page | Coming Soon!</Typography>
        </Paper>
    )
}

export default Landing;