import test from '../tape'

test('Payments in the app', async (t, driver, helper) => {
  const addToCartButtonId = helper.idFromQA('productsItem[0]/addToCart')
  await driver.waitForVisible(addToCartButtonId, 10000)
  await driver.click(addToCartButtonId)
  t.pass('should add inventory to cart')

  const payButtonId = helper.idFromQA('pay')
  await driver.waitForVisible(payButtonId, 15000)
  await driver.click(payButtonId)
  t.pass('should transition into cart screen and click pay')

  await driver.waitForVisible(helper.idFromQA('paymentSuccessfull'), 15000)
  await driver.click(helper.idFromQA('goToHome'), 15000)
  t.pass('should wait for successfull payment dialog')
})
