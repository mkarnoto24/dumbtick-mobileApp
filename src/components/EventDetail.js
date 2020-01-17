import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Left, Right, Body, Button, Icon, } from 'native-base';
import axios from 'axios';
// import { create } from 'react-test-renderer';


export default class EventDetail extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            user: [],
            category: [],

        }
    }

    componentDidMount() {
        const { navigation } = this.props
        const idn = JSON.stringify(navigation.getParam('id', 'default value'));

        // console.log(idn)

        axios.get(`https://dumbtick-app.herokuapp.com/api/v1/event/${idn}/events`).then(res => {
            this.setState({
                list: res.data,
                user: res.data.createBy,
                category: res.data.categoryId
            })
            console.log(this.state.detail)
        }).catch(error =>
            console.log(error)
        )
    }
    render() {
        const EventDetail = this.state.list
        const User = this.state.user
        const Category = this.state.category
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Image style={styles.cardImage} source={{ uri: `${EventDetail.img}` }}>

                    </Image>
                    <Text style={styles.cardText}>{EventDetail.title}</Text>

                    <CardItem>
                        <Left>
                            <Button style={{ height: 30, }}>
                                <Text style={{ color: '#fff', textAlign: 'center', width: 80 }}>Buy</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Text></Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>Rp. {EventDetail.price}</Text>
                        </Right>
                    </CardItem>
                    <Text style={styles.cardDescrition}>
                        {EventDetail.description}
                    </Text>
                </Card>

            </View >

            // <Container>
            //     <Content style={{ flex: 1 }}>
            //         <Card>
            //             <CardItem>
            //                 <Thumbnail source={require('../img/konser.jpg')} />
            //                 <View style={{ marginLeft: 10 }}>
            //                     <Text>Raisa Live In Concert</Text>
            //                     <Text note>April 15, 2016</Text>
            //                 </View>
            //             </CardItem>

            //             <CardItem cardBody>
            //                 <Image style={{ resizeMode: 'cover' }} source={require('../img/konser.jpg')} />
            //             </CardItem>

            //             <CardItem >

            //                 <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Raisa Live In Concert</Text>

            //             </CardItem>
            //             <CardItem footer>
            //                 <CardItem>
            //                     <Left>
            //                         <Button rounded style={{ backgroundColor: '#fa163f' }} size="small">
            //                             <Text>Buy</Text>
            //                         </Button>
            //                     </Left>
            //                     <Body>
            //                         <Button transparent>
            //                             <Text></Text>
            //                         </Button>
            //                     </Body>
            //                     <Right>
            //                         <Text>Rp. 400.000</Text>
            //                     </Right>
            //                 </CardItem>
            //             </CardItem>
            //         </Card>
            //     </Content>
            // </Container >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '94%',
        shadowColor: 0,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 3,
            height: 3
        },

    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    cardText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardDescrition: {
        padding: 10,
        textAlign: 'justify'
    }
})