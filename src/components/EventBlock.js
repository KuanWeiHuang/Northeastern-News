import React, { useReducer } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import { Feather, Entypo, MaterialIcons } from "@expo/vector-icons";
const reducer = (state, action) => {
  //action={type:'like' || 'mark'}
  switch (action.type) {
    case "like":
      if (state.like) {
        return { ...state, like: (state.like = false) };
      } else {
        return { ...state, like: (state.like = true) };
      }

    case "mark":
      if (state.mark) {
        return { ...state, mark: (state.mark = false) };
      } else {
        return { ...state, mark: (state.mark = true) };
      }
    default:
      return state;
  }
};

const EventBlock = ({
  day,
  year,
  title,
  time,
  describe,
  linkScreen,
  navigation
}) => {
  const [state, dispatch] = useReducer(reducer, {
    like: false,
    mark: false
  });

  return (
    <SafeAreaView style={{ height: 250 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.day}>{year}</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={styles.dot} />
          <View style={styles.line} />
        </View>

        <View style={styles.block}>
          {/* text and image block */}
          <TouchableOpacity
            onPress={() => navigation.navigate(`${linkScreen}`)}
          >
            <View style={styles.detailText}>
              <Text style={styles.detailTitle}>{title}</Text>
              <Text style={styles.detailTime}>{time}</Text>
              <Text>{describe}</Text>
            </View>
          </TouchableOpacity>

          {/* icons */}
          <View style={styles.iconBlock}>
            <View style={styles.tag}>
              <Feather name="tag" size={25} style={styles.icon} />
              <Text> Events</Text>
            </View>
            {/* right three icon  */}
            <View style={styles.threeIcons}>
              <TouchableOpacity onPress={() => dispatch({ type: "like" })}>
                <View style={{ width: 25, height: 25 }}>
                  {state.like ? (
                    <Entypo name="heart" size={25} color="#E22C2C" />
                  ) : (
                    <Entypo
                      name="heart-outlined"
                      size={25}
                      style={styles.icon}
                    />
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => dispatch({ type: "mark" })}>
                <View style={{ width: 25, height: 25 }}>
                  {state.mark ? (
                    <MaterialIcons name="bookmark" size={25} color="#FCA42D" />
                  ) : (
                    <MaterialIcons
                      name="bookmark-border"
                      size={25}
                      style={styles.icon}
                    />
                  )}
                </View>
              </TouchableOpacity>

              <Feather name="share" size={22} style={styles.icon} />
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
    // borderColor: "blue",
    // borderWidth: 1
  },
  tag: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
    // borderColor: "red",
    // borderWidth: 1
  },
  threeIcons: {
    flex: 1,
    left: 10,
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-evenly"
    // borderColor: "green",
    // borderWidth: 1
  },
  icon: {
    opacity: 0.8
  }
});

export default withNavigation(EventBlock);
