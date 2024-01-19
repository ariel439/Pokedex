import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router";

export default function Home() {


    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen1")}><Text>Generation 1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen2")}><Text>Generation 2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen3")}><Text>Generation 3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen4")}><Text>Generation 4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen5")}><Text>Generation 5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen6")}><Text>Generation 6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen7")}><Text>Generation 7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen8")}><Text>Generation 8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push("gen9")}><Text>Generation 9</Text></TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    button: {
        width: "50%",
        height: 60,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    }
})