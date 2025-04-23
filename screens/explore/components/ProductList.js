import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  const products = [
    {
      id: 1,
      title: "Fresh Fruits & Vegetable",
      color: "#53B175B2",
      img: require("../../../assets/images/freshfruit.png"),
    },
    {
      id: 2,
      title: "Cooking Oil & Ghee",
      color: "#F8A44CB2",
      img: require("../../../assets/images/oil.png"),
    },
    {
      id: 3,
      title: "Meat & Fish",
      color: "#F7A593",
      img: require("../../../assets/images/meat.png"),
    },
    {
      id: 4,
      title: "Bakery & Snacks",
      color: "#D3B0E0",
      img: require("../../../assets/images/bread.png"),
    },
    {
      id: 5,
      title: "Dairy & Eggs",
      color: "#FDE598",
      img: require("../../../assets/images/egg.png"),
    },
    {
      id: 6,
      title: "Beverages",
      color: "#B7DFF5",
      img: require("../../../assets/images/beverage.png"),
    },
  ];
  return (
    <View style={styles.container}>
      {products.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.product,
            { backgroundColor: `${item.color}33`, borderColor: item.color },
          ]}
        >
          <Image
            style={{ width: 130, height: 100, resizeMode: "contain" }}
            source={item.img}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: 0.1,
              lineHeight: 22,
              color: "#181725",
              marginVertical: 10,
            }}
          >
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  product: {
    borderRadius: 18,
    borderWidth: 1,
    width: "48%",
    marginBottom: 10,
    padding: 10,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
