import React,{useState} from "react";

import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

import Logo from "../../assets/logo.png";

import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import {MaterialIcons, FontAwesome, Octicons} from "@expo/vector-icons"
import { Button } from "../../components/Button";
import { useNavigation,NavigationProp, NavigationIndependentTree } from "@react-navigation/native";

export default function Login(){

    const navigation = useNavigation<NavigationProp<any>>(); 

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading] = useState(false);

    function getLogin(){
        try{
            setLoading(true);
            if(!email || !password){
                return Alert.alert("Atenção","Preencha todos os campos");
            }
            navigation.reset({routes:[{name:"BottomRoutes"}]});
        }catch(e){
            console.log(e);
        }finally{
            setLoading(false);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"/>
                <Text style={style.text}> Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title={"ENDEREÇO E-MAIL"}
                    IconRight={MaterialIcons}
                    iconRightName="email"/>
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title={"SENHA"}
                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye-closed" : "eye"} 
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}/>
            </View>
            <View style={style.boxBottom}>
                <Button 
                    text="ENTRAR"
                    loading={loading}
                    onPress={getLogin}
                />
            </View>
            <Text style={style.textBottom}>Não tem conta?<Text style={{ color:themas.colors.primary,}}>Crie Agora!</Text></Text>
        </View>
    );
}