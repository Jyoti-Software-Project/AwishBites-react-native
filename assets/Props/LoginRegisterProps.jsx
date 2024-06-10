import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        width: "88%",
        backgroundColor:"transparent",
    },
    titleContainer: {
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"transparent",
    },
    title: {
        color: "#e60023",
        fontSize: 28,
        fontWeight: "600",
        letterSpacing: 2,
    },
    subTitle: {
        opacity: 0.9,
        fontSize: 16,
        letterSpacing: 1,
    },
    inputContainer: {
        marginBottom: 10,
        backgroundColor:"transparent",
        position: "relative",
    },
    input: {
        height: 48,
        fontSize: 17,
        paddingHorizontal: 10,
        borderRadius: 10,
        opacity: 0.9,
        backgroundColor:"#c0c0c0",
    },
    icon: {
        position: "absolute",
        top: 13,
        right: 10,
    },
    errorText: {
        fontSize: 16,
        color: "#e60023",
    },
    textContainer: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 16,
    },
    buttonContainer: {
        marginBottom: 10,
    },
    button: {
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#e60023",
    },
    buttonText: {
        textTransform: "uppercase",
        fontSize: 16,
        color: "#ffffff",
    },
    navigationContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"transparent",
    },
    navigationText: {
        fontSize: 16,
        color: "#e60023",
    },
});

export default styles;