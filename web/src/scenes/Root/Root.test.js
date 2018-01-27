import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import helper from '../../../__tests__/helper'
import { App } from './Root'

const click = element => element.simulate('click', { button: 0 })

describe('Payments in the app', () => {
  const wrapper = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  it('should add inventory to cart', () => {
    const addToCartButtonId = wrapper.find(
      `a${helper.idFromQA('productsItem[0]/addToCart')}`
    )
    expect(addToCartButtonId).toHaveLength(1)

    click(addToCartButtonId)

    const payButton = wrapper.find(`a${helper.idFromQA('pay')}`)
    expect(payButton).toHaveLength(1)
  })

  it('should transition into cart screen and click pay', () => {
    const payButton = wrapper.find(`a${helper.idFromQA('pay')}`)
    expect(payButton).toHaveLength(1)

    click(payButton)
    const paymentSuccessful = wrapper.find(helper.idFromQA('paymentSuccessfull'))
    expect(paymentSuccessful).toHaveLength(1)
  })

  it('should wait for successfull payment dialog', () => {
    const goToHomeButton = wrapper.find(`a${helper.idFromQA('goToHome')}`)
    expect(goToHomeButton).toHaveLength(1)

    click(goToHomeButton)

    const addToCartButtonId = wrapper.find(
      `a${helper.idFromQA('productsItem[0]/addToCart')}`
    )
    expect(addToCartButtonId).toHaveLength(1)
  })
})
