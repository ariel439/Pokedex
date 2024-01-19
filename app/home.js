import { useEffect, useState } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import axios from 'axios';
import { styles } from "../util/style";
import { getTypeColor } from "../util/functions";
import Icon from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

export default function Home() {

    //useState
    const [pokemons, setPokemons] = useState([]);

    //useEffect
    useEffect(() => {
        getPokemon();
    }, []);

    //get pokemons from api
    const getPokemon = () => {
        var endpoints = []
        for ( var i = 1;  i <= 151; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    }

    const renderPokemon = ({item}) => {
        return(
            <TouchableOpacity style={styles.dex} activeOpacity={1} onPress={() => router.push("/pokes/" + item.data.id)}>
                <View style={styles.dexInfo}>
                    <Text style={{fontSize: 20, paddingTop: 5}}>{item.data.name.charAt(0).toUpperCase() + item.data.name.slice(1)}</Text>
                    <View style={styles.types}>
                        {item.data.types.map((t, index) =>
                            <View style={[styles.type, {backgroundColor:getTypeColor(t.type.name)}]} key={index}>
                                <Text>{t.type.name}</Text>
                            </View>
                        )}
                    </View>
                </View>
                <Image
                style={styles.img}
                source={{uri: item.data.sprites.front_default}}
                />
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={[styles.title, {paddingLeft: 35}]}>Generation 1</Text>
                <Icon name="arrow-forward-outline" size={35} onPress={() => router.push("gen2")}></Icon>
            </View>
            <FlatList
                data={pokemons} 
                renderItem={renderPokemon}
            />
        </View>
    )
}