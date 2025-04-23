import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ExpandableListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.itemTouchable}>
        <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.title}</Text>
      </TouchableOpacity>
      {expanded && <Text style={styles.itemContent}>{item.content}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "column",
    padding: 10,
  },
  itemContent: {
    fontSize: 13,
    lineHeight: 21,
    paddingVertical: 10,
  },
});
