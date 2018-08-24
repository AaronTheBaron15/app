import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup'; 
import { connect } from 'react-redux'; 
//import database from '../../../server/models/database'; 
import classnames from 'classnames'; 

class ProfileSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            errors: {},
            isLoading: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    checkUserExists(e) {
        const field = e.target.name;
        const val = e.target.value;
        if(val !== '') {
            this.props.isUserExists(val).then(res => {
                let errors = this.state.errors;
                if(res.data.user) {
                    errors[field] = 'There is user with such ' + field;
                } else {
                    errors[field] = '';
                }
                this.setState({ errors })
            });
        }
    }

    // getUser() {        
        
    // }

    render() {
        const { username, email, password, errors } = this.state;
        //getUser();
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Welcome to your profile!</h1>
                
                <TextFieldGroup
                    field="username"
                    label="Username"
                    value={username}
                    error={errors.username}
                    checkUserExists={this.checkUserExists}
                    onChange={this.onChange}
                />

                <TextFieldGroup
                    field="email"
                    label="Email"
                    value={email}
                    error={errors.email}
                    checkUserExists={this.checkUserExists}
                    onChange={this.onChange}
                />

                <TextFieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    //type="password"
                />

                <button type="submit" className="btn btn-primary">Submit changes</button>
            </form>
        );

    }
}

ProfileSettings.propTypes = {
    isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, {})(ProfileSettings);

