import React from 'react';

import './SalesTurnover.css';


const SalesTurnover = () => {
    return (
        <div className="sales_turnover">
            <div className="flex">
                <div className="flex_item_seven">Sales Turnover</div>
                <div>3 dots</div>
            </div>
            <div className="flex">
                <div className="details flex_item_seven">
                    <div>Rp 3,600,000</div>
                    <div>13.8% last period in products sold</div>
                </div>
                <div>Cart icon</div>
            </div>
        </div>
    );
};

export default SalesTurnover;