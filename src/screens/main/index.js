import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';
import {
  veryHappy,
  happy,
  neutral,
  angry,
  veryAngry
} from '../../assets/images';

import * as EventService from '../../services/events';
class MainScreen extends Component {

  navigate = () => {
    //this.props.navigation.navigate('Secondary', { title: 'Secondary' });
    const { _id } = this.props.userData;
    const timestamp = Math.floor(Date.now() / 1000);
    const userId = _id;
    const value = 1;
    const comment = "TEST";

    EventService.postEvent({
      timestamp,
      userId,
      value,
      comment
    }).then(res => {
      alert(JSON.stringify(res))
    })
      .catch(err => alert(err))
  }

  render() {
    return (
      <MainLayout>
        <View style={styles.paddedContainer}>
          <View style={styles.horizontalRow}>
            <Text style={styles.mainTitle}>
              How are you feeling?
            </Text>
          </View>
          <View style={styles.horizontalRow}>
            <TouchableOpacity style={styles.moodButton} onPress={this.navigate}>
              <Image style={styles.moodImage} source={veryHappy} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton} onPress={this.navigate}>
              <Image style={styles.moodImage} source={happy} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton} onPress={this.navigate}>
              <Image style={styles.moodImage} source={neutral} />
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalRow}>
            <TouchableOpacity style={styles.moodButton} onPress={this.navigate}>
              <Image style={styles.moodImage} source={angry} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton} onPress={this.navigate}>
              <Image style={styles.moodImage} source={veryAngry} />
            </TouchableOpacity>
          </View>
        </View>
      </MainLayout>
    )
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object,
  userData: PropTypes.object
}

const mapDispatchToProps = () => ({
});

const mapStateToProps = state => ({
  userData: state.auth.userData
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
