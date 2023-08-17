import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";



const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "white" },
                    headerShadowVisible: false,

                    headerTitle: "",
                }}
            />

            <View><Text style={{ fontFamily: "RobotoMonoBold" }}>Hi I'm Mo Mehmandoost</Text></View>
        </SafeAreaView>
    );
};

export default Home;