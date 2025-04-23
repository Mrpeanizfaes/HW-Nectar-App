import { ScrollView } from "react-native";
import ExploreHeader from "./components/ExploreHeader";
import ProductList from "./components/ProductList";

export default function ExploreScreen() {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ExploreHeader />
      <ProductList />
    </ScrollView>
  );
}
