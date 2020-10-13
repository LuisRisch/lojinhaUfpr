import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

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

import CustomDrawer from "./components/CustomDrawer";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const StackRoutes = () => (
  <Stack.Navigator
    initialRouteName="MainProducts"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="MainProducts" component={MainProducts} />
    <Stack.Screen
      name="ProductScreen"
      component={ProductScreen}
      options={{ headerShown: true, title: "" }}
    />
    <Stack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={{ headerShown: true, title: "" }}
    />
    <Stack.Screen name="CreateAnnouncement" component={CreateAnnouncement} />
    <Stack.Screen name="ConfirmAnnouncement" component={ConfirmAnnouncement} />
    <Stack.Screen name="SearchProduct" component={SearchProduct} />
  </Stack.Navigator>
);

function Routes() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={CustomDrawer}
      drawerContentOptions={{
        activeTintColor: "#ed524a",
        labelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="UserPage"
        component={UserPage}
        options={{ title: "Sua conta" }}
      />
      <Drawer.Screen
        name="MainProducts"
        component={StackRoutes}
        options={{ title: "Loja" }}
      />
      <Drawer.Screen
        name="ChatList"
        component={ChatList}
        options={{ title: "Chat" }}
      />
      <Drawer.Screen
        name="Register"
        component={Register}
        options={{ title: "Anunciar produto/serviço" }}
      />
      <Drawer.Screen
        name="Login"
        component={Home}
        options={{ title: "Sair", gestureEnabled: false }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
