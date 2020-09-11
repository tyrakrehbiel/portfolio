import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexgrow: 1,
        },
        
        title: {
            padding: "40px",
            textAlign: "center",
        },
    })
);

const Contact: React.FC = () => {

    const classes = useStyles();

    return(
        <Typography variant="h1" className={classes.title}>Contact Page | Coming Soon!</Typography>
    )
}

export default Contact;