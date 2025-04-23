import { Image, StyleSheet, Text, View } from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 160,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: "#181725",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          Naturel Red Apple
        </Text>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../assets/icons/heart.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 200,
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 400, color: "#B3B3B3" }}>
            -
          </Text>
          <Text style={styles.count}>1</Text>
          <Text style={{ fontSize: 30, fontWeight: 400, color: "#53B175" }}>
            +
          </Text>
        </View>
        <Text style={{ color: "#181725", fontSize: 24, fontWeight: 600 }}>
          $4.99
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  count: {
    padding: 5,
    paddingHorizontal: 15,
    margin: 10,
    fontSize: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
});
