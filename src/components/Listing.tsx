import React from 'react';

import { DATA } from '../consts';
import { getCurrency, getQuantity, getTitle } from '../utils';

type TListing = {
  items?: typeof DATA;
};

export const Listing: React.FC<TListing> = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) =>
        item.title ? (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage?.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{getTitle(item.title)}</p>
              <p className="item-price">
                {getCurrency(item.currency_code)}
                {item.price}
              </p>
              <p className={getQuantity(item.quantity)}>{item.quantity}</p>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};