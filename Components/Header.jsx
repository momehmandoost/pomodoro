import React, { useContext } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import useStore from "../store";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  // const { data, setData } = useStore();

  // const handleUpdate = () => {
  //   setData("reza");
  // };
  // const user = useContext(UserContext);

  return (
    <View style={styles.container}>
      {/* <Text>Data from store: {data}</Text>
      <TouchableOpacity onPress={handleUpdate}>
        <Text>Update Data</Text>
      </TouchableOpacity> */}
      <Image
        source={require("../assets/Logo.png")}
        // style={{ width: 50, height: 50, resizeMode: "contain" }}
        resizeMode="cover"
      />
      <View style={styles.right}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontFamily: "VazirBold",
              fontSize: 20,
              color: "white",
            }}
          >
            تودو
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontFamily: "VazirBold",
              fontSize: 20,
              color: "white",
            }}
          >
            پومودورو{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    direction: "ltr",
    justifyContent: "space-between",
  },
  right: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#29292e",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
