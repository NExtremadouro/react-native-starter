import { StyleSheet } from 'react-native';
import globalStyles, { styleVars } from '../globalStyles';

export default StyleSheet.create({
  paddedContainer: {
    ...globalStyles.paddedContainer,
    justifyContent: 'center'
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
