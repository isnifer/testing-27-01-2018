import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import db from '../../db'

export default class Cart extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const { inventoryId } = this.props.match.params
    const inventory = db.find(item => item.id === parseInt(inventoryId, 10))
    return (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <div className={styles.item}>
            <span className={styles.text}>{inventory.name} {inventory.type}</span>
          </div>
        </div>
        <Link className={styles.payButton} to={`/results/${inventoryId}`} data-qa="pay">
          <span className={styles.payButtonText}>Pay</span>
        </Link>
      </div>
    )
  }
}
