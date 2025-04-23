import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 18, height: 21, marginRight: 5 }}
          source={require("../../../assets/icons/location.png")}
        />
        <Text style={styles.location}>Ha Noi, Viet Nam</Text>
      </View>
      <TextInput
        placeholder="Search store"
        style={styles.searchInput}
        placeholderTextColor="#7C7C7C"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
  },
  location: {
    fontSize: 18,
    color: "#4C4F4D",
    fontWeight: 600,
  },
  searchInput: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F2F3F2",
    paddingHorizontal: 20,
    marginTop: 20,
    fontSize: 16,
  },
});
