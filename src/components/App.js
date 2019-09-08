import React from 'react';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import BestSelling from './BestSelling/BestSelling';
import TopCompetitor from './TopCompetitor/TopCompetitor';
import SalesTurnover from './SalesTurnover/SalesTurnover';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import bulb from '../assets/Help.png';
import dots from '../assets/dots.svg';
import cart from '../assets/cart.svg';

class App extends React.Component {
    
    state = {
        products: [
            {id: 1, name: 'Minuman Hijau', price: '5000', sold: 10},
            {id: 2, name: 'Minuman Merah', price: '3000', sold: 4},
            {id: 3, name: 'Minuman Biru', price: '5200', sold: 3},
            {id: 4, name: 'Minuman Putih', price: '8000', sold: 5},
            {id: 5, name: 'Minuman Pink', price: '10000', sold: 19},
        ],
        competitors: [
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
                    <div className="">
                        <Sidebar />
                    </div>
                    <div className="flex_item_nine content">
                        <h1 className="header_app">Dashboard</h1>
                        <div className="flex green_menu">
                            <div className="flex_item_seven green_menu_header">Market Insights</div>
                            <div className="flex green_menu_content">
                                <div className="content_item"><img src={bulb} alt="bulb icon" /></div>
                                <div className="content_item">Click Here for Help</div>
                                <div className="content_item"><FontAwesomeIcon icon={faChevronUp} /></div>
                            </div>
                        </div>
                        <SalesTurnover dots={dots} faArrowDown={faArrowDown} FontAwesomeIcon={FontAwesomeIcon} cart={cart} />
                        <div className="flex">
                            <div className="flex_item_five"></div>
                            <div className="flex_item_five">
                                <div className="flex">
                                    <div className="flex_item_five">
                                        <BestSelling products={this.state.products} dots={dots} />
                                    </div>
                                    <div className="flex_item_five">
                                        <TopCompetitor competitors={this.state.competitors} dots={dots} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;