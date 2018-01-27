import test from 'tape-plus'
import { driver } from 'tipsi-appium-helper'

const idFromQA = id => `data-qa="${id}"`

test('Payments in the app', async (t) => {
  const addToCartButtonId = idFromQA('productsItem[0]/addToCart')
  await driver.waitForVisible(addToCartButtonId, 10000)
  await driver.click(addToCartButtonId)
  t.pass('should add inventory to cart')

  const payButtonId = idFromQA('pay')
  await driver.waitForVisible(payButtonId, 15000)
  await driver.click(payButtonId)
  t.pass('should transition into cart screen and click pay')

  await driver.waitForVisible(idFromQA('paymentSuccessfull'), 15000)
  await driver.click(idFromQA('goToHome'), 15000)
  t.pass('should wait for successfull payment dialog')
})
