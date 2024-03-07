import { StyleSheet } from "react-native";
import { Button, Text, View, XStack } from "tamagui";
import React from "react";
import { Briefcase, BookOpenText } from "@tamagui/lucide-icons";

export function Actions() {
  return (
    <XStack gap="$5" justifyContent="center">
      <Button
        color={"#f55951"}
        variant="outlined"
        borderColor={"#f55951"}
        iconAfter={Briefcase}
      >
        New Return Visit
      </Button>
      <Button
        color={"#f55951"}
        variant="outlined"
        borderColor={"#f55951"}
        iconAfter={BookOpenText}
      >
        Record Study
      </Button>
    </XStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 90,
    width: "100%",
    backgroundColor: "grey",
    marginTop: 30,
  },
});
