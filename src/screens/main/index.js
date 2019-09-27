import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

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

class MainScreen extends Component {
  navigate = (mood) => {
    this.props.navigation.navigate('Secondary', { title: 'Secondary', mood });
    alert(JSON.stringify(this.props.navigation));
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
            <TouchableOpacity style={styles.moodButton} onPress={() => this.navigate('5')}>
              <Image style={styles.moodImage} source={ veryHappy } />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton} onPress={() => this.navigate('4')}>
              <Image style={styles.moodImage} source={ happy } />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton} onPress={() => this.navigate('3')}>
              <Image style={styles.moodImage} source={ neutral } />
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalRow}>
            <TouchableOpacity style={styles.moodButton} onPress={() => this.navigate('2')}>
              <Image style={styles.moodImage} source={ angry } />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton} onPress={() => this.navigate('1')}>
              <Image style={styles.moodImage} source={ veryAngry } />
            </TouchableOpacity>
          </View>
        </View>
      </MainLayout>
    )
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object,
}

export default MainScreen;
