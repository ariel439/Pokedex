import axios from 'axios';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default function PokePage() {

    const [poke, setPoke] = useState(null);

    const {id} = useLocalSearchParams();

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) => setPoke(res.data));
    }

    if(poke == null){
        return <Text>Loading...</Text>
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.name}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</Text>
            <Image style={styles.img} source={{uri: poke.sprites.front_default}}/>
            <View style={styles.stats}>
                <Text>HP: {poke.stats[0].base_stat}</Text>
                <ProgressBarAnimated width={350} value={(poke.stats[0].base_stat*100)/225} backgroundColor={'#A60000'} height={40}></ProgressBarAnimated>
                <Text>Attack: {poke.stats[1].base_stat}</Text>
                <ProgressBarAnimated width={350} value={(poke.stats[1].base_stat*100)/225} backgroundColor={'#9C531F'} height={40}></ProgressBarAnimated>
                <Text>Defense: {poke.stats[2].base_stat}</Text>
                <ProgressBarAnimated width={350} value={(poke.stats[2].base_stat*100)/225} backgroundColor={'#A1871F'} height={40}></ProgressBarAnimated>
                <Text>Special Attack: {poke.stats[3].base_stat}</Text>
                <ProgressBarAnimated width={350} value={(poke.stats[3].base_stat*100)/225} backgroundColor={'#445E9C'} height={40}></ProgressBarAnimated>
                <Text>Special Defense: {poke.stats[4].base_stat}</Text>
                <ProgressBarAnimated width={350} value={(poke.stats[4].base_stat*100)/225} backgroundColor={'#4E8234'} height={40}></ProgressBarAnimated>
                <Text>Speed:{poke.stats[5].base_stat} </Text>
                <ProgressBarAnimated width={350} value={(poke.stats[5].base_stat*100)/225} backgroundColor={'#A13959'} height={40}></ProgressBarAnimated>
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        textAlign: "center",
    }, 
    img: {
        alignSelf: "center",
        width: 400,
        height: 400,
    },
    stats: {
        alignItems: "center",
    }
})