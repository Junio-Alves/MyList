import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import {MaterialIcons} from "@expo/vector-icons"
import { FlatList } from "react-native-gesture-handler";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";

type PropCard = {item:number,title:string,description:string,flag:string};
const data: Array<PropCard> = [
    {
        item: 0,
        title: "Realizar a lição de casa!",
        description: "página de 10 a 20",
        flag: "urgente",
    },
    {
        item: 1,
        title: "Comprar mantimentos",
        description: "Leite, pão, ovos e frutas",
        flag: "normal",
    },
    {
        item: 2,
        title: "Fazer exercícios físicos",
        description: "Correr 5km no parque",
        flag: "importante",
    },
    {
        item: 3,
        title: "Assistir aula online",
        description: "Revisar o conteúdo de matemática",
        flag: "urgente",
    }
]

export default function List(){

    const _renderCard = (item:PropCard) =>{
        return (
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                   <View style={style.rowCardLeft}>
                    <Ball/>
                        <View>
                            <Text style={style.titleCard}>{item.title}</Text>
                            <Text style={style.descriptionCard}>{item.description}</Text>
                        </View>
                   </View>
                   <Flag caption={item.flag} color={themas.colors.red}/>
                </View>
            </TouchableOpacity>
        );
    }

    return (
       <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia,<Text style={{fontWeight:"bold"}}>Junio A.</Text></Text>
                <View style={style.boxInput}>
                    <Input IconLeft={MaterialIcons} iconLeftName={"search"} />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList 
                    data={data}
                    style={{marginTop:40,paddingHorizontal:30}}
                    keyExtractor={(item) => item.item.toString()}
                    renderItem={({item}) => _renderCard(item)}
                />
            </View>
       </View>
    )
}