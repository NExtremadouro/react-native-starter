import { StyleSheet } from 'react-native';

export const styleVars = {
    darkBlue: '#2F4858',
    brightGreen: '#38FD9E'
};

export default StyleSheet.create({
    fill: {
        backgroundColor: styleVars.darkBlue,
        flexGrow: 1
    },
    paddedContainer: {
        flex: 1,
        backgroundColor: styleVars.darkBlue,
        paddingHorizontal: 15,
        paddingBottom: 0,
        flexDirection: 'column'
    }
});
