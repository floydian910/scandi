import React, { Component } from "react";
import basket from "../../media/basket.png";
import { Link } from "react-router-dom";

export default class ProductItem extends Component {
  state = {
    isHovered: false,
  };
  mouseEnterHandler = (e) => {
    this.setState({ isHovered: true });
  };

  mouseLeaveHandler = (e) => {
    this.setState({ isHovered: false });
  };

  render() {
    console.log(this.state.isHovered);
    if (this.props.product.inStock) {
      return (
        <div
          className="product_item_wrapper"
          onMouseEnter={this.mouseEnterHandler}
          onMouseLeave={this.mouseLeaveHandler}
        >
          <div className="img_box">
            <Link to={`/product/${this.props.product.id}`}>
              <img src={this.props.product.img} alt="Product"></img>
            </Link>

            {this.state.isHovered && (
              <div
                className="basket_wrapper"
                onClick={() => this.props.addToCart(this.props.product.id)}
              >
                <img
                  style={{ width: "26px", height: "26px", marginTop: "0px" }}
                  src={basket}
                  alt="ShoppingBasket"
                  // onClick={() => history.push(`/product/${this.props.elem.id}`)}
                />
              </div>
            )}
          </div>

          <div className="product_description">
            <h3>{this.props.product.title}</h3>
            <p>${this.props.product.price.toFixed(2)}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="product_item_wrapper">
          <img
            className="out_of_stock"
            src={this.props.product.img}
            alt="product"
          ></img>
          <p className="out_of_stock_text">OUT OF STOCK</p>
          <div className="product_description">
            <h3 className="out_of_stock">{this.props.product.title}</h3>
            <p className="out_of_stock">
              ${this.props.product.price.toFixed(2)}
            </p>
          </div>
        </div>
      );
    }
  }
}
