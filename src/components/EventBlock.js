import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const EventBlock = props => {
  console.log(props);
  return (
    <SafeAreaView style={{ height: 250 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.day}>{props.day}</Text>
          <Text style={styles.day}>{props.year}</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={styles.dot} />
          <View style={styles.line} />
        </View>

        <View style={styles.block}>
          {/* text and image block */}
          <TouchableOpacity>
            <View style={styles.detailText}>
              <Text style={styles.detailTitle}>{props.title}</Text>
              <Text style={styles.detailTime}>{props.time}</Text>
              <Text>{props.describe}</Text>
            </View>
          </TouchableOpacity>

          {/* icons */}
          <View style={styles.iconBlock}>
            <View style={styles.tag}>
              <Ionicons name="ios-checkmark" size={30} />
              <Text> Events</Text>
            </View>
            <View style={styles.likes}>
              <Ionicons name="ios-checkmark" size={30} />
              <Ionicons name="ios-checkmark" size={30} />
              <Ionicons name="ios-checkmark" size={30} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
  },
  block: {
    height: 228,
    width: 280,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3.84,
    backgroundColor: "white"
  },

  day: {
    fontSize: 18,
    fontFamily: "ArialRoundedMTBold"
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    marginTop: 10,
    color: "#373737"
  },
  line: {
    height: 250,
    width: 1.5,
    backgroundColor: "#373737",
    opacity: 0.5
  },
  detailText: {
    padding: 15,
    height: 180
    // justifyContent: "space-between",
  },
  detailTitle: {
    fontFamily: "ArialHebrew-Bold",
    fontSize: 18,
    color: "#373737",
    paddingBottom: 7
  },
  detailTime: {
    fontFamily: "ArialHebrew",
    fontSize: 16,
    color: "#373737",
    paddingBottom: 7
  },
  detailDescribe: {
    fontFamily: "ArialHebrew",
    fontSize: 12,
    color: "#373737",
    paddingBottom: 7
  },
  iconBlock: {
    flexDirection: "row",
    width: 280
    // justifyContent: "space-around",
    // borderColor: "blue",
    // borderWidth: 1
  },
  tag: {
    flex: 1,
    flexDirection: "row",
    // marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center"
    // borderColor: "red",
    // borderWidth: 1
  },
  likes: {
    flex: 1,
    left: 10,
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-evenly"
    // borderColor: "green",
    // borderWidth: 1
  }
});

export default EventBlock;
