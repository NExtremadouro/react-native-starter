import React, { Component } from 'react';

import { connect } from 'react-redux'

import { View, ActivityIndicator } from 'react-native';

import MainLayout from '../../layout/main';
import styles from './styles';

import PropTypes from 'prop-types';

class AuthLoadingScreen extends Component {

  componentDidMount = () => {
    //const userToken = null;//await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(this.props.auth.isAuth ? 'Main' : 'Login');
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
          />
        </View>
      </MainLayout>

    );
  }
}

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object,
  auth: PropTypes.bool
}

const mapDispatchToProps = () => ({

});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
