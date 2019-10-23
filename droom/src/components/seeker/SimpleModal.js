import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Modal } from '@material-ui/core';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    error: {
        color: 'red',
    },
});

const SimpleModal = props => {
    const { classes } = props;

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={props.onClose}
        >
            <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="h6" id="modal-title">
                    {!!props.title && props.title}
                </Typography>
                <Typography variant="subtitle1" id="simple-modal-description">
                    {!!props.subtitle && props.subtitle}
                </Typography>

                {!!props.getModalContent &&
                    props.open &&
                    props.getModalContent(props)}
                {!!props.error && (
                    <p className={classes.error}>{props.error.message}</p>
                )}
            </div>
        </Modal>
    );
};

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    getModalContent: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    updating: PropTypes.bool,
};

export default withStyles(styles)(SimpleModal);