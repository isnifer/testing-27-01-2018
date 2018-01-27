import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import db from '../../db'

export default class PaymentResults extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const { inventoryId } = this.props.match.params
    const inventory = db.find(item => item.id === parseInt(inventoryId, 10))
    return (
      <div className={styles.wrapper}>
        <span className={styles.text} data-qa="paymentSuccessfull">
          Congratulations!<br />
          You have bought {inventory.name} {inventory.type}
        </span>
        <Link to="/" data-qa="goToHome" className={styles.button}>
          Go To Products List
        </Link>
      </div>
    )
  }
}
