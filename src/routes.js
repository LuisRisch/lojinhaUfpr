import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { userSignOut } from "./store/modules/user/actions";

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
// import Register from "./screens/Register";
import UfprRegister from "./screens/UfprRegister/Index";
import FinishUfprRegister from "./screens/UfprRegister/FinishUfprRegister";
import LoadComponent from "./components/Load/LoadComponent";

import CustomDrawer from "./components/CustomDrawer";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const StackRoutes = ({ navigation }) => (
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
      options={{ headerShown: true, title: "" }}
    />
    {/* <Stack.Screen
      name="Register"
      component={Register}
      options={{ title: "Anunciar produto/serviço" }}
    /> */}
    <Stack.Screen name="ConfirmAnnouncement" component={ConfirmAnnouncement} />
    <Stack.Screen name="SearchProduct" component={SearchProduct} />
  </Stack.Navigator>
);

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
        name="CreateAnnouncement"
        component={CreateAnnouncement}
        options={{ title: "Anunciar produto/serviço" }}
      />
      <Drawer.Screen
        name="Login"
        component={Home}
        options={{ title: "Sair", gestureEnabled: false }}
        listeners={({ navigation, route }) => ({
          // focus: (e) => {
          //   dispatch(userSignOut());
          // },
        })}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
