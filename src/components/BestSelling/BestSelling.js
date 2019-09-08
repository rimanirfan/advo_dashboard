import React from 'react';

import './BestSelling.css';

const BestSelling = ({products}) => {
        const renderedLIst = products.map((product) => {
            return (
                <div key={product.id}>
                    <div className="product_card flex">
                        <div className="img_product"></div>
                        <div className="details_product">
                            <h1>{product.name}</h1>
                            <div className="flex">
                                <div className="flex_item_five">Rp. {product.price} </div>
                                <div className="flex_item_five">{product.sold}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="best_selling">
                <div className="flex">
                    <div className="flex_item_nine header">Best Selling SKU</div>
                    <div className="flex_item_one">3 dots</div>
                </div>
                {renderedLIst}
            </div>
        );
};

export default BestSelling;