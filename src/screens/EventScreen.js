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
            day="Mar 20"
            year="2020"
            title="Free Live Leetcode Practice"
            time="5:30-6:30 pm"
            describe="For those of you seeking to improve your technical interview skills for Co-op or full-time roles, this series of workshops will definitely be helpful."
            linkScreen="Event3"
            imagePath="event3"
          />
          <EventBlock
            day="Mar 18"
            year="2020"
            title="Amazon Interview 101 Workshop(Webinar)"
            time="4:30-5:00 pm"
            describe="This webinar will focus on detailing how Amazon's onsite interview loop works and how to “ace it”. Insight will be shared into the behavioral portions of the interview, which often “make or break” candidates."
            linkScreen="Event2"
            imagePath=""
          />
          <EventBlock
            day="Mar 12"
            year="2020"
            title="Technical Interview Workshp with Michelle Lu"
            time="4:30-5:00 pm"
            describe="This workshop will teach students will how to examine and answer a data analyst interview question."
            linkScreen="Event1"
            imagePath="event1"
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
    marginLeft: 96,
    ...StyleSheet.absoluteFillObject
  }
});

export default EventScreen;
