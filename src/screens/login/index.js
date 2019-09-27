import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';
import { TextInput } from 'react-native-gesture-handler';

import * as IconHelper from '../../helpers/icons';

import * as AuthService from '../../services/auth';
class LoginScreen extends Component {

  state = {
    username: null,
    password: null,
  }

  onLoginPress = () => {

    AuthService.postLogin({
      email: this.state.username,
    })
      .then(res => {
        this.props.navigation.navigate('Main', { userData: res });
      })
      .catch(err => alert(err))
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.paddedContainer}>
          <View style={styles.input}>
            <View style={styles.icon}>
              {IconHelper.getIcon('person', '#cccccc')}
            </View>
            <TextInput
              placeholder={'Email'}
              onChangeText={(text) => { this.setState({ username: text }) }}
            />
          </View>

          <View style={styles.input}>
            <View style={styles.icon}>
              {IconHelper.getIcon('lock', '#cccccc')}
            </View>
            <TextInput
              secureTextEntry={true}
              placeholder={'Password'}
              onChangeText={(text) => { this.setState({ password: text }) }}
            />
          </View>

          <TouchableOpacity onPress={this.onLoginPress} style={styles.button}>
            <Text>{'Login'}</Text>
          </TouchableOpacity>
        </View>
      </MainLayout>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object,
}

export default LoginScreen;
