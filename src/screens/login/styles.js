import { StyleSheet } from 'react-native';
import globalStyles, { styleVars } from '../globalStyles';

export default StyleSheet.create({
  paddedContainer: {
    ...globalStyles.paddedContainer,
    justifyContent: 'center'
  },
  inputContainer: {
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: styleVars.darkBlue,
  },
  icon: {
    marginHorizontal: 10
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
