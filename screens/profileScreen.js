import {View, Text, Button, TouchableOpacity} from "react-native";
import globalStyles from "../globalStyles";
import {DrawerActions} from "@react-navigation/native";

export default function ProfileScreen({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text>Das ist dein Profil </Text>

            <View style={globalStyles.btnRow}>
                <Button title="Open Menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
            </View>
        </View>
    )
}