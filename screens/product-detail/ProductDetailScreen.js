import { ScrollView, View } from "react-native";
import { ExpandableList } from "./components/ExpandableList";
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import AddButton from "./components/AddButton";

export default function ProductDetailScreen() {
  const data = [
    {
      id: 1,
      title: "Product Detail",
      content: `Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.`,
    },
    {
      id: 2,
      title: "Nutritions",
      content: `Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.`,
    },
    {
      id: 3,
      title: "Review",
      content: `Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.`,
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Hero />
      <View style={{ width: "90%", alignSelf: "center" }}>
        <Detail />
        <ExpandableList data={data} />
        <AddButton />
      </View>
    </ScrollView>
  );
}
