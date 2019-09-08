import React from 'react';

import './TopCompetitor.css';

const TopCompetitor = ({competitors}) => {
        const renderedLIst = competitors.map((competitor) => {
            return (
                <div key={competitor.id}>
                    <div className="competitor_card flex">
                        <div className="img_competitor"></div>
                        <div className="details_competitor">
                            <h1>{competitor.name}</h1>
                            <div className="flex">
                                <div className="flex_item_five">Rp. {competitor.price} </div>
                                <div className="flex_item_five">{competitor.sold}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="top_competitor">
                <div className="flex">
                    <div className="flex_item_nine header">Top Competitor SKU</div>
                    <div className="flex_item_one">3 dots</div>
                </div>
                {renderedLIst}
            </div>
        );
};

export default TopCompetitor;