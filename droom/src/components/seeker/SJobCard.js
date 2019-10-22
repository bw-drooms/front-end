import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import CardDetails from './MainStreamCard';

const JobCard = props => {
    const { classes } = props;

    return (
        <CardDetails
            image={props.account.jobImg}
            title={props.account.jobTitle}
            subheader={props.account.jobPosition}
            chips={props.account.jobTags}
            discription={props.account.jobDescription}
        />
    );
};

JobCard.propTypes = {
    classes: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
};

const styles = {
    root: {},
};

export default withStyles(styles)(JobCard);
