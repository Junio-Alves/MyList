import {StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    titleInput: {
        marginLeft: 17,
        color: themas.colors.gray,
        marginTop: 20,
    },
    boxInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: themas.colors.lightGrey,
        borderColor: themas.colors.lightGrey,
    },
    input: {
        height: "100%",
        width: "90%",
        borderRadius: 40,
        paddingLeft: 20,
    },
    Icon:{
        width: "100%",
    },
    button:{
        width: "10%"
    }
})