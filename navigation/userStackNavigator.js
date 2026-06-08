import {createNativeStackNavigator} from "@react-navigation/native-stack";
import UserProfileScreen from "../screens/userProfileScreen";
import UserListScreen from "../screens/userListScreen";

const Stack = createNativeStackNavigator();

export default function UserStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="UserList" component={UserListScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        </Stack.Navigator>
    )
}