import {View, Text, Button} from "react-native";
import {useNavigation, DrawerActions} from "@react-navigation/native";
import globalStyles from "../globalStyles";

export default function HomeScreen(props) {
    const navigation = useNavigation();

    return(
        <View style={globalStyles.container}>
            <Text>Das ist der Startbildschirm</Text>

            <View style={globalStyles.btnRow}>
                <Button title="Go to Details" onPress={() => navigation.navigate("Details")}/>
                <Button title="Open Menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
            </View>
        </View>
    )
}