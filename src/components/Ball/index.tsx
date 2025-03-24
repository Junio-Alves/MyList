import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity, View } from "react-native"
import { style } from "./styles";

export function Ball({color}:{color?:string}){
    return (
        <View style={[style.ball,{borderColor:color || "grey"}]}>
        </View>
    );
}