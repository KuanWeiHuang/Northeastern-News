import React, { useReducer } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigation } from "react-navigation";
import { Feather, Entypo, MaterialIcons } from "@expo/vector-icons";
const reducer = (state, action) => {
  //action={type:'like' || 'mark' || 'imageS'}
  switch (action.type) {
    case "like":
      return { ...state, like: (state.like = state.like ? false : true) };

    case "mark":
      return { ...state, mark: (state.mark = state.mark ? false : true) };
    case "imageS":
      return { ...state, imageS: (state.imageS = true) };
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
    mark: false,
    imageS: false
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.day}>{year}</Text>
      </View>

      <View style={styles.dot} />

      <View style={styles.block}>
        {/* text and image block */}
        <View style={styles.touchView}>
          <TouchableOpacity
            style={styles.Text}
            onPress={() => navigation.navigate(`${linkScreen}`)}
          >
            <View>
              <Text style={styles.detailTitle}>{title}</Text>
              <Text style={styles.detailTime}>{time}</Text>
              <Text>{describe}</Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.imageStyle}
            onPress={() => navigation.navigate(`${linkScreen}`)}
          >
            <View
              style={{ width: 100, height: 100, backgroundColor: "red" }}
            ></View>
          </TouchableOpacity> */}
        </View>

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
                  <Entypo name="heart-outlined" size={25} style={styles.icon} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginBottom: 10
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
    backgroundColor: "#373737",
    marginTop: 10
  },
  line: {
    height: 230,
    width: 1.5,
    backgroundColor: "#9b9b9b",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 10
  },
  touchView: {
    width: 280,
    height: 185,
    flexDirection: "row"
    // borderColor: "red",
    // borderWidth: 1
  },
  Text: {
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 5,
    // height: 180,
    flex: 5
    // borderColor: "blue",
    // borderWidth: 1
  },
  imageStyle: {
    flex: 2,
    borderWidth: 1
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
  },
  tag: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  threeIcons: {
    flex: 1,
    left: 10,
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-evenly"
  },
  icon: {
    opacity: 0.8
  }
});

export default withNavigation(EventBlock);
