import { connect } from 'react-redux'

import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';

import styles from './styles';

import PropTypes from 'prop-types';

const Loading = ({ isLoading }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={isLoading}
  >
    <View style={styles.container}>

      <ActivityIndicator size="large" />

    </View>
  </Modal>
)

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isLoading: Object.keys(state.loading).length > 0
})

const mapDispatchToProps = () => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Loading)
