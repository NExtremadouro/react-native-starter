import { StyleSheet } from 'react-native';
import { styleVars } from '../../screens/globalStyles';

export default StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: styleVars.darkBlue
  },
  content:{
    flexGrow: 1,
    backgroundColor: styleVars.darkBlue
  }
});
