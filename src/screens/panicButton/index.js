import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';
import MainLayout from '../../layout/main';

class PanicButtonScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          panicComment: '',
          isSubmitted: false
        }
    }

    onSubmitPress = () => {
        this.setState({ isSubmitted: true });
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
                <TextInput multiline={true} numberOfLines={4} style={styles.input} onChangeText={(panicComment) => this.setState({panicComment})}></TextInput>
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
}

export default PanicButtonScreen;
