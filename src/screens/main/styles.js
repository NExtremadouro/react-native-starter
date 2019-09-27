import { StyleSheet } from 'react-native';
import globalStyles from '../globalStyles';

export default StyleSheet.create({
  paddedContainer: {
    ...globalStyles.paddedContainer,
    justifyContent: 'center'
  },
  mainTitle: {
    color: '#ffffff',
    fontSize: 30
  },
  horizontalRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  moodButton: {
    marginHorizontal: 10
  },
  moodImage: {
    flex: 1,
    width: 90,
    height: 90,
    resizeMode: 'contain'
  }
});
