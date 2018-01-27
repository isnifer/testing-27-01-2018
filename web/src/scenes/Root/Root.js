import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Products from '../Products'
import Cart from '../Cart'
import PaymentResults from '../PaymentResults'
import styles from './styles.css'

export default () => (
  <BrowserRouter>
    <div className={styles.app}>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cart/:inventoryId" component={Cart} />
        <Route path="/results/:inventoryId" component={PaymentResults} />
        <Route component={Products} />
      </Switch>
    </div>
  </BrowserRouter>
)
