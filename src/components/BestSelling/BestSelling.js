import React from 'react';

import './BestSelling.css';
import drink from '../../assets/minuman.jpg';

const BestSelling = ({products, dots}) => {
        const renderedLIst = products.map((product) => {
            return (
                <div key={product.id}>
                    <div className="product_card flex">
                        <div className="img_product flex_item_two"><img src={drink} alt="drink"/></div>
                        <div className="details_product">
                            <h1>{product.name}</h1>
                            <div className="flex">
                                <div className="flex_item_five">Rp. {product.price} </div>
                                <div className="flex_item_five sold">{product.sold}</div>
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
                    <div className=""><div className="dots"><img src={dots} alt="dots" /></div></div>
                </div>
                {renderedLIst}
            </div>
        );
};

export default BestSelling;