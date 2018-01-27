import test from 'tape-async'
import driver from '../driver'
import helper from '../helper'

export default function tape(name, callback) {
  return test(name, async (t) => {
    try {
      await callback(t, driver, helper)
      await driver.end()
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
      process.exit(1)
    }
  })
}
