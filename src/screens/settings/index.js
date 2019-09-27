import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';
import { userLogout } from '../../redux/actions/auth';
class SettingsScreen extends Component {

  navigate = () => {
    this.props.navigation.navigate('Secondary', { title: 'Secondary' });
  }

  onLogoutPress = () => {
    this.props.userLogout();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.paddedContainer}>
          <TouchableOpacity onPress={this.onLogoutPress} style={styles.button}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </MainLayout>
    )
  }
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
  userLogout: PropTypes.fun
}

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout())
});

const mapStateToProps = () => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
