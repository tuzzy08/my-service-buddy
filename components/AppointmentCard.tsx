import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "./Card";

export function AppointmentCard({ ribbonColor }: { ribbonColor: string }) {
  return (
    <View style={{ flexDirection: "row", gap: 8, width: "90%" }}>
      <View style={[styles.ribbon, { backgroundColor: ribbonColor }]}></View>
      <Card style={styles.card}>
        <Text style={{ color: "#000" }}>Notification card</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp("50%"),
    height: hp("13%"),
    backgroundColor: "#e3e3e3", // semi-transparent white background
    borderRadius: 5,
    padding: 10,
  },
  ribbon: {
    width: wp("5%"),
    height: hp("13%"),

    borderRadius: 7,
  },
});
