import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import testID from 'react-native-testid'
import db from '../Products/db'

export default class Cart extends Component {
  render() {
    const { navigation } = this.props
    const { inventoryId } = navigation.state.params
    const inventory = db.find(item => item.id === inventoryId)
    return (
      <View style={styles.wrapper}>
        <View style={styles.list}>
          <View style={styles.item}>
            <Text style={styles.text}>{inventory.name} {inventory.type}</Text>
          </View>
        </View>
        <TouchableHighlight
          title="Pay"
          style={styles.payButton}
          onPress={() => navigation.navigate('PaymentResults', { inventoryId })}
          {...testID(`pay`)}>
          <Text style={styles.payButtonText}>Pay</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 100,
  },
  text: {
    fontSize: 40,
  },
  payButton: {
    backgroundColor: '#000000',
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 100,
    paddingTop: 10,
    paddingBottom: 20,
  },
  payButtonText: {
    color: '#ffffff',
    fontSize: 50,
  },
})
