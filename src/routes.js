import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import MainProducts from "./screens/MainProducts";
import UserPage from "./screens/UserPage";
import ProductScreen from "./screens/ProductScreen";
import ChatScreen from "./screens/ChatScreen";
import ChatList from "./screens/ChatList";
import CreateAnnouncement from "./screens/Annoucement";
import ConfirmAnnouncement from "./screens/ConfirmAnnoucement";
import SearchProduct from "./screens/SearchProduct";
import Register from "./screens/Register";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MainProducts" component={MainProducts} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="UserPage" component={UserPage} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="CreateAnnouncement" component={CreateAnnouncement} />
      <Stack.Screen
        name="ConfirmAnnouncement"
        component={ConfirmAnnouncement}
      />
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
    </Stack.Navigator>
  );
}

export default Routes;
