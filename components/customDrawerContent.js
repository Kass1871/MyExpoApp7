import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import {DrawerContent, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import globalStyles from "../globalStyles";

export default function CustomDrawerContent(props) {
    const handleLogout = () => {
        Alert.alert("Logout", "Congratulations, you've been logged out.")
        console.log("Logout worked, I just can't test the alert.")
    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={globalStyles.container}>
                <Image source={require('../assets/Avatar.png')} style={globalStyles.avatar} />
                <Text>Here goes your name!</Text>
            </View>

            <DrawerItemList {...props}/>

            <TouchableOpacity onPress={handleLogout} style={{padding: 20}}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}