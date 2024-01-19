import { router } from "expo-router";
import { Image, TouchableOpacity , StyleSheet, Text, View } from "react-native";

export default function Page() {

  const move = () => {
    router.push("home")
  }

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={move}>
      <Image source={require("../assets/icons/pokeball.png")} style={styles.icon}></Image>
      <Text style={styles.title}>Pokédex</Text>
      <Text style={{fontSize: 14}}>By: Ariel C. Dolzan</Text>
      <View style={styles.continue}>
        <Text>Click to continue</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    marginTop: 20,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 50,
  },
  continue: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  }
});