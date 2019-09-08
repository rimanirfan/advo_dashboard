import React from 'react';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidebar />
            </div>
        );
    };
};

export default App;