import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import {
  Container,
  Content,
  Button,
  Header,
  Icon,
  Input,
  Item,
  Text,
  View,
} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux'
import _ from 'lodash'
import { vh, vw } from '../../utils/dimensions'
import ProductCard from '../ProductCard'
import products from './products'
import styles from './styles'

export default class Home extends Component {
  handleClickProduct(props) {
    Actions.product({
      ...props,
      type: ActionConst.PUSH
    });
  }

  render() {
    return(
      <Container>

        <Header searchBar rounded style={styles.header}>
          <Item style={styles.headerInput}>
            <Icon name="search" style={{color: 'white'}} />
            <Input placeholder="Search on OLZ" style={{color: 'white'}} placeholderTextColor={'#F4F4F4'} />
          </Item>
          <Button transparent>
            <Text style={{color: '#F4F4F4'}}>Search</Text>
          </Button>
        </Header>

        <Content style={{backgroundColor: '#f4f4f4'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
            <Button rounded style={styles.categoryButton}>
              <Icon name="football" />
            </Button>

            <Button rounded style={styles.categoryButton}>
              <Icon name="ios-game-controller-a-outline" />
            </Button>

            <Button rounded style={{...styles.categoryButton, ...styles.categoryButtonActive}}>
              <Icon name="ios-headset-outline" />
            </Button>

            <Button rounded style={styles.categoryButton}>
              <Icon name="ios-home-outline" />
            </Button>

            <Button rounded style={styles.categoryButton}>
              <Icon name="ios-image-outline" />
            </Button>

            <Button rounded style={styles.categoryButton}>
              <Icon name="ios-laptop" />
            </Button>

            <Button rounded style={styles.categoryButton}>
              <Icon name="ios-plane-outline" />
            </Button>
          </ScrollView>

          <View style={styles.products}>
            {_.map(products, (product, idx) => (
              <ProductCard
                key={idx}
                onClick={this.handleClickProduct.bind(this, { product })}
                product={product}
              />
            ))
            }
          </View>
        </Content>


      </Container>
    )
  }
}
