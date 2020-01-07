import React, { Component } from 'react';
import { View, Text } from 'native-base';

import CardEvent from '../components/CardEvent'
import { ScrollView } from 'react-native-gesture-handler';

export default class CategoryPage extends Component {
    render() {
        return (
            <View>
                <Text style={styles.categorytitle}>
                    Music
                        </Text>
                <ScrollView horizontal></ScrollView>

                <ScrollView>
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                </ScrollView>
            </View>
        );
    }
}
const styles = {
    categorytitle: {
        fontSize: 20,
        margin: 20,
        color: '#fa163f',
        fontWeight: 'bold'

    }
}