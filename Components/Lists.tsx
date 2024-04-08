import * as React from 'react';
import { List } from 'react-native-paper';

const Lists = () => (
    <List.Section>
        <List.Item
            id='1'
            title="First Item"
            left={() => <List.Icon icon="format-list-numbered" />}
            onPress={(event) => console.log(event.target)}
        />
        <List.Item
            title="Second Item"
            left={() => <List.Icon icon="format-list-numbered" />}
            onPress={() => alert('Нажаль!')}
        />
    </List.Section>
);

export default Lists;