import React, { Component } from 'react';
import { Card } from 'native-base';
import { View, Text, FlatList } from 'react-native'
import CardUpcoming from '../components/CardUpcoming';

import CardEvent from '../components/CardEvent'
// import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

class CategoryPage extends Component {

    constructor() {
        super()
        this.state = {
            category: [],
            event: []
        }
    }

    componentDidMount() {
        const { navigation } = this.props
        const idn = JSON.stringify(navigation.getParam('id', 'default value'));

        // console.log(idn)
        axios.get(`https://dumbtick-app.herokuapp.com/api/v1/category/${idn}/events`)
            .then(res => {
                this.setState({
                    category: res.data,
                    event: res.data.categoryEvents
                })
                // console.log(this.state.event)
            })
            .catch(err => { console.log(err) })
    }
    renderItem = ({ item }) => {
        return (
            <CardUpcoming
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                start_time={item.start_time}
                description={item.description}
            />
        )
    }
    render() {

        return (
            <View>
                <Text style={styles.categorytitle}>
                    {this.state.category.name}
                </Text>
                <View style={styles.flatlistWrapper}>
                    <FlatList
                        data={this.state.event}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}
export default CategoryPage;

const styles = {
    categorytitle: {
        fontSize: 20,
        margin: 20,
        color: '#fa163f',
        fontWeight: 'bold'

    },
    titleInfo: {
        fontSize: 20,
        margin: 20,
        color: '#000',
        fontWeight: 'bold'
    }
}