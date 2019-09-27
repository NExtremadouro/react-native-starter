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
          panicComment: ''
        }
    }

    render() {
        return (
        <MainLayout>
            <View style={styles.paddedContainer}>
                <View style={styles.horizontalRow}>
                    <Text style={styles.mainTitle}>
                        Any issues? Let us know!
                    </Text>
                </View>
                <TextInput multiline={true} numberOfLines={4} style={styles.input} onChangeText={(panicComment) => this.setState({panicComment})}></TextInput>
                <TouchableOpacity onPress={() => console.log(this.state)} style={styles.button}>
                    <Text>Report</Text>
                </TouchableOpacity>
            </View>
        </MainLayout>
        )
    }
}

PanicButtonScreen.propTypes = {
  navigation: PropTypes.object,
}

export default PanicButtonScreen;
