import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { BatLogo } from "../../components/BatLogo";
import { BatTextInput } from "../../components/BatTextInput";
import { BatButton } from "../../components/BatButton";

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Home;
