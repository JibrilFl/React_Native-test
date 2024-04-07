import {StatusBar, Alert, FlatList, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Post from "./Components/Post/Post";
import axios from "axios";
import {useEffect, useState} from "react";


export default function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://6612be9353b0d5d80f664b21.mockapi.io/Posts')
        .then(({data}) => {
            setItems(data);
        })
        .catch((err) => {
            Alert.alert('Error HTTP: ' + err);
        });

    }, []);

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({item}) => {
                    return <Post title={item.title} createdAt={item.createdAt} imageUrl={item.imageUrl} />
                }}
            />
            <StatusBar theme="auto" />
        </View>
    );
}
