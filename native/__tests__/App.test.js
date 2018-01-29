import test from 'tape-async'
import helper from 'tipsi-appium-helper'

const { driver, idFromAccessId } = helper

test('Payments in the app', async (t) => {
  const addToCartButtonId = idFromAccessId('productsItem[0]/addToCart')
  await driver.waitForVisible(addToCartButtonId, 10000)
  await driver.click(addToCartButtonId)
  t.pass('should add inventory to cart')

  const payButtonId = idFromAccessId('pay')
  await driver.waitForVisible(payButtonId, 15000)
  await driver.click(payButtonId)
  t.pass('should transition into cart screen and click pay')

  await driver.waitForVisible(idFromAccessId('paymentSuccessfull'), 15000)
  await driver.click(idFromAccessId('goToHome'))
  t.pass('should wait for successfull payment dialog')

  await driver.waitForVisible(addToCartButtonId, 10000)
  t.pass('should return to the first screen')
})
