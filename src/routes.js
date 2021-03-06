import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { chatLeave } from "./store/modules/chat/actions";
import { TouchableOpacity, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
import ProductSummary from "./screens/ProductSummaryModal/ProductSummar";
import UfprRegister from "./screens/UfprRegister/Index";
import FinishUfprRegister from "./screens/UfprRegister/FinishUfprRegister";
import ConfirmRegister from "./screens/ConfirmRegister";
import PushNotification from "./screens/PushNotificationText";
import EditProduct from "./screens/EditProduct";
import FullScreenImage from "./screens/FullScreenImage";
import ForgotPassword from "./screens/ForgotPassword";
import MyProductsScreen from "./screens/MyProductsScreen";
import CustomDrawer from "./components/CustomDrawer";
import Acolhimento from "./screens/Acolhimento";
import { StackActions } from "@react-navigation/native";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const LoginRoutes = ({ navigation, route }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Home} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerStyle: {
            backgroundColor: Colors.backgroundWhite,
            elevation: 0,
          },
          headerShown: true,
          title: "Cadastro",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(StackActions.popToTop())}
            >
              <Icon
                name="chevron-left"
                size={20}
                color="#c4c4c4"
                style={{ marginLeft: 18 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="UfprRegister"
        component={UfprRegister}
        options={{
          headerStyle: {
            backgroundColor: Colors.backgroundWhite,
            elevation: 0,
          },
          headerShown: true,
          title: "Registro UFPR",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(StackActions.popToTop())}
            >
              <Icon
                name="chevron-left"
                size={20}
                color="#c4c4c4"
                style={{ marginLeft: 18 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="FinishUfprRegister"
        component={FinishUfprRegister}
        options={{
          headerStyle: {
            backgroundColor: Colors.backgroundWhite,
            elevation: 0,
          },
          title: "Registro UFPR",
          headerLeft: () => <View></View>,
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="ConfirmRegister" component={ConfirmRegister} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      {/* <Stack.Screen name="PushNotification" component={PushNotification} /> */}
    </Stack.Navigator>
  );
};

const StackRoutes = ({ navigation }) => {
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
            backgroundColor: "#fff",
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
            backgroundColor: "#fff",
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
          headerStyle: {
            fontFamily: "ralway-regular-bold",
          },
          title: route.params.title,
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductScreen", {
                  item: route.params.item,
                  categoryLabel: route.params.categoryLabel,
                })
              }
            >
              <Image
                source={{ uri: route.params.url }}
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 18,
                  borderRadius: 25,
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProduct}
        options={{
          headerStyle: {
            backgroundColor: Colors.backgroundWhite,
            elevation: 0,
          },
          headerShown: true,
          title: "Edição de produtos",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(StackActions.popToTop())}
            >
              <Icon
                name="chevron-left"
                size={20}
                color="#c4c4c4"
                style={{ marginLeft: 18 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
      <Stack.Screen
        name="ConfirmAnnouncement"
        component={ConfirmAnnouncement}
      />
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
      <Stack.Screen
        name="Acolhimento"
        component={Acolhimento}
        options={{
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
          },
          headerShown: true,
          title: "Acolhimento UFPR",
          headerTitleAlign: "center",
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
        }}
      />
      <Stack.Screen name="ProductSummary" component={ProductSummary} />
    </Stack.Navigator>
  );
};

const MyProductsStack = ({ navigation, route }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      initialRouteName="Meus Produtos"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="MyProducts"
        component={MyProductsScreen}
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
    </Stack.Navigator>
  );
};

function Routes() {
  const user = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={(props) => <CustomDrawer {...props} user={user} />}
      drawerContentOptions={{
        activeTintColor: "#ed524a",
        labelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen name="UserPage" component={UserPage} />
      <Drawer.Screen name="Products" component={StackRoutes} />
      <Drawer.Screen
        name="ChatList"
        component={ChatList}
        listeners={{
          focus: () => {
            dispatch(chatLeave());
          },
        }}
      />
      <Drawer.Screen name="MyProducts" component={MyProductsStack} />
      <Drawer.Screen name="CreateAnnouncement" component={CreateAnnouncement} />
      <Drawer.Screen
        name="Login"
        component={LoginRoutes}
        options={{ gestureEnabled: false }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
