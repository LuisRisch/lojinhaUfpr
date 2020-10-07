import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
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

const routes = () => (
    <NativeRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/MainProducts" component={MainProducts} />
        <Route path='/Register' component={Register} />
        <Route path='/ProductScreen' component={ProductScreen} />
        <Route path='/UserPage' component={UserPage} />
        <Route path='/ChatScreen' component={ChatScreen} />
        <Route path='/ChatList' component={ChatList} />
        <Route path='/CreateAnnouncement' component={CreateAnnouncement} />
        <Route path='/ConfirmAnnouncement' component={ConfirmAnnouncement} />
        <Route path='/SearchProduct' component={SearchProduct} />
    </NativeRouter>
);

export default routes;
