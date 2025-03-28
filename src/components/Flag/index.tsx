import { Text,TouchableOpacity } from "react-native"
import { style } from "./styles";


type Props =  {
    caption: String,
    color: string,
    selected?: boolean,
}

export function Flag({...rest}:Props){
    return (
      <TouchableOpacity 
        style={[
          style.container,
          {backgroundColor:rest?.color},
          rest?.selected && {borderWidth:2}
        ]}>
        <Text style={{color:"#FFF"}}>{rest.caption}</Text>
      </TouchableOpacity> 
    );
} 