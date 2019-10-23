componentDidMount() {
    //debugger;
    let id = this.props.match.params.id;
    let profileType = this.props.match.params.accountType;
    let profileOwner = false;
    let accountType = 'user';
    if (this.props.account.hasOwnProperty('companyName')) {
        accountType = 'company';
    }

    if (
        parseInt(id) === this.props.account.id &&
        profileType === accountType
    ) {
        profileOwner = true;
    }

    let url = `/users/${id}`;
    if (profileType === 'job') {
        url = `/jobs/${id}`;
    } else if (profileType === 'company') {
        url = `/company/${id}`;
    }

    if (profileType === 'user' && profileOwner) {
        url = `/users/info`;
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