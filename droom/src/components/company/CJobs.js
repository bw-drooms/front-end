import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getJobData, editJobData, deleteJobPost } from '../../utils/actions'
import CNewJob from './CNewJob'

// START ---- Material UI - Card Styling

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import droom from '../../images/droomLogo_dark.png'
// MUI - Grid Styling
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    fontSize: 7
  },
  media: {
    height: 140,
  },

  // MUI - Grid Styling
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// END ---- Material UI - Card Styling

const CJobs = (props) => {
  console.log('single job props', props)
  console.log('singlejobs', props.jobs)

  const classes = useStyles();// MUI Styling classes

  const [editing, setEditing] = useState(false)
  const [jobToEdit, setJobToEdit] = useState({ location: props.jobs.location, position: props.jobs.position, pay_range: props.jobs.pay_range, description: props.jobs.description });
//writes editing modal and form data to edit
const handleChange = e => {
  setJobToEdit({ ...jobToEdit, [e.target.name]: e.target.value })
}
//handles input change for job data edit
const edit = e => {
  e.preventDefault()
  props.editJobData(jobToEdit)
}
//handles refresh for jobs on NewJobPost
useEffect(() => {
  props.getJobData()
}, [])
//use effect conditional for job data
useEffect(() => {
  if(props.editJobData) {
    setJobToEdit({
      id: props.jobs.id,
      location: props.jobs.location, 
      position: props.jobs.position, 
      pay_range: props.jobs.pay_range, 
      description: props.jobs.description 
    })
  } else {
    setEditing(false)
  }
}, [editing])
//conditional render for is fetch data
if (!props.jobs) {
  return <div>Jobs are loading...</div>
}
return (
  <>
  <div>
    Positions Offered
    <div className={classes.root}>
      <Grid container spacing={3}>
      {props.jobs.map(jobs => (
        <Grid item xs={3}>
        <Card className={classes.card} id={jobs.id}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image={droom}
          title="Company Logo"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {jobs.position} @ <t /> {jobs.company_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p>Location: {jobs.location}</p>
           <p> Pay: ${jobs.pay_range}</p>
          <p>Description  :  <br />{jobs.description}</p>

          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <div className='button-row'>
            <Button key={jobs.id} onClick={() => setJobToEdit(jobs.id)}>edit</Button>
            <Button onCLick={props.deleteJob}>x</Button>
          </div>
          </CardActions>
        </Card>
        </Grid>
      ))}
      <div className='form-on-edit'>
        {editing && (
        <form onSubmit={edit}>
          <legend>Change Job Details</legend>
          <label>
            Location: <input
              type='text'
              name='location'
              value={props.jobs.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Position: <input
              type='text'
              name='position'
              value={props.jobs.position}
              onChange={handleChange}
            />
          </label>
          <label>
            Salary Offer: <input
              type='text'
              name='pay_range'
              value={props.jobs.pay_range}
              onChange={handleChange}
            />
          </label>
          <label>
            Description: <input
              type='text'
              name='description'
              value={props.jobs.descrition}
              onChange={handleChange}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
         )}
      </div>
      </Grid>
  </div >
    </div>
      
      <Paper className={classes.paper}>
      <button>Post a Position</button>
      <CNewJob /></Paper>
</>
)
}

const mapStateToProps = state => {
  console.log('C Jobs Post state', state)
  return {
    jobs: state.companyReducer.jobs || [],
    isFetching: state.companyReducer.isFetching,
    isUpdating: state.companyReducer.isUpdating,
    error: state.companyReducer.error
  }
}

export default connect(mapStateToProps, { getJobData, editJobData, deleteJobPost })(CJobs)
