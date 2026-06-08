import {createDrawerNavigator} from "@react-navigation/drawer";
import ProfileScreen from "../screens/profileScreen";
import CustomDrawerContent from "../components/customDrawerContent";
import HomeStackNavigator from "./homeStackNavigator";
import UserStackNavigator from "./userStackNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeStackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Users" component={UserStackNavigator} />
        </Drawer.Navigator>
    )
}