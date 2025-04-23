import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

export default function Product(props) {
  return (
    <View style={styles.container}>
      <Image source={props.img} style={styles.img} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.desc}>{props.desc}</Text>
      <View style={styles.action}>
        <Text style={styles.price}>${props.price}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              color: "#fff",
              fontWeight: 400,
              fontSize: 30,
              textAlign: "center",
              margin: 0,
              lineHeight: 30,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Product.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 15,
    borderWidth: 1,
    marginHorizontal: 8,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    width: 170,
  },
  img: {
    width: 130,
    height: 120,
    borderRadius: 18,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  desc: {
    fontSize: 12,
    color: "#AFAFAF",
    marginTop: 5,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  btn: {
    backgroundColor: "#53B175",
    width: 45,
    height: 45,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
});
