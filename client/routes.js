import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './component/App';
import Greetings from './component/Greetings';
import SignupPage from './component/signup/SignupPage';
import LoginPage from './component/login/LoginPage';
import NewEventPage from './component/events/NewEventPage';
import ProfilePage from './component/profile/ProfilePage'; 

import requireAuth from './utils/requireAuth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path="new-event" component={requireAuth(NewEventPage)} />
        <Route path="profile" component={requireAuth(ProfilePage)} />
    </Route>
);