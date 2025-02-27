import { Button, Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 20
    },
    boxTop: {
        height: Dimensions.get("window").height / 3,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    boxMid: {
        height: Dimensions.get("window").height / 4,
        width: "100%",
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: Dimensions.get("window").height / 3,
        width: "100%",
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
    },
    text: {
        fontWeight: "bold",
        marginTop: 40,
        fontSize: 18,
    },
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
    textBottom:{
        fontSize:16,
        color:themas.colors.gray,
    },
});