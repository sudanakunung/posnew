import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useEffect } from "react";
import Sidebar from "../component/sideBar";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase({ name: "db.db" });

const Cashier = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Sidebar navigation={navigation} />
      <View
        style={{
          width: "80%",
          height: "100%",
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ height: 130, width: "100%" }}>
            <ScrollView>
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingVertical: 5,
                }}
              >
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: "white", fontWeight: "300" }}>
                    Food
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: "white", fontWeight: "300" }}>
                    Beverage
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: "white", fontWeight: "300" }}>
                    Promo
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: "white", fontWeight: "300" }}>
                    Discount
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: "white", fontWeight: "300" }}>
                    Softdrink
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: "white", fontWeight: "300" }}>
                    Beer
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingVertical: 5,
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "24%",
                    backgroundColor: "#2C3639",
                    borderRadius: 4,
                    marginHorizontal: 2,
                    marginVertical: 2,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Bakso</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={{ backgroundColor: "#2C3639", width: "30%" }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Cashier;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F4E4F",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    width: "24%",
    backgroundColor: "#495b5c",
    borderRadius: 4,
    marginHorizontal: 2,
    marginVertical: 2,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
