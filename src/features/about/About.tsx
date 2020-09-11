import * as React from 'react';

import { 
    makeStyles, Theme, createStyles, Box, Typography, Divider
} from '@material-ui/core';

import profile_pic from '../../images/profile-pic.jpg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexgrow: 1,
        },
        profile: {
            borderRadius: theme.shape.borderRadius,
            width: "32vw",
            height: "90vh",
            margin: "10px",

        },
        about: {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.primary.main,
            width: "65vw",
            height: "90vh",
            margin: "10px",
            padding: "10px",
        },
        image: {
            width: '65%',
            borderRadius: theme.shape.borderRadius,
        },
        aboutMe: {
            paddingLeft: "20px",
            paddingRight: "20px",
            textAlign: "justify", 
        },
    }),
);

const About: React.FC = () => {

    const classes = useStyles();

    const aboutMe = (
        <div className={classes.aboutMe}>
            <Typography variant="body1">
                Hello, I'm Tyra! I am currently enrolled as a fourth year at the University of Virginia, 
                expecting to graduate in May 2021. I will be receiving a B.A. in Interdisciplinary Computer Science, 
                as well as a B.A. in Studio Art, with a concentration in painting. I have personal and professional 
                experience in full stack software development and particular interest in UI/UX design. Take a look at my 
                Resume and Projects pages to learn more!
            </Typography>
        </div>
    );
    
    const aboutSite = (
        <Typography>
            About This Site
        </Typography>
    );

    return(
            <Box
                className={classes.root}
                display="flex"
                flexWrap="wrap"
                flexDirection="row"
                alignItems="stretch"
            >
                <Box
                    className={classes.profile}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-around"
                >
                    <img className={classes.image} alt="Tyra Krehbiel" src={profile_pic} />
                    <Typography variant="h3">
                        About Me <hr/>
                    </Typography>
                    {aboutMe}
                </Box>
                <Box
                    className={classes.about}
                >
                    {aboutSite}
                </Box>
            </Box>
    )
}

export default About;