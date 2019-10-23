import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';
import SimpleModal from './SimpleModal';
import InputText from './InputText';
import { updateAccountInfo } from '../../utils/actions/accountActions';
import { connect } from 'react-redux';
import accountReducer from '../../utils/reducers/accountReducer'
import {getAccountInfo} from '../../utils/actions/accountActions'
//         \"jobseeker_name\": \"Batlyn Stewart\",
//         \"location\": \"Austin, TX\",
//         \"general_profession\": \"Full Stack Software Engineer\",
//         \"description\": \"Black belt in Karate\",
//         \"linkedIn\": \"\",
//         \"selected\": 0
//     }





class SeekerProfile extends React.Component {
state = {
    modal: false,
};
componentDidMount() {
    this.props.getAccountInfo()
}

handleEditClick = () => {
    this.setState(state => {
        return { modal: !state.modal };
    });
};

getModalContent = props => {
    console.log(this.getModalContent);
    return (
        
        <form onSubmit={props.onSubmit}>
            <InputText
                label={'Name'}
                value={props.jobseekers.jobseeker_name}
            />
            <InputText label={'Location'} value={props.jobseekers.location} />
            <InputText
                label={'Profession'}
                value={props.jobseekers.general_profession}
            />
            <InputText
                label={'Interests'}
                value={props.jobseekers.description}
            />
            <InputText
                label={'LinkedIn'}
                value={props.jobseekers.linkedIn}
            />
            <Button type={'submit'} text={'Submit'} />
        </form>
    );
};

onSubmit = e => {
    e.preventDefault();
    //debugger;
    let profile = {};
    let errors = [];
    for (let i = 0; i < e.target.length; i++) {
        if (!!e.target[i].name) {
            profile[e.target[i].name] = e.target[i].value;

            if (e.target[i].value === '') {
                errors.push(e.target[i].name);
            }
        }
    }

    this.props.updateAccountInfo(profile, this.props.token, 'user');
    this.setState({ modal: false });
};

render() {
    const { classes } = this.props;
   console.log(this.props);
    return (
        <div>
            {/* <h1>{this.props.jobseeker_name}</h1>
            <h2>{this.props.location}</h2>
            <h3>{this.props.general_profession}</h3>
            <h3>{this.props.linkedIn}</h3>
            <h4>{this.props.description}</h4> */}
            {this.props.myProfile ? (
                <Button
                    onClick={this.handleEditClick}
                    text={'Edit Profile'}/>) : ('')}

            <SimpleModal
                open={this.state.modal}
                onClose={this.handleEditClick}
                getModalContent={this.getModalContent}
                onSubmit={this.onSubmit}
                title={'Account Information'}
                subtitle={'Please fill out the form below.'}
                profile={this.props.profile}
            />
        </div>
    );
}
}

SeekerProfile.propTypes = {
classes: PropTypes.object.isRequired,
};

const styles = {
root: {
    height: '100%',
    width: '100%',
},
};

const mapStateToProps = (state) => {
return ({
    classes:state.accountReducer
}
)
}

export default connect(mapStateToProps,{updateAccountInfo,getAccountInfo})(withStyles(styles)(SeekerProfile));
