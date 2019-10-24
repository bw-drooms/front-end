import React from 'react'

//////// Material UI imports /////////////
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      width: 350,
      height: 300,
      backgroundColor:'#fbffd8', 
    },
    title: {
        color: '#233536',
    },
    subtitle: {
      color: '#0bcbc3',
    },
    pos: {
      marginBottom: 12,
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
                <Typography>
                    Skills: {props.skills}
                    {props.social}
                </Typography>
            </CardContent>
        </Card>
    )
}
