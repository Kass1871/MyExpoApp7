import { createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import DetailScreen from "../screens/detailsScreen";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    )
}