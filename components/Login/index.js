import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Button,
  Input,
  Icon,
  Text,
  View,
  H2,
} from 'native-base';
import { BlurView } from 'react-native-blur'
import { Actions, ActionConst } from 'react-native-router-flux'
import styles from './styles'
import bg from './bg.jpg'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      password: '',
    }
  }

  onSubmit() {
    Actions.home({type: ActionConst.PUSH});
  }

  render() {
    return (
      <Container style={styles.container}>
        <Image source={bg} style={styles.bg}>
          <BlurView blurType="dark" style={styles.blur} blurAmount={5} />
        </Image>
        <View style={styles.form}>
          <H2 style={styles.title}>{'Login'}</H2>

          <View style={styles.formInputs}>
            <Input
              placeholder={'Email'}
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <View style={styles.inputSeparator} />
            <Input
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
          </View>

          <Button
            block
            onPress={this.onSubmit}
            style={styles.button}
          >
            <Text>Log in</Text>
          </Button>

        </View>
      </Container>
    )
  }
}
