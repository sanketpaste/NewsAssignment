import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "../../../App";
import NewsDetail from "../../containers/MyScreens/NewsDetail";
import PoliticsScreen from "../../containers/MyScreens/PoliticsScreen";
import SportScreen from "../../containers/MyScreens/SportScreen";

const Stack = createNativeStackNavigator();



 function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      
        <Stack.Screen name="Home" component={App} 
        options={{
          title:'CNBC',
          headerTitleStyle:{fontWeight:'900',fontSize:15}
          
        }}/>
        <Stack.Screen name="NewsDetail" component={NewsDetail}/>
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Main