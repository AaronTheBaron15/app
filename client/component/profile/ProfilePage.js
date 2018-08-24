import React from 'react';
import ProfileSettings from './ProfileSettings'; 
import { connect } from 'react-redux'; 
import { isUserExists } from '../../actions/signupActions'; 

class ProfilePage extends React.Component {
    render() {
        const { isUserExists } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <ProfileSettings
                     isUserExists={isUserExists}
                     />
                </div>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    isUserExists: React.PropTypes.func.isRequired
}

export default connect(null, { isUserExists } )(ProfilePage);