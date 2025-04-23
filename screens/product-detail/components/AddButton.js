import { Text, TouchableOpacity } from "react-native";

export default function AddButton() {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        padding: 25,
        borderRadius: 19,
        backgroundColor: "#53B175",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Text style={{ color: "#FFF9FF", fontSize: 18, fontWeight: 600 }}>
        Add To Basket
      </Text>
    </TouchableOpacity>
  );
}
