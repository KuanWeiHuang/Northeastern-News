import React, { useState, useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const EventDetailDemo = () => {
  return (
    <>
      <Text>Event Detail screen</Text>
      <Text>
        In light of the COVID-19 pandemic, and following the guidance of public
        health authorities, as well as the expertise in infectious diseases of
        its own faculty, Northeastern University will move to online teaching
        for students at its Boston campus starting Thursday, March 12. Students
        currently working on co-op are not affected by the move to online and
        remote instruction on the Boston campus. The shift to online learning
        does not mean that students in Northeastern residence halls need to move
        out. While students may elect to do so, the university is “committed to
        maintaining continuity of campus life for those who elect to stay,”
        Joseph E. Aoun, president of Northeastern, wrote in a message to
        students, faculty, and staff.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default EventDetailDemo;
