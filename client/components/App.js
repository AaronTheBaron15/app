import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
    render() {
        return(
            //<h1>ELDERS REACT TO <i>REACT</i> AND <i>REDUX</i> TUTORIAL</h1>
            <div className="container">
                <NavigationBar />
                <FlashMessagesList />
                {this.props.children}
            </div>
            //<Greetings />
        );
    }
}
export default App;