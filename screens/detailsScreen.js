import {View, Text, Button} from 'react-native';
import globalStyles from "../globalStyles";
import {DrawerActions, useNavigation} from "@react-navigation/native";

export default function DetailsScreen(props) {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Text>
                From Athens to Olympus, Greece’s whole ancient history was tied up in the gods and their whims! Gods, demigods,
                and more – there are so many myths it would take a lifetime to study them all! We don’t have quite that long.
            </Text>

            <View style={globalStyles.btnRow}>
                <Button title="Open Menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
            </View>
        </View>
    )
}