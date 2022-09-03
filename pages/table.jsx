import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Sidebar from "../component/sideBar";
const Table = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Sidebar navigation={navigation} />
      <View style={{ width: "80%", height: "100%", flex: 1 }}>
        <Text>Table screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCD7C9",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
