import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';

import * as EventService from '../../services/events';
import { setLoading } from '../../redux/actions/loading';
class SecondaryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMood: '',
      comment: null,
      isSubmitted: false
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

  onSubmitPress = () => {
    const { selectedMood, comment } = this.state;
    const { _id } = this.props.userData;

    const timestamp = Math.floor(Date.now() / 1000);

    this.props.setLoading('postEvent', true);

    EventService.postEvent({
      timestamp,
      userId: _id,
      value: selectedMood,
      comment: comment || " ",
    }).then(() => {
      this.props.setLoading('postEvent', false);
      this.props.navigation.goBack();
      this.setState({ isSubmitted: true });
    })
      .catch(err => { console.log(err) })
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <MainLayout>
        {!this.state.isSubmitted ?
          <View style={styles.paddedContainer}>
            <View style={styles.horizontalRow}>
              <Text style={styles.mainTitle}>
                Anything you want to add?
              </Text>
            </View>
            <TextInput multiline={true} numberOfLines={4} style={styles.input} onChangeText={(comment) => this.setState({ comment })}></TextInput>
            <TouchableOpacity onPress={this.onSubmitPress} style={styles.button}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View> :
          <View style={styles.paddedContainer}>
            <View style={styles.horizontalRow}>
              {(this.state.selectedMood === '5' || this.state.selectedMood === '4') &&
                <Text style={styles.mainTitle}>
                  {"Great! We love to hear that! We'll use your feedback to improve."}
                </Text>
              }
              {(this.state.selectedMood === '3') &&
                <Text style={styles.mainTitle}>
                  {"That's alright! We'll use your feedback to improve."}
                </Text>
              }
              {(this.state.selectedMood === '2' || this.state.selectedMood === '1') &&
                <Text style={styles.mainTitle}>
                  {"We're sorry to hear that...We'll use your feedback to improve."}
                </Text>
              }
            </View>
            <View style={styles.horizontalRow}>
              <Text style={styles.mainTitle}>
                {"Thanks!"}
              </Text>
            </View>
            <TouchableOpacity onPress={this.goBack} style={styles.button}>
              <Text>Go Back</Text>
            </TouchableOpacity>
          </View>
        }
      </MainLayout>
    )
  }

}

SecondaryScreen.propTypes = {
  navigation: PropTypes.object,
  userData: PropTypes.object,
  setLoading: PropTypes.func
}


const mapDispatchToProps = dispatch => ({
  setLoading: (process, isLoading) => dispatch(setLoading(process, isLoading))
});

const mapStateToProps = state => ({
  userData: state.auth.userData
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryScreen);
