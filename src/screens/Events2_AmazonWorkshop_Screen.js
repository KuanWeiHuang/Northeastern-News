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

const Events2_AmazonWorkshop_Screen = ({ navigation }) => {
  const date = "Mar 18, 2020";
  const label = "Interview Events";
  const titleCorona = "Amazon Interview 101 Workshop(Webinar)";
  //const photoAuthor = "by Northeastern University - San Francisco Bay Area";
  const paragraph1 =
    "This webinar will focus on detailing how Amazon's onsite interview loop works and how to “ace it”.   Insight will be shared into the behavioral portions of the interview, " +
    "which often “make or break” candidates.  Students who log in to this webinar will also learn how they can be entered into an exclusive raffle for even greater insight and " +
    "support into setting themselves up for success @ Amazon.\n\n" +
    "Webinar Presenter: Nick Dimitrov, founder and CEO of Amazon Bound and former Amazon Bar Raiser.  " +
    "Nick is also a proud Northeastern University alum and was recently the December 2019 Northeastern Seattle commencement keynote speaker.\n\n" +
    "If interested in being added to the RSVP list for this virtual workshop, please email Patrick Chidsey ( p.chidsey@northeastern.edu ) with the following information and plan on marking your calendar to attend.  " +
    "Name, (NU Seattle, NU SFBA), preferred email address and academic program (CPS-Analytics, CPS-PJM, Align, MSCS, COE-IS, COE-IoT).  Students on RSVP will be provided virtual access/the weblink the day of the workshop.";
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
          style={{
            borderBottomWidth: 1.5,
            borderBottomColor: "#a9a9a9"
          }}
        />
        <Text style={styles.titleStyle}>{titleCorona}</Text>
        <Text style={styles.subTitleStyle}>by Nick Dimitrov</Text>

        <Image
          style={styles.imageStyle}
          source={require("../../assets/Events2_AmazonWorkshop_Screen.png")}
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
    // height: 300, //220,
    width: 375,
    borderRadius: 10,
    marginBottom: 5,
    resizeMode: "stretch"
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

export default Events2_AmazonWorkshop_Screen;
