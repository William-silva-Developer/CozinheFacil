import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details/Details";
import { Search } from "../pages/Search";



const { Navigator, Screen } = createNativeStackNavigator();

function StackRoute() {

    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            
            <Screen
                name="Details"
                component={Details}
                
            />
            
            <Screen
                name="Search"
                component={Search}
                options={{
                    
                    headerStyle: {
                        
                        backgroundColor: '#fff'
                    }
                }}
            />
        </Navigator>
    )
}

export {StackRoute};