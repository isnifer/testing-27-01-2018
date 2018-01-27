import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import db from '../../db'

export default class Products extends PureComponent {
  render() {
    return (
      <div className={styles.list}>
        {db.map(item => (
          <div key={item.id} className={styles.item}>
            <span className={styles.text}>{item.name} {item.type}</span>
            <Link
              to={`/cart/${item.id}`}
              className={styles.button}
              data-qa={`productsItem[${item.id}]/addToCart`}>
              Add To Cart
            </Link>
          </div>
        ))}
      </div>
    )
  }
}
