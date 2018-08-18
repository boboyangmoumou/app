import React, { Component } from 'react';
import './homeView.css';
export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _active: 0,
      currentActive: 0,
      url: '',
      money: '',
      newColor: '银色',
      newSize: '16GB',
      count: 1
    }
  }
  changeColor (e, index, item) {
    this.setState({
      url: item.url,
      _active: index,
      newColor: item.color
    })
  }
  ChangeSize (value, index, e) {
    this.setState({
      money: value.money,
      currentActive: index,
      newSize: value.size
    })
  }
  addShopCart (money, newColor, newSize, count) {
    if (this.props.onSubmit) {
      this.props.onSubmit({ money, newColor, newSize, count })
    }
  }
  render () {
    let { name, desc, price, style, activeStyleUrl, storage, status } = this.props;
    let { url, money, newColor, newSize, count } = this.state;
    let newStatus = status === "loading";
    if (!newStatus) {
      return (
        <div className="MainWrapper">
          <div className="gellery">
            <img src={url || activeStyleUrl} alt={url} />
          </div>
          <div className="container">
            <div className="title">
              <h3>{name}</h3>
            </div>
            <div className="desWapper AllStyle">
              <div className="desc inline">描述:</div>
              <div className="complit">{desc}</div>
            </div>
            <div className="price AllStyle">
              <div className="inline">价格:</div>
              <div className="complit">{money || price}</div>
            </div>
            <div className="colorWapper AllStyle">
              <div className="guuise inline">外观:</div>
              <ul className="content">
                {style.map((item, index) => (
                  <li key={index}
                    className={index === this.state._active ? "_active" : null}
                    onClick={(e) => this.changeColor(e, index, item)}>
                    {item.color}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lostrageWapper AllStyle">
              <div className="capacity inline">内存:</div>
              <ul className="content">
                {storage.map((value, index) => (
                  <li key={index}
                    className={index === this.state.currentActive ? "currentActive" : null}
                    onClick={(e) => this.ChangeSize(value, index, e)}>
                    {value.size}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shopCart btn btn-block"
              style={url || money ? { background: 'red' } : { background: "#666" }}
              onClick={() => this.addShopCart(money, newColor, newSize, count)}
            >加入购物车</div>
          </div>
        </div>
      )
    } else {
      return (
        <div>{status}</div>
      )
    }
  }
}