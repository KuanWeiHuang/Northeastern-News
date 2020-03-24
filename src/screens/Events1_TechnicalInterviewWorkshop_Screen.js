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

const Events1_TechnicalInterviewWorkshop_Screen = ({ navigation }) => {
  //from web:https://www.eventbrite.com/e/technical-interview-workshop-registration-97392301997#
  const date = "Mar 12, 2020";
  const label = "Interview Events";
  const titleCorona = "Technical Interview Workshop";
  const photoAuthor = "by Northeastern University - San Francisco Bay Area";
  const paragraph1 =
    "Technical Interviews are often used by companies to test your technical knowledge and evaluate the way you think. " +
    "These questions can test your problem solving or reasoning skills. This workshop will teach students will how to examine and answer a data analyst interview question.\n\n" +
    "Michelle will help students learn...\n\n" +
    "the structure of a technical interview and take home assessment\n\n" +
    "how to prepare before the interview\n\n" +
    "how to approach questions during the interview\n\n" +
    "Michelle Lu is a Strategy and Analytics Associate at Google and Northeastern's Career Development Consultant. " +
    "She previously spent three years at Deloitte Consulting and has held numerous career-related workshops and one-on-one coaching sessions.";
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
          source={require("../../assets/TechnicalInterviewWorkshop.png")}
        />
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Text style={styles.photoAuthorStyle}>{photoAuthor}</Text>
        </View>
        <Text style={styles.paraContentStyle}>{paragraph1}</Text>
      </ScrollView>
      <View style={{ alignItems: "flex-end" }}>
        <View style={styles.iconsViewStyle}>
          <TouchableOpacity>
            <Entypo name="heart-outlined" size={25} style={styles.iconStyle} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  headStyle: {
    fontSize: 18,
    //fontFamily: 'Arial Rounded MT Bold',
    color: "#373737",
    alignContent: "space-between"
  },
  subTitleStyle: {
    fontSize: 14,
    //fontFamily: 'Arial',
    color: "#373737",
    marginTop: 6,
    marginBottom: 11
  },
  titleStyle: {
    fontSize: 16,
    //fontFamily: 'Lucida Grande bold',
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
    flex: 1,
    // height: 600, //750,///////////////////////////////cannot see the icons
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
    //fontFamily: 'Arial',
    color: "#373737",
    marginBottom: 8
  },
  paraContentStyle: {
    fontSize: 12,
    //fontFamily: 'Arial',
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

export default Events1_TechnicalInterviewWorkshop_Screen;
