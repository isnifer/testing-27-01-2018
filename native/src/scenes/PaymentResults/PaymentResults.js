import React, { PureComponent } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types'
import testID from 'react-native-testid'
import db from '../Products/db'

export default class PaymentResults extends PureComponent {
  render() {
    const { navigation } = this.props
    const { inventoryId } = navigation.state.params
    const inventory = db.find(item => item.id === inventoryId)
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text} {...testID('paymentSuccessfull')}>
          Congratulations!{'\n'}
          You've bought {inventory.name} {inventory.type}
          {'\n'}{'\n'}{'\n'}
        </Text>
        <Button
          onPress={() => {
            this.props.navigation.dispatch(NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Products'})
              ]
            }))
          }}
          title="Go To Products List"
          {...testID(`goToHome`)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
})
