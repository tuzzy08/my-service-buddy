import { StyleSheet, View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
