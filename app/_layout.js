import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { createContext, useState } from "react";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();






const Layout = () => {



  const [fontsLoaded] = useFonts({
    RobotoMonoBold: require("../assets/fonts/robotomono/RobotoMono-Bold.ttf"),
    RobotoMonoMedium: require("../assets/fonts/robotomono/RobotoMono-Regular.ttf"),
    RobotoMonoLight: require("../assets/fonts/robotomono/RobotoMono-Light.ttf"),
    VazirBold: require("../assets/fonts/vazir/Vazirmatn-Bold.ttf"),
    VazirMedium: require("../assets/fonts/vazir/Vazirmatn-Regular.ttf"),
    VazirLight: require("../assets/fonts/vazir/Vazirmatn-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

      <Stack />
      

  )
};

export default Layout;