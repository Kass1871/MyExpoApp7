import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation, DrawerActions} from "@react-navigation/native";
import globalStyles from "../globalStyles";

const USERS = [
    { id: '1', name: 'Alice Johnson' },
    { id: '2', name: 'Bob Smith' },
    { id: '3', name: 'Carol White' },
    { id: '4', name: 'David Brown' },
    { id: '5', name: 'Eva Martinez' },
];

export default function UserListScreen({ navigation }) {
    const renderItem = ({item}) => {
        return(
            <TouchableOpacity style={globalStyles.item} onPress={() => navigation.navigate('UserProfile', {name: item.name})}>
                <Text style={globalStyles.name}>{item.name}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={USERS}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Text stlye={globalStyles.menuBtn}>Open Menu</Text>
            </TouchableOpacity>
        </View>
    )
}