import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'; 

class NavigationBar extends React.Component {
    render() {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Logout</a></li>
            </ul>
        );

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/signup"> Sign up </Link> </li>
                <li><Link to="/login"> Login </Link> </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">display_cms</Link>
                    </div>

                    <div className="collapse navbar-collapse">
                        { isAuthenticated ? userLinks : guestLinks }
                    </div>

                </div>

            </nav>
        );
    }
}

NavigationBar.propTypes = {
    auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(NavigationBar);