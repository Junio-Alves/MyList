import React,{useState} from "react";

import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

import Logo from "../../assets/logo.png";
import {MaterialIcons} from "@expo/vector-icons"
import { themas } from "../../global/themes";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    function getLogin(){
        try{
            setLoading(true);
            if(!email || !password){
                return Alert.alert("Atenção","Preencha todos os campos");
            }
            setTimeout(()=>{
                Alert.alert("Aviso!","Logado com sucesso!")
                setLoading(false);
            },3000)
        }catch(e){
            console.log(e);
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
                <Text style={style.titleInput}>ENDEREÇO E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}/>
                    <MaterialIcons 
                        name="email"
                        size={20}
                        color={themas.colors.gray}/>
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}/>
                    <MaterialIcons 
                        name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray}/>
                </View>
                
                <TextInput/>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {loading 
                        ? 
                        <ActivityIndicator color={"#FFFF"} size={"small"}/> 
                        : 
                        <Text style={style.textButton}>Entrar</Text>
                    }   
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta?<Text style={{ color:themas.colors.primary,}}>Crie Agora!</Text></Text>
        </View>
    );
}