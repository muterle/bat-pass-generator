import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: "#000",
    marginTop: 10,
  },
  buttonSize: {
    alignItems: "center",
    justifyContent: "center",
    width: "17.5%",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: "#000",
    marginTop: 10,
  },
  buttonSizeSelected: {
    alignItems: "center",
    justifyContent: "center",
    width: "17.5%",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: "#4D4D4D",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#E5DF3C",
  },
  textSize: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#E5DF3C",
    marginTop: 15,
  },
  buttonsSize: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
