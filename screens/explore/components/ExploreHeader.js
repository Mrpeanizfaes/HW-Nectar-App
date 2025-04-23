import { View, Text, TextInput, StyleSheet } from "react-native";

export default function ExploreHeader() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#181725", fontSize: 18, fontWeight: 600 }}>
        Find Products
      </Text>
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
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 60,
    marginBottom: 20,
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
