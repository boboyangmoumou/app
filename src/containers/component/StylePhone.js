import React, { Component } from 'react';
export default class StylePhone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _active: 0,
      currentActive: 0,
      url: '',
      money: ''
    }
  }

  render () {
    let { status } = this.props;
    let newStatus = status === "loading";
    if (!newStatus) {
      return (
        <div>

        </div>
      )
    } else {
      return (
        status
      )
    }
  }
}