import { RVForm } from "@/components/RVForm";
import { useState } from "react";
import { Button, Form, H4, H5, Input, Text, View, Label } from "tamagui";

export default function ReturnVisit() {
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  );
  const handleSubmit = () => {};
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <RVForm submitHandler={handleSubmit} />
    </View>
  );
}
