import { FlatList } from "react-native";
import { ExpandableListItem } from "./ExpandableListItem";

export const ExpandableList = ({ data }) => {
  const renderItem = ({ item }) => <ExpandableListItem item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
