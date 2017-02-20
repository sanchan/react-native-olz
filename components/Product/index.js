import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  connectStyle,
  Container,
  Content,
  Button,
  Badge,
  Header,
  Icon,
  InputGroup,
  Input,
  Item,
  Left,
  Right,
  Text,
  H1,
  H2,
  H3,
  View,

} from 'native-base';
import _ from 'lodash'
import LinearGradient from 'react-native-linear-gradient';
import { Actions, ActionConst } from 'react-native-router-flux'
import ProductCard from '../ProductCard'
import styles from './styles'


export default class Product extends Component {
  handleClickBack() {
    Actions.home({type: ActionConst.BACK});
  }

  render() {
    const { product: { pic, price, type, title, description, date } } = this.props
    
    return(
      <Container>
        <Content style={styles.content}>

          <View style={{backgroundColor: 'white'}}>
            <Image source={{uri: pic}} style={styles.productImg}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 0, y: 1.0}}
                locations={[0, 0.5, 1]}
                colors={['rgba(0,0,0,.8)', 'rgba(0,0,0,.1)', 'transparent']}
                style={{flex: 1}}
              >
              </LinearGradient>
            </Image>

            <View style={{padding: 10}}>
              <H3>{price}</H3>
              <Text style={styles.date} note>{date}</Text>
              <H3 style={styles.title}>{title}</H3>
            </View>
          </View>

          <View style={styles.type}>
              <Text style={{flex: 1}}>{'Type:'}</Text>
              <Text style={{flex: 1, fontWeight: 'bold'}}>{type}</Text>
          </View>

          <View style={styles.description}>
            {_.map(description, (line, idx) =>(
              <Text key={idx} style={{marginBottom: 10}}>{line}</Text>
            ))}
          </View>

          <Button
            block
            style={styles.buyNow}
          >
            <Text>{'Buy Now'}</Text>
          </Button>

        </Content>

        <Header style={styles.header}>
            <Left transparent>
              <Button transparent onPress={this.handleClickBack}>
                <Icon name='arrow-back' style={{color: 'white'}} />
              </Button>
            </Left>

            <Right transparent>
              <Button transparent onPress={this.handleClickBack}>
                <Icon name='star' style={{color: 'white'}} />
              </Button>
            </Right>
        </Header>
      </Container>
    )
  }
}
