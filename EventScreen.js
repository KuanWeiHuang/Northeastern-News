import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventBlock from "../components/EventBlock";

const EventScreen = () => {
  return (
    <ScrollView>
      <View style={styles.line} />
      <View>
        <EventBlock
          day="Feb 29"
          year="2020"
          title="Technical Interview Workshp with Michelle Lu"
          time="4:30-5:00 pm"
          describe="aaaadsfsadfsdfasdfsdfasfsadfsafaaaadsfsadfsdfasdfsdfasfsadfsafaaaadsfsadfsdfasdfsdfasfsadfsafaaaadsfsadfsdfasdfsdfasfsadfsaf"
        />
        <EventBlock
          day="Feb 29"
          year="2020"
          title="bbb"
          time="4:30-5:00 pm"
          describe="aaaadsfsadfsdfasdfsdfasfsadfsaf"
        />
        <EventBlock
          day="Feb 28"
          year="2020"
          title="ccc"
          time="4:30-5:00 pm"
          describe="aaaadsfsadfsdfasdfsdfasfsadfsaf"
        />
        <EventBlock
          day="Feb 28"
          year="2020"
          title="ccc"
          time="4:30-5:00 pm"
          describe="aaaadsfsadfsdfasdfsdfasfsadfsaf"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    flex: 1,
    width: 1.5,
    backgroundColor: "#373737",
    position: "relative",
    left: 95,
    opacity: 0.5
  }
});

export default EventScreen;
