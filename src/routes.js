import React from "react";
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
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
        <Route path='/' exact={true} component={Home} />
        <Route path='/MainProducts' component={MainProducts} />
    </NativeRouter>
);

export default routes;
