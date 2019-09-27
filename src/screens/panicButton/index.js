import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';

import * as SlackService from '../../services/slack';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';
import { setLoading } from '../../redux/actions/loading';

class PanicButtonScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panicComment: null,
      isSubmitted: false
    }
  }

  onSubmitPress = () => {
    this.props.setLoading('postSlack', true);

    SlackService.postSlack({
      message: this.state.panicComment || " ",
    }).then(() => {
      this.props.setLoading('postSlack', false);
      this.setState({ isSubmitted: true, panicComment: null });
    })
      .catch(err => {
        this.props.setLoading('postSlack', false);
        console.log(err);
      });
  }

  goBack = () => {
    this.setState({ isSubmitted: false });
  }

  render() {
    return (
      <MainLayout>
        {!this.state.isSubmitted ?
          <View style={styles.paddedContainer}>
            <View style={styles.horizontalRow}>
              <Text style={styles.mainTitle}>
                Any issues? Let us know!
                    </Text>
            </View>
            <TextInput multiline={true} numberOfLines={4} style={styles.input} onChangeText={(panicComment) => this.setState({ panicComment })}></TextInput>
            <TouchableOpacity onPress={this.onSubmitPress} style={styles.button}>
              <Text>Report</Text>
            </TouchableOpacity>
          </View> :
          <View style={styles.paddedContainer}>
            <View style={styles.horizontalRow}>
              <Text style={styles.mainTitle}>
                {"We're sorry to hear that. We'll work to fix this issue."}
              </Text>
            </View>
            <TouchableOpacity onPress={this.goBack} style={styles.button}>
              <Text>Ok</Text>
            </TouchableOpacity>
          </View>
        }
      </MainLayout>
    )
  }
}

PanicButtonScreen.propTypes = {
  navigation: PropTypes.object,
  postSlack: PropTypes.func,
  setLoading: PropTypes.func
}


const mapDispatchToProps = dispatch => ({
  setLoading: (process, isLoading) => dispatch(setLoading(process, isLoading))
});

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PanicButtonScreen);
