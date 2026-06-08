import {View, Text, TouchableOpacity, Button} from 'react-native'
import globalStyles from "../globalStyles";
import {DrawerActions} from "@react-navigation/native";

export default function UserProfileScreen({route, navigation}) {
    const {name} = route.params;

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.label}>Viewing profile of:</Text>
            <Text style={globalStyles.name}>{name}</Text>

            <View style={globalStyles.btnRow}>
                <Button title="Open Menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
            </View>
        </View>
    )
}