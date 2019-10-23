import React from 'react';
import { withStyles } from '@material-ui/core';
import InputText from './InputText';
import SimpleModal from './SimpleModal';
import SeekerProfile from './SProfile';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { updateAccountInfo } from '../../utils/actions/accountActions';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class SeekerProfile extends Component {
    state = {
        SeekerProfile: false,
        profile: {},
        profileType: '',
    };



componentDidMount() {
    
let profileType = this.props.match.params.accountType;
    let profileOwner = false;
    let accountType = '';
    if (this.props.account.hasOwnProperty('company_name')) {
        accountType = 'company';
    }

    if (
        parseInt(id) === this.props.account.id &&
        profileType === accountType
    ) {
        profileOwner = true;
    }

    let url = `/jobseekers/${id}`;
    if (profileType === 'company') {
        url = `/jobs/${id}`;
    } else if (profileType === 'company') {
        url = `/companies/${id}`;
    }

    if (profileType === 'user' && profileOwner) {
        url = `/jobseekers/info`;
    }

    requestWithToken(this.props.token)
        .get(url)
        .then(res => {
            //debugger;
            if (accountType === 'company' && profileType === 'job') {
                if (res.data.company_id === this.props.account.id) {
                    profileOwner = true;
                }
            }
            this.setState({
                profile: res.data,
                myProfile: profileOwner,
            });
        })
        .catch(err => {
            //debugger;
            console.log(err.message);
        });
}
render() {
    //debugger;
    const { classes } = this.props;
    return (
        <div className={classes.root}>
     
        {this.state.profileType === 'user' ? 
        (<SeekerProfile
                profile={this.state.profile}
                myProfile={this.state.myProfile}
            />) : ('')}
    
        </div>
        );
    }}
    SeekerProfile.propTypes = {};

    function mapStateToProps(state) {
        return {
            token: state.appReducer.token,
            account: state.accountReducer.account,
        };
    }
    
    export default connect(mapStateToProps,{})(withStyles(styles)(SeekerProfile));