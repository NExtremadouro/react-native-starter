import { StyleSheet } from 'react-native';
import globalStyles, { styleVars } from '../globalStyles';

export default StyleSheet.create({
  paddedContainer: {
    ...globalStyles.paddedContainer,
    justifyContent: 'center'
  },
  input: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 60,
    backgroundColor: '#ffffff',
    marginVertical: 5,
    flexDirection: 'row'
  },
  icon: {
    marginRight: 10
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
