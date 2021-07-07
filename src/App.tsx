import React from 'react';

import '../public/assets/scss/common.scss';

import '../public/assets/scss/root/main.scss';
import '../public/assets/scss/root/social.scss';

/**
 * The React application layer housing the game.
 */
class App extends React.Component {
    render = () => {
        return (
            <iframe src="https://krunker.io" frameBorder="0"></iframe>
        );
    }
}

export default App;
