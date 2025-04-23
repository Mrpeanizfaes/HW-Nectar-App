import { Image, ScrollView, TouchableOpacity } from "react-native";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import HomeHeader from "./components/HomeHeader";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const exclusiveOffers = [
    {
      img: require("../../assets/images/banana.png"),
      name: "Organic Bananas",
      desc: "7pcs, Priceg",
      price: "4.99",
    },
    {
      img: require("../../assets/images/apple.png"),
      name: "Red Apple",
      desc: "1kg, Priceg",
      price: "4.99",
    },
    {
      img: require("../../assets/images/pepper.png"),
      name: "Bell Pepper Red",
      desc: "1kg, Priceg",
      price: "4.99",
    },
  ];

  const bestSelling = [
    {
      img: require("../../assets/images/pepper.png"),
      name: "Bell Pepper Red",
      desc: "1kg, Priceg",
      price: "4.99",
    },
    {
      img: require("../../assets/images/fuel.png"),
      name: "Ginger",
      desc: "250gm, Priceg",
      price: "4.99",
    },
    {
      img: require("../../assets/images/banana.png"),
      name: "Organic Bananas",
      desc: "7pcs, Priceg",
      price: "4.99",
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <HomeHeader />
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetail")}>
        <Image
          style={{
            width: "90%",
            alignSelf: "center",
            borderRadius: 8,
            marginVertical: 20,
          }}
          source={require("../../assets/images/banner.png")}
        />
      </TouchableOpacity>
      <ProductList name="Exclusive Offer">
        {exclusiveOffers.map((item, index) => (
          <Product
            key={`exclusive-${index}`}
            img={item.img}
            name={item.name}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </ProductList>
      <ProductList name="Best Selling">
        {bestSelling.map((item, index) => (
          <Product
            key={`best-${index}`}
            img={item.img}
            name={item.name}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </ProductList>
    </ScrollView>
  );
}
