import React from 'react'

//////// Material UI imports /////////////
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      width: 380,
      height: 300,
      backgroundColor:'#fbffd8', 
      margin: 20,
    },
    title: {
        color: '#233536',
    },
    subtitle: {
      color: '#0bcbc3',
      display: 'block',
      marginBottom: 12,
      fontSize: '1.5rem',
    },
    pos: {
      marginBottom: 12,
    },
    content: {
        textAlign: 'left',
        marginBottom: 5,
    },
  });
  

export default function CApplicantCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent  key={props.id}>
                {/* applicant info to be displayed  */}
                <Typography className={classes.title} variant="h4" gutterBottom>
                    {props.name}
                </Typography>
                <Typography className={classes.subtitle} variant="headline">
                    {props.profession}
                </Typography>
                <Typography className={classes.content}>
                    Skills: {props.skills}
                </Typography>
                <Typography className={classes.content}>
                    {props.social}
                </Typography>
            </CardContent>
        </Card>
    )
}
