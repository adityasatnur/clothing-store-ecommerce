import React, { Component } from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPrevew from "../../components/preview-collection/preview-collection.component";
class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    debugger;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPrevew
            key={id}
            {...otherCollectionProps}
          ></CollectionPrevew>
        ))}
      </div>
    );
  }
}

export default ShopPage;
