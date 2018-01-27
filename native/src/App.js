import { StackNavigator } from 'react-navigation'
import Products from './scenes/Products'
import Cart from './scenes/Cart'
import PaymentResults from './scenes/PaymentResults'

export default StackNavigator({
  Products: {
    screen: Products,
    navigationOptions: {
      headerTitle: 'Products',
    },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      headerTitle: 'Cart',
    },
  },
  PaymentResults: {
    screen: PaymentResults,
    navigationOptions: {
      headerTitle: 'Payment Results',
    },
  },
})
