import React from 'react';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import BestSelling from './BestSelling/BestSelling';

import './App.css';

class App extends React.Component {
    
    state = {
        products: [
            {id: 1, name: 'Minuman Hijau', price: '5000', sold: 10},
            {id: 2, name: 'Minuman Merah', price: '3000', sold: 4},
            {id: 3, name: 'Minuman Biru', price: '5200', sold: 3},
            {id: 4, name: 'Minuman Putih', price: '8000', sold: 5},
            {id: 5, name: 'Minuman Pink', price: '10000', sold: 19},
        ]
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="flex">
                    <div className="flex_item_one small">
                        <Sidebar />
                    </div>
                    <div className="flex_item_nine content">
                        <BestSelling className="" products={this.state.products} />
                    </div>
                </div>
            </div>
        );
    };
};

export default App;