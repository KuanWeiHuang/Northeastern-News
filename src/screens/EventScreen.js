import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventBlock from "../components/EventBlock";
import Banner from "../components/Banner";

const EventScreen = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.line}></View>
        <View>
          <EventBlock
            day="Mar 12"
            year="2020"
            title="Technical Interview Workshp with Michelle Lu"
            time="4:30-5:00 pm"
            describe="This workshop will teach students will how to examine and answer a data analyst interview question."
            linkScreen="Event1"
            imageSource="../../assets/event1image.png"
          />
          <EventBlock
            day="Feb 29"
            year="2020"
            title="Case Study Workshop"
            time="4:30-5:00 pm"
            describe="aaaadsfsadfsdfasdfsdfasfsadfsafsafsafafasdfasfasfasfffaf"
            linkScreen="EventDetail"
            imageSource=""
          />
          <EventBlock
            day="Feb 28"
            year="2020"
            title="ccc"
            time="4:30-5:00 pm"
            describe="aaaadsfsadfsdfasdfsdfasfsadfsafaaaadsfsadfsdfasdfsdfasfsadfsafaaaadsfsadfsdfasdfsdfasfsadfsaf"
            linkScreen="EventDetail"
            imageSource=""
          />
          <EventBlock
            day="Feb 28"
            year="2020"
            title="ccc"
            time="4:30-5:00 pm"
            describe="aaaadsfsadfsdfasdfsdfasfsadfsaf"
            linkScreen="EventDetail"
            imageSource=""
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    borderWidth: 2,
    borderColor: "red"
  },
  line: {
    width: 1,
    backgroundColor: "#9b9b9b",
    marginLeft: 95,
    ...StyleSheet.absoluteFillObject
  }
});

export default EventScreen;
