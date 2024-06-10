import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: '#007aff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        marginLeft: 10,
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        alignItems: 'flex-end',
        marginRight: 0,
        flexDirection: "row",
    },
});

export default styles;