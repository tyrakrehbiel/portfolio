import * as React from 'react';

import { 
    makeStyles, Theme, createStyles, Box, Typography, Button, Link
} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import CloudIcon from '@material-ui/icons/Cloud';

import profile_pic from '../../images/profile-pic.jpg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexgrow: 1,
        },
        profile: {
            borderRadius: theme.shape.borderRadius,
            width: "35vw",
            height: "90vh",

        },
        about: {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.primary.main,
            width: "65vw",
            height: "90vh",
            marginTop: "10px",
            padding: "20px",
            paddingLeft: "40px",
            paddingRight: "40px",
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
        title: {
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "10px",
        },
        button: {
            textAlign: "center",
            marginTop: "2%",
            marginBottom: "2%",
        },
        icon: {
            textAlign: "center",
            marginTop: "5%",
            marginBottom: "5%",
        },
        link: {
            color: theme.palette.primary.dark,
        },
    }),
);

const About: React.FC = () => {

    const classes = useStyles();

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
                    justifyContent="space-evenly"
                >
                    <img className={classes.image} alt="Tyra Krehbiel" src={profile_pic} />
                    <Typography variant="h3">
                        About Me <hr/>
                    </Typography>
                    <Typography className={classes.aboutMe} variant="body1">
                        Hello, I'm Tyra! I am currently enrolled as a fourth year at the University of Virginia, 
                        expecting to graduate in May 2021. I will be receiving a B.A. in Interdisciplinary Computer Science, 
                        as well as a B.A. in Studio Art, with a concentration in painting. I have personal and professional 
                        experience in full stack software development and particular interest in UI/UX design.
                    </Typography>
                    <Button 
                        className={classes.button} 
                        href="https://drive.google.com/file/d/1VgRKUaGTuHmbUUHF70ssOA-uLmdC_KMq/view?usp=sharing" 
                        color="inherit"
                        variant="outlined"
                    >
                        View My Resume
                    </Button>
                </Box>
                <Box
                    className={classes.about}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    // justifyContent="space-around"
                >
                    <Typography variant="h1" className={classes.title}>
                        About This Site
                    </Typography>
                    <Typography variant="subtitle1">
                        Simple. Light. Modern. Intuitive.
                    </Typography>
                    <SettingsIcon className={classes.icon}/>
                    <Typography variant="body1">
                        This portfolio site was created using the React library, primarily in Typescript, HTML, and CSS. <br/> Deployment was
                        handled through ___________. You can view the repository here for a closer look:
                    </Typography>
                    <Button 
                        className={classes.button} 
                        href="https://github.com/tyrakrehbiel/tkrehbielportfolio" 
                        color="inherit"
                        variant="outlined"
                    >
                        GitHub
                    </Button>
                    <Typography variant="body1">
                        Please feel free to explore my site, view my&nbsp; 
                        <Link className={classes.link} href="https://drive.google.com/file/d/1VgRKUaGTuHmbUUHF70ssOA-uLmdC_KMq/view?usp=sharing">resume</Link>, 
                        coding&nbsp; <Link className={classes.link} href="/projects">projects</Link>, 
                        and&nbsp; <Link className={classes.link} href="/artwork">artwork</Link>, 
                        <br/> 
                        or even get in&nbsp; <Link className={classes.link} href="/contact">contact</Link>&nbsp;
                        with me if you'd like to know more!
                    </Typography>
                    <CloudIcon className={classes.icon}/>
                </Box>
            </Box>
    )
}

export default About;