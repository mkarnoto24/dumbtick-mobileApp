import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Button, Right, Left, Body, TouchableOpacity } from 'native-base';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import Navbar from '../components/Navbar';
import CardEvent from '../components/CardEvent';
import CardUpcoming from '../components/CardUpcoming';
import ButtonCategory from '../components/ButtonCategory';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import moment from 'moment';

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
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                <Image style={{ width: 100, height: 100, margin: 5 }} source={{ uri: item.img }} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 5, marginRight: 3 }}>
                        {item.title.length <= 25 ? item.title : item.title.substr(0, 30) + '...'}
                    </Text>
                    <Text style={{ fontSize: 13, marginLeft: 5 }}>
                        {moment(`${item.start_time}`).format('MMM Do, YYYY')}
                    </Text>
                    <Text style={{ fontSize: 13, marginLeft: 5, marginRight: 5 }}>
                        {item.description.substr(0, 40) + '...'}
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Left>
                            <Text style={{ marginLeft: 5, marginBottom: 2 }}>
                                Rp. {item.price}
                            </Text>
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                            <Text>See Detail</Text>
                        </Right>

                    </View>
                </View>
            </View>
        )

    }

    // FlatListItemSeparator = () => {
    //     return (
    //         <View
    //             style={{
    //                 height: 1,
    //                 width: "100%",
    //                 backgroundColor: "#000",
    //             }}
    //         />
    //     );
    // }
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
                        Upcoming Event
                        </Text>
                    {/* <ScrollView horizontal style={styles.cardUpcomming}>
                        {
                            upcomingEvents.map((item,i)=>
                            <CardUpcoming 
                            key={i}
                            image={item.img}
                            title={item.title}
                            price={item.price}
                            />
                            )
                        }
                       
                    </ScrollView> */}
                    <View style={styles.flatlistWrapper}>
                        <FlatList
                            data={this.state.events}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                        // ItemSeparatorComponent={this.FlatListItemSeparator}
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