import React from "react";
import SignUp from "./src/SignUp";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const App = createStackNavigator(
  {
    SignUp: { screen: SignUp }
  },
  {
    initialRouteName: "SignUp"
  }
);

export default createAppContainer(App);
