import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: () => {},
  }

  state = {
    value: '',
  }

  handleChangeValue = ({ target: { value } }) => {
    this.setState({ value }, () => this.props.onChange(value))
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.handleChangeValue}
        value={this.state.value}
      />
    )
  }
}
