import React, { Component } from 'react'
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import testID from 'react-native-testid'
import db from './db'

export default class Products extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.list}>
        {db.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.text}>{item.name} {item.type}</Text>
            <Button
              onPress={() => navigation.navigate('Cart', { inventoryId: item.id })}
              title="Add To Cart"
              style={styles.button}
              {...testID(`productsItem[${item.id}]/addToCart`)}
            />
          </View>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 22,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
})
