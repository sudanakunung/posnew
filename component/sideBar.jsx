import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";
const sidebar = ({ navigation }) => {
  const route = useRoute();
  return (
    <View style={styles.container_nav}>
      <Text style={styles.logo}>Kunyung</Text>
      <ScrollView style={{ flex: 1, marginTop: 5}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("cashier")}
          style={[
            styles.link_nav,
            route.name == "cashier" ? { backgroundColor: "#DCD7C9" } : {},
          ]}
        >
          <Text
            style={
              route.name == "cashier"
                ? { color: "black", fontWeight: "500", letterSpacing: 1.5 }
                : { color: "gray" }
            }
          >
            Cashier
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("table")}
          style={[
            styles.link_nav,
            route.name == "table" ? { backgroundColor: "#3F4E4F" } : {},
          ]}
        >
          <Text
            style={
              route.name == "table"
                ? { color: "white", fontWeight: "500", letterSpacing: 1.5 }
                : { color: "gray" }
            }
          >
            Table
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("setting")}
          style={[
            styles.link_nav,
            route.name == "setting" ? { backgroundColor: "#3F4E4F" } : {},
          ]}
        >
          <Text
            style={
              route.name == "setting"
                ? { color: "white", fontWeight: "500", letterSpacing: 1.5 }
                : { color: "gray" }
            }
          >
            Setting
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default sidebar;

const styles = StyleSheet.create({
  container_nav: {
    height: "100%",
    width: "20%",
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: "#2C3639",
  },
  logo: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
  },
  link_nav: {
    padding: 10,
  },
  link_text: {
    color: "gray",
  },
});
