import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        paddingBottom: 20,
        paddingTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
    },
    dex: {
        flex: 1,
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "rgb(40,40,40)",
    },
    dexInfo: {
        height: "100%",
        width: "50%",
        alignItems: "center",
    },
    img: {
        width: 200,
        height: 200,
    },
    types: {
        flex: 1,
        justifyContent: "space-around",
    },
    type: {
        height: 50,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
    }
})