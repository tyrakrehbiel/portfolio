import * as React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexgrow: 1,
        },
        proj: {
            margin: "10px",
            width: "45%",
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor: "red"
        },
        title: {
            padding: "40px",
            textAlign: "center",
        },
    })
);

const Projects: React.FC = () => {

    const classes = useStyles();

    return(
        <>
            <Typography variant="h1" className={classes.title}>Projects | Coming Soon!</Typography>
            {/* <Box
                className={classes.root}
                display="flex"
                flexWrap="wrap"
                flexDirection="row"
                justifyContent="center"
            >
                <Box 
                    className={classes.proj}
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                >
                    <Typography variant="body1">test1</Typography>
                </Box>
                <Box 
                    className={classes.proj}
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                >
                    <Typography variant="body1">test2</Typography>
                </Box>            
                <Box 
                    className={classes.proj}
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                >
                    <Typography variant="body1">test3</Typography>
                </Box>            
                <Box 
                    className={classes.proj}
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                >
                <Typography variant="body1">test4</Typography>

                </Box>
                <Box 
                    className={classes.proj}
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                >
                    <Typography variant="body1">test1</Typography>
                </Box>
                <Box 
                    className={classes.proj}
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                >
                    <Typography variant="body1">test2</Typography>
                </Box>            
                <Box 
                    className={classes.proj}
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                >
                    <Typography variant="body1">test3</Typography>
                </Box>            
                <Box 
                    className={classes.proj}
                    display="flex"
                    flexWrap="wrap"
                    flexDirection="row"
                >
                <Typography variant="body1">test4</Typography>

                </Box>
            </Box> */}
       </>
    )
}

export default Projects;