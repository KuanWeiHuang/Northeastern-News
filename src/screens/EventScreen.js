import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventBlock from "../components/EventBlock";
import Banner2 from "../components/Banner2";

const EventScreen = () => {
  return (
    <View>
      <Banner2 />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.line}></View>
        <View>
          <EventBlock
            day="Feb 29"
            year="2020"
            title="Technical Interview Workshp with Michelle Lu"
            time="4:30-5:00 pm"
            describe="aaaadsfsadfsdfasdfsdfasfsadfsafaaaadsfsadfsdfasdfsdfasfsadfsafaaaadsfsadfsdfasdfsdfasfsadfsafaaaadsfsadfsdfasdfsdfasfsadfsaf"
            linkScreen="EventDetailDemo"
          />
          <EventBlock
            day="Feb 29"
            year="2020"
            title="bbb"
            time="4:30-5:00 pm"
            describe="aaaadsfsadfsdfasdfsdfasfsadfsaf"
            linkScreen="EventDetail"
          />
          <EventBlock
            day="Feb 28"
            year="2020"
            title="ccc"
            time="4:30-5:00 pm"
            describe="aaaadsfsadfsdfasdfsdfasfsadfsaf"
            linkScreen="EventDetail"
          />
          <EventBlock
            day="Feb 28"
            year="2020"
            title="ccc"
            time="4:30-5:00 pm"
            describe="aaaadsfsadfsdfasdfsdfasfsadfsaf"
            linkScreen="EventDetail"
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
