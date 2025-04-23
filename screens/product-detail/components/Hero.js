import { View, Image, StyleSheet } from "react-native";

export default function Hero() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/back.png")}
        />
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/share.png")}
        />
      </View>
      <Image
        style={styles.img}
        source={require("../../../assets/images/apple.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginBottom: 10,
    width: "100%",
    height: 380,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#F2F3F2",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  icon: {
    width: 20,
    height: 20,
  },
  img: {
    width: "80%",
    height: 200,
  },
});
