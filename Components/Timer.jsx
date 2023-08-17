import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useStore from "../store";
import { FontAwesome } from "@expo/vector-icons";

const Timer = () => {
  const { data, setData } = useStore();
  const [time, setTime] = useState(data * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleUpdate = (item) => {
    setData(item);
    setTime(item * 60);
    setSelectedButton(item); // Update selectedButton state
  };

  const getButtonColor = (duration) => {
    return selectedButton === duration ? "#d0cdcd" : "#29292e";
  };

  const getStartButtonColor = () => {
    return selectedButton === 25 ? "#00875f" : "#ab222e";
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleUpdate(15)}
          style={[styles.iconleft, { backgroundColor: getButtonColor(15) }]}
        >
          <FontAwesome5 name="bed" size={34} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUpdate(5)}
          style={[styles.iconcenter, { backgroundColor: getButtonColor(5) }]}
        >
          <MaterialCommunityIcons name="sleep" size={34} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUpdate(25)}
          style={[styles.iconright, { backgroundColor: getButtonColor(25) }]}
        >
          <FontAwesome5 name="brain" size={34} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.textcontain}>
        <Text
          style={{ fontFamily: "RobotoMonoBold", fontSize: 80, color: "white" }}
        >
          {formatTime()}
        </Text>
      </View>
      <View style={styles.buttoncontain}>
        {isActive ? (
          <>
            <TouchableOpacity
              onPress={handleStartStop}
              style={[styles.button, { backgroundColor: "#ab222e" }]}
            >
              <Text
                style={{
                  fontFamily: "VazirBold",
                  fontSize: 20,
                  color: "white",
                }}
              >
                متوقف
              </Text>
              <FontAwesome name="stop-circle" size={24} color="white" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={handleStartStop}
              style={[styles.button, { backgroundColor: "#00875f" }]}
            >
              <Text
                style={{
                  fontFamily: "VazirBold",
                  fontSize: 20,
                  color: "white",
                }}
              >
                شروع
              </Text>
              <Ionicons name="play-circle-sharp" size={24} color="white" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Timer;
const styles = StyleSheet.create({
  maincontainer: {
    paddingTop: 20,
    backgroundColor: "#202024",
    width: "100%",
    flex: 0.95,
  },
  container: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  iconleft: {
    backgroundColor: "#232327",
    padding: 20,
    width: 80,
    height: 80,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    borderTopRightRadius: 30,
  },
  iconcenter: {
    backgroundColor: "#232327",
    padding: 20,
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  iconright: {
    backgroundColor: "#232327",
    padding: 20,
    width: 80,
    height: 80,
    borderBottomLeftRadius: 30,
    overflow: "hidden",
    borderTopLeftRadius: 30,
  },
  textcontain: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  buttoncontain: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
    height: 30,
    width: "100%",
  },
  button: {
    width: 300,
    height: 60,
    backgroundColor: "#00875f",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
