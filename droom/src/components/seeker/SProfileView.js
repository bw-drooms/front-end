import React from 'react';
import { withStyles } from '@material-ui/core';
import InputText from './InputText';
import SimpleModal from './SimpleModal';
import SeekerProfile from './SProfile';
import { updateAccountInfo } from '../../utils/actions/accountActions';
import { connect } from 'react-redux';

class SeekerProfile extends Component {
    state = {
        SeekerProfile: false,
        profile: {},
        profileType: '',
    };



componentDidMount() {
    //debugger;
    let id = this.props.match.params.id;
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
                profileType,
            });
        })
        .catch(err => {
            //debugger;
            console.log(err.message);
        });
}