import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import CardDetails from './SCardStream';

const JobCard = props => {
    const { classes } = props;

    return (
        <CardDetails>
        
        </CardDetails>
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
