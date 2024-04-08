import {AppRegistry, View} from 'react-native';
// import {useEffect, useState} from "react";
import {PaperProvider, ActivityIndicator, MD2Colors, Button, Badge} from "react-native-paper";
import { expo as appName } from './app.json';
import AppbarHead from "./Components/AppbarHead";
import Lists from "./Components/Lists";


export default function App() {
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     axios.get('https://6612be9353b0d5d80f664b21.mockapi.io/Posts')
    //     .then(({data}) => {
    //         setItems(data);
    //     })
    //     .catch((err) => {
    //         Alert.alert('Error HTTP: ' + err);
    //     });
    //
    // }, []);

    return (
        <PaperProvider>
            <View>
                <AppbarHead />
                <Lists/>
                <ActivityIndicator animating={true} color={MD2Colors.red800} />
                <Button icon="plus" mode="outlined" onPress={() => console.log('Pressed')}>
                    <Badge>3</Badge>
                </Button>

            </View>
        </PaperProvider>

    );
}

AppRegistry.registerComponent(appName.name, () => App);
