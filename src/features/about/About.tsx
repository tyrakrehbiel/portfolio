import * as React from 'react';

import { 
    makeStyles, Theme, createStyles, Box, Typography
} from '@material-ui/core';

import profile_pic from '../../images/profile-pic.jpg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexgrow: 1,
        },
        profile: {
            backgroundColor: theme.palette.primary.main,
            width: "30vw",
            height: "90vh",
            margin: "1%",

        },
        about: {
            // backgroundColor: 'black',
            width: "65vw",
            height: "90vh",
            margin: "1%",
        },
        image: {
            width: '75%',
            borderRadius: theme.shape.borderRadius,
        },
        profileText: {
            // color: 'white',
        },
    }),
);

const About: React.FC = () => {

    const classes = useStyles();
    
    const profileInfo = (
        <>
            <Typography variant="h3" className={classes.profileText}>
                Tyra I'Daya Krehbiel
            </Typography>
            {/* <Typography variant="body1">
                DOB:  12 / 22 / 1998
            </Typography>
            <Typography>
                Hometown: Leesburg, VA
            </Typography> */}
        </>
    )

    const aboutMe = (
        <Typography>
            About Me
        </Typography>
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
                    {profileInfo}
                </Box>
                <Box
                    className={classes.about}
                >
                    {aboutMe}
                    {aboutSite}
                </Box>
            </Box>
    )
}

export default About;