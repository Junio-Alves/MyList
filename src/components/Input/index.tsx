import React, { forwardRef, Fragment, LegacyRef } from "react";

import { View,TextInput,Text, TextInputProps, TouchableOpacity} from "react-native"
import {MaterialIcons, FontAwesome, Octicons} from "@expo/vector-icons"
import { style } from "./style";
import { themas } from "../../global/themes";

type IconComponent =    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                        React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                        React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: String,
    iconRightName?: String,
    title?: String,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{
    const {IconLeft,IconRight,iconLeftName,iconRightName,title,onIconLeftPress,onIconRightPress,...rest} = Props;
    
    const calculateSizeWidth = () => {
        if(IconLeft && IconRight){
            return "80%";
        }else if(IconLeft || IconRight){
            return "90%";
        }else{
            return "100%";
        }
    }

    const calculateSizePaddingLeft = () => {
        if(IconLeft && IconRight){
            return 10;
        }else if(IconLeft || IconRight){
            return 10;
        }else{
            return 20;
        }
    }

    return(
        <Fragment>
            { title && <Text style={style.titleInput}>{title}</Text>}
            <View style={[style.boxInput,{paddingLeft:calculateSizePaddingLeft()}]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.button}>
                        <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon}/>
                    </TouchableOpacity>
                )}
                <TextInput 
                    style={[style.input,{width:calculateSizeWidth()}]}
                    {...rest}
                />
                 {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.button}>
                        <IconRight name={iconRightName as any} size={20} color={themas.colors.gray} style={style.Icon}/>
                    </TouchableOpacity>
            )}
            </View>
        </Fragment>
    )
})