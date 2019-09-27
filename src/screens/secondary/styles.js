import { StyleSheet } from 'react-native';
import globalStyles, { styleVars } from '../globalStyles';

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
  input: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 350,
    backgroundColor: '#ffffff',
    marginVertical: 5,
    flexDirection: 'row'
  },
  button: {
    height: 60,
    backgroundColor: styleVars.brightGreen,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
