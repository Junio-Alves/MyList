import {StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    button: {
        width: 250,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    textButton: {
        fontSize: 16,
        color: "#FFFF",
        fontWeight: "bold",
    },
})