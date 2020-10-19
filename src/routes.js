import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { chatLeave } from "./store/modules/chat/actions";
import { TouchableOpacity, Image } from "react-native";

import Colors from "./data/Colors";

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
// import Register from "./screens/Register";
import UfprRegister from "./screens/UfprRegister/Index";
import FinishUfprRegister from "./screens/UfprRegister/FinishUfprRegister";

import LoadComponent from "./components/Load/LoadComponent";
import CustomDrawer from "./components/CustomDrawer";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const StackRoutes = ({ navigation, route }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      initialRouteName="MainProducts"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="MainProducts"
        component={MainProducts}
        options={{
          headerStyle: {
            backgroundColor: Colors.backgroundWhite,
            elevation: 0,
          },
          headerShown: true,
          title: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="align-left"
                size={20}
                color="#c4c4c4"
                style={{ marginLeft: 18 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchProduct")}
            >
              <Icon
                name="search"
                size={20}
                color="#c4c4c4"
                style={{ marginRight: 18 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.backgroundWhite,
            elevation: 0,
          },
          headerShown: true,
          title: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="align-left"
                size={20}
                color="#c4c4c4"
                style={{ marginLeft: 18 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchProduct")}
            >
              <Icon
                name="search"
                size={20}
                color="#c4c4c4"
                style={{ marginRight: 18 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({ route }) => ({
          headerShown: true,
          title: route.params.product,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MainProducts");
              }}
            >
              <Icon
                name="arrow-left"
                size={20}
                color="#c4c4c4"
                style={{ marginLeft: 18 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Image
              source={{ uri: route.params.url }}
              style={{
                height: 40,
                width: 40,
                marginRight: 18,
                borderRadius: 25,
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ConfirmAnnouncement"
        component={ConfirmAnnouncement}
      />
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="UfprRegister" component={UfprRegister} />
      <Stack.Screen name="FinishUfprRegister" component={FinishUfprRegister} />
    </Stack.Navigator>
  );
};

function Routes() {
  const user = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={(props) => <CustomDrawer {...props} />}
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
        name="Products"
        component={StackRoutes}
        options={{ title: "Loja" }}
      />
      <Drawer.Screen
        name="ChatList"
        component={ChatList}
        options={{ title: "Chat" }}
        listeners={{
          focus: () => {
            dispatch(chatLeave());
          },
        }}
      />
      <Drawer.Screen
        name="Register"
        component={Register}
        options={{ title: "Register" }}
      />
      <Drawer.Screen
        name="UfprRegister"
        component={UfprRegister}
        options={{ title: "UfprRegister" }}
      />
      <Drawer.Screen
        name="FinishUfprRegister"
        component={FinishUfprRegister}
        options={{ title: "FinishUfprRegister" }}
      />
      <Drawer.Screen
        name="CreateAnnouncement"
        component={CreateAnnouncement}
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
