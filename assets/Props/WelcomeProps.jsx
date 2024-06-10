import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    imageContainer: {
        width: "100%",
        height: "40%",
    },
    image: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        maskImage: "linear-gradient(#000000, rgba(0, 0, 0, 0))",
    },
    imageText: {
        fontSize: 40,
        textTransform: "uppercase",
        color: "#e60023",
    },
    textContainer: {
        width: "100%",
        height: "30%",
        paddingHorizontal: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    title: {
        fontSize: 30,
        color: "#e60023",
        letterSpacing: 3,
        lineHeight: 90,
    },
    text: {
        fontSize: 18,
        letterSpacing: 1.5,
        lineHeight: 18,
        textAlign: "center",
    },
    buttonContainer: {
        width: "100%",
        height: "30%",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "90%",
        flexDirection: "row",
        marginVertical: 10,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: "#e60023",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 20,
    },
});

export default styles;