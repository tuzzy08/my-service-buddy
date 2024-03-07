import {
  Button,
  Form,
  H4,
  H5,
  Input,
  Label,
  TextArea,
  XStack,
  YStack,
} from "tamagui";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function RVForm({ submitHandler }: { submitHandler: () => void }) {
  return (
    <View>
      <Form onSubmit={submitHandler}>
        <YStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="name">
              Name
            </Label>
            <Input flex={1} id="name" placeholder="Enter Name" />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="name">
              Address
            </Label>
            <Input flex={1} id="name" placeholder="01234567" />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="name">
              Phone(if any)
            </Label>
            <Input flex={1} id="name" placeholder="01234567" />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="name">
              Date
            </Label>
            <Input flex={1} id="name" placeholder="01234567" />
          </XStack>
          <TextArea placeholder="Enter any additional notes(Ex. Publication placed etc.)..." />

          <Form.Trigger asChild>
            <Button />
          </Form.Trigger>
        </YStack>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({});
