import React from 'react';

import './SalesTurnover.css';


const SalesTurnover = ({dots, cart, faArrowDown, FontAwesomeIcon}) => {
    return (
        <div className="sales_turnover">
            <div className="flex">
                <div className="flex_item_seven sales_header">Sales Turnover</div>
                <div className="dots"><img src={dots} alt="dots" /></div>
            </div>
            <div className="flex">
                <div className="details">
                    <div className="sales_money">Rp 3,600,000</div>
                    <div className="sales_percent"><span className="percent"><FontAwesomeIcon icon={faArrowDown} /> 13.8%</span> last period in products sold</div>
                </div>
                <div className="cart_icon"><img src={cart} alt="cart icon" /></div>
            </div>
        </div>
    );
};

export default SalesTurnover;