import React, { createContext, useContext } from "react";
import { Alert } from "react-native";

export const AuthContextList:any = createContext({});

export const AuthProviderList = (props:any) => {
    const onOpen = () => {
        Alert.alert("Atenção", "Modal Aberto");
    }

    return(
        <AuthContextList.Provider value={{onOpen}}>
            {props.children}
        </AuthContextList.Provider>
    )
}

export const useAuth = () => useContext(AuthContextList);