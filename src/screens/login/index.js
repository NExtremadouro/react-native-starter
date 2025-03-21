import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/auth'

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';
import { TextInput } from 'react-native-gesture-handler';

import * as IconHelper from '../../helpers/icons';

import * as AuthService from '../../services/auth';
import { setLoading } from '../../redux/actions/loading';
class LoginScreen extends Component {

  state = {
    username: null,
    password: null,
  }

  onLoginPress = () => {

    this.props.setLoading('postLogin', true);

    AuthService.postLogin({
      email: this.state.username,
    })
      .then(res => {
        this.props.setLoading('postLogin', false);
        this.props.navigation.navigate('Main');
        this.props.setUser(res);
      })
      .catch(err => {console.log(err)})
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.paddedContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              {IconHelper.getIcon('person', '#cccccc')}
            </View>
            <TextInput
              autoCapitalize={false}
              autoCorrect={false}
              autoCompleteType='email'
              style={styles.input}
              placeholder={'Email'}
              onChangeText={(text) => { this.setState({ username: text }) }}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.icon}>
              {IconHelper.getIcon('lock', '#cccccc')}
            </View>
            <TextInput
              autoCapitalize={false}
              autoCorrect={false}
              autoCompleteType='password'
              style={styles.input}
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
  setUser: PropTypes.func,
  setLoading: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  setUser: (userData) => dispatch(setUser(userData)),
  setLoading: (process, isLoading) => dispatch(setLoading(process, isLoading))
});

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
