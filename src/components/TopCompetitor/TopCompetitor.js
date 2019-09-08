import React from 'react';

import './TopCompetitor.css';
import drink from '../../assets/minuman.jpg';

const TopCompetitor = ({competitors, dots}) => {
        const renderedLIst = competitors.map((competitor) => {
            return (
                <div key={competitor.id}>
                    <div className={`competitor_card flex ${competitor.id === 1 ? "active" : ""}`}>
                        <div className={`img_competitor ${competitor.id === 1 ? "flex_item_three active" : "flex_item_two"}`}><img src={drink} alt="drink"/></div>
                        <div className="details_competitor">
                            <h1>{competitor.name}</h1>
                            <div className="flex">
                                <div className="flex_item_five">Rp. {competitor.price} </div>
                                <div className="flex_item_five sold">{competitor.sold}</div>
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
                    <div className=""><div className="dots"><img src={dots} alt="dots" /></div></div>
                </div>
                {renderedLIst}
            </div>
        );
};

export default TopCompetitor;