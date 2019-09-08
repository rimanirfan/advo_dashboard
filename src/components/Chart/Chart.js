import React from 'react';
import { Bar } from 'react-chartjs-2';

import './Chart.css';

const Chart = ({data, dots}) => {
    return (
        <div className="chart_container">
            <div className="flex">
                <div className="chart_header flex_item_nine">Average Purchase Value</div>
                <div className="dots"><img src={dots} alt="dots" /></div>
            </div>
            <Bar 
                data={data}
                options={{
                    legend: {
                        display: false
                    }
                }}
            />
        </div>
    );
};

export default Chart;