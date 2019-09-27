import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';

class SecondaryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMood: '',
      comment: ''
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({ selectedMood: navigation.getParam('mood', '0') });
    console.log(navigation.getParam('mood', '0'));
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
    };
  };

  render() {
    return (
      <MainLayout>
        <View style={styles.paddedContainer}>
          <View style={styles.horizontalRow}>
            <Text style={styles.mainTitle}>
              Anything you want to add?
            </Text>
          </View>
          <TextInput multiline={true} numberOfLines={4} style={styles.input} onChangeText={(comment) => this.setState({comment})}></TextInput>
          <TouchableOpacity onPress={() => console.log(this.state)} style={styles.button}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </MainLayout>
    )
  }

}

SecondaryScreen.propTypes = {
  navigation: PropTypes.object,
}

export default SecondaryScreen;
