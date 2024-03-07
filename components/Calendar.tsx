import CalendarStrip from "react-native-calendar-strip";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { StyleSheet, Text, View } from "react-native";
// import { WeekCalendar, CalendarProvider, ExpandableCalendar } from "react-native-calendars";

export function Calendar() {
  return (
    // <CalendarProvider date="2024-03-05" style={styles.provider}>
    <View>
      <CalendarStrip
        scrollable
        scrollerPaging
        style={{
          height: hp("15%"),
          paddingTop: 20,
          paddingBottom: 5,
        }}
        calendarColor={"#3343CE"}
        calendarHeaderStyle={{ color: "white" }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        iconContainer={{ flex: 0.1 }}
      />
      {/* <WeekCalendar testID=""/> */}
    </View>
    // </CalendarProvider>
  );
}

const styles = StyleSheet.create({});
