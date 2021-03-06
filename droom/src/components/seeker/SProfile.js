import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, Card } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import SimpleModal from './SimpleModal';
import InputText from './InputText';
import { updateAccountInfo } from '../../utils/actions/accountActions';
import { connect } from 'react-redux';
import accountReducer from '../../utils/reducers/accountReducer'
import {getAccountInfo} from '../../utils/actions/accountActions'






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
                value={this.props.jobseeker_name}
            />
            <InputText label={'Location'} value={props.jobseekers.location} />
            <InputText
                label={'Profession'}
                value={this.props.general_profession}
            />
            <InputText
                label={'Interests'}
                value={this.props.description}
            />
            <InputText
                label={'LinkedIn'}
                value={this.props.linkedIn}
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

    this.props.updateAccountInfo(profile,'user');
    this.setState({ modal: false });
};

render() {
    const { classes } = this.props;
   console.log(this.props);
    return (
        <div className="user" key={this.props.id}>
            <Card>
            <h1> {`${this.props.jobseeker_name}`}</h1>
            <h2>{`Location:${this.props.location}`}</h2>
            <h3>{`General Occupation:${this.props.general_profession}`}</h3>
            <h3>{`Linkedin:${this.props.linkedIn}`}</h3>
            <h4>{`About Me: ${this.props.description}`}</h4>
            </Card>
            {/* {this.props.myProfile ? (
                  <Fab color="secondary" aria-label="edit" className={classes.fab} onClick={this.handleEditClick}>
                  <EditIcon />
                </Fab> ) : ('')}
                {/* <Button
                    onClick={this.handleEditClick}
                    text={'Edit Profile'}/> */} */}

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
    console.log(state)
return ({
    classes:state.accountReducer.account
})
}
const materialStyles = connect(mapStateToProps,{updateAccountInfo,getAccountInfo})(SeekerProfile);
export default withStyles(styles)(materialStyles)
