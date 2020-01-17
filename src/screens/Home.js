import React, { Component } from 'react';
import { Container, Card, Content, InputGroup, Input, Icon, Button, Right, Left, Body } from 'native-base';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import Navbar from '../components/Navbar';
import CardEvent from '../components/CardEvent';
import CardUpcoming from '../components/CardUpcoming';
import ButtonCategory from '../components/ButtonCategory';
import { withNavigation } from 'react-navigation';
import axios from 'axios';


class Home extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            events: [],
            dataSource: []

        }
    }
    componentDidMount() {
        axios.get(`https://dumbtick-app.herokuapp.com/api/v1/categories`)
            .then(res => {
                this.setState({
                    list: res.data,
                })

            })
            .catch(err => console.log(err))
        axios.get("https://dumbtick-app.herokuapp.com/api/v1/events").then(res => {
            this.setState({
                events: res.data
            })
        }).catch(error =>
            console.log(error)
        )
    }

    renderItem = ({ item }) => {
        return (
            <CardUpcoming
                id={item.id}
                img={item.img}
                price={item.price}
                title={item.title}
                start_time={item.start_time}
                description={item.description}
            />
        )

    }

    render() {
        const list = this.state.list
        const events = this.state.events
        const todayEvents = events.filter(events => {
            const date = new Date(events.start_time);
            return (date.toISOString().substring(0, 10) == new Date().toISOString().substring(0, 10));
        });

        const upcomingEvents = events.filter(events => {
            const date = new Date(events.start_time);
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate());
            return (date.toISOString().substring(0, 10) == tomorrow.toISOString().substring(0, 10));
        });
        // console.log(todayEvents)
        // console.log(this.state.events)
        return (
            <Container>
                <Navbar></Navbar>

                <Content>

                    <InputGroup style={styles.search} borderType='rounded'>
                        <Icon name='ios-search' />
                        <Input placeholder='Search' />
                    </InputGroup>
                    <ScrollView horizontal>
                        {
                            list.map((item, i) =>
                                <View key={i}>
                                    <ButtonCategory
                                        name={item.name}
                                        idCategory={item.id}
                                    />
                                </View>
                            )
                        }
                    </ScrollView>
                    <View>
                        <Text style={styles.categorytitle}>
                            Today
                        </Text>
                    </View>
                    <ScrollView horizontal>
                        {
                            todayEvents.map((item, i) =>
                                <CardEvent
                                    key={i}
                                    image={item.img}
                                    title={item.title}
                                    price={item.price}
                                />
                            )
                        }

                    </ScrollView>
                    <Text style={styles.categorytitle}>
                        All Event
                        </Text>
                    <View style={styles.flatlistWrapper}>
                        <FlatList
                            data={this.state.events}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </Content>
                {/* <FooterDumbTick /> */}
            </Container >
        );
    }
}
export default withNavigation(Home)

const styles = {
    categorytitle: {
        fontSize: 20,
        margin: 20,
        color: '#fa163f',
        fontWeight: 'bold',


    },
    search: {
        marginTop: 10,
        marginBottom: 10,
    },
    cardUpcomming: {
        margin: 10
    },
    flatlistWrapper: {
        flex: 1,
        marginLeft: 7,
        marginRight: 7,
        // border: '1px solid #000'
        // backgroundColor: '#f5fcff'
    }
}