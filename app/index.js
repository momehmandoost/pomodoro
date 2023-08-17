
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/Header.jsx";
import Timer from "../Components/Timer.jsx";
import { createContext, useState } from "react";



export default function Page() {
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Stack.Screen
                options={{
                    headerShown: false
                    // headerStyle: { backgroundColor: "green" },
                    // headerShadowVisible: false,
                    // headerTitle: "",
                }}
            />
           
                <View style={styles.conntainer}>
                    
                    <Header />
                    <Timer />
                </View>
            


        </SafeAreaView>)
}


const styles = StyleSheet.create({
    conntainer: {
        backgroundColor: "#121214",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        padding: 20,

    }
})
