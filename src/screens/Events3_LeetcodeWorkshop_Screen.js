import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Feather, Entypo, MaterialIcons } from "@expo/vector-icons";

const Events3_LeetcodeWorkshop_Screen = ({ navigation }) => {
  //from web:https://www.youtube.com/watch?v=n8fBF4amfQc
  const date = "Mar 20, 2020";
  const label = "Interview Events";
  const titleCorona = "Free Live Leetcode Practice";
  //const photoAuthor = "by Northeastern University - San Francisco Bay Area";
  const paragraph1 =
    "Hi College of Engineering Huskies!The following opportunity was shared by our Seattle-based College of Engineering Co-op Coordinator Kelsey Kaul, " +
    "who has been working with Professor Ashish on a LeetCode practice series. For those of you seeking to improve your technical interview skills for Co-op or full-time roles, " +
    "this series of workshops will definitely be helpful.\n\nTo help you prepare for internship and FT interviews, our very own Professor Ashish is offering LIVE Leetcode practice every Monday, Wednesday, Friday and Saturday at 5:30pm PST. " +
    "This will begin TOMORROW, Saturday, March 20th. If you have any questions, please reach out to Professor Ashish directly. Thank you for your dedication and support, Professor Ashish!";
  // AvenirNext-UltraLightItalic
  // Baskerville-Italic
  // HelveticaNeue-ThinItalic
  //////72fontFamily: 'HelveticaNeue-ThinItalic',
  return (
    <View style={styles.viewStyle}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.headStyle}>{date}</Text>
          <Text style={{ marginBottom: 10 }}>{label}</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1.5, borderBottomColor: "#a9a9a9" }}
        />
        <Text style={styles.titleStyle}>{titleCorona}</Text>
        <Text style={styles.subTitleStyle}>by Michelle Lu</Text>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/Events3_LeetcodeWorkshop_Screen.png")}
        />
        <Text style={styles.paraContentStyle}>{paragraph1}</Text>

        <View style={{ alignItems: "flex-end" }}>
          <View style={styles.iconsViewStyle}>
            <TouchableOpacity>
              <Entypo
                name="heart-outlined"
                size={25}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="bookmark-border"
                size={25}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="share" size={22} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headStyle: {
    fontSize: 18,
    fontFamily: "Arial Rounded MT Bold",
    color: "#373737",
    alignContent: "space-between"
  },
  subTitleStyle: {
    fontSize: 14,
    fontFamily: "Arial",
    color: "#373737",
    marginTop: 6,
    marginBottom: 11
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: "ArialHebrew-Bold",
    marginTop: 12,
    color: "#373737"
  },

  imageStyle: {
    height: 300, //220,
    width: 375,
    borderRadius: 10,
    marginBottom: 5
  },
  viewStyle: {
    // height: 600, //750,///////////////////////////////cannot see the icons
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between", ///////??
    marginHorizontal: 20,
    marginTop: 10
  },
  lineStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "red"
  },
  photoAuthorStyle: {
    fontSize: 12,
    fontFamily: "Arial",
    color: "#373737",
    marginBottom: 8
  },
  paraContentStyle: {
    fontSize: 12,
    fontFamily: "Arial",
    color: "#373737",
    marginBottom: 13
  },
  iconsViewStyle: {
    flexDirection: "row",
    marginHorizontal: 10 ///////整体的水平间距？
  },
  iconStyle: {
    marginHorizontal: 5
  }
});

export default Events3_LeetcodeWorkshop_Screen;
