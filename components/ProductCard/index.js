import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';
import { View, Badge, Text } from 'native-base';
import { vh, vw } from '../../utils/dimensions'
import styles from './styles'

export default class ProductCard extends Component {
  render() {
    const { product: { pic, featured, price }, onClick } = this.props

    return(
      <View style={styles.product}>
        <TouchableOpacity onPress={onClick} style={styles.touchable}>
          <Image source={{uri: pic}} style={styles.productImg}>
            {featured &&
            <View style={styles.featured}>
              <Badge success>
                <Text>{'Featured'}</Text>
              </Badge>
            </View>
            }
          </Image>
          <View style={styles.price}>
            <Text style={{fontWeight: 'bold'}}>{price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
