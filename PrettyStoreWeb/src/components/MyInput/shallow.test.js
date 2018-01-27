import React from 'react'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import range from 'lodash/range'
import MyInput from './MyInput'

const typeText = (value, callback) => {
  range(value.length).forEach((letter, index) => {
    callback({ target: { value: value.slice(0, index + 1) } })
  })
}

describe('<MyInput />', () => {
  it('should renders correctly', () => {
    const component = shallow(
      <MyInput />
    )

    expect(component).toBeTruthy()
  })

  it('should handle onChange callback', () => {
    // Create spy
    const onChangeHandler = spy()

    // Render component
    const component = shallow(
      <MyInput onChange={onChangeHandler} />
    )

    const myInput = component.instance()
    const inputValue = 'hello'

    // Type text "hello"
    typeText(inputValue, myInput.handleChangeValue)

    // Expect value key in state should be "hello"
    expect(component.state('value')).toBe(inputValue)

    // onChangeHandler called at least once
    expect(onChangeHandler.called).toBe(true)
  })
})
