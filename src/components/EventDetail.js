import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Right, Body, Button, Icon, View } from 'native-base';


export default class EventDetail extends Component {
    render() {
        return (

            <Container>
                <Content style={{ flex: 1 }}>
                    <Card>
                        <CardItem>
                            <Thumbnail source={require('../img/konser.jpg')} />
                            <View style={{ marginLeft: 10 }}>
                                <Text>Raisa Live In Concert</Text>
                                <Text note>April 15, 2016</Text>
                            </View>
                        </CardItem>

                        <CardItem cardBody>
                            <Image style={{ resizeMode: 'cover' }} source={require('../img/konser.jpg')} />
                        </CardItem>

                        <CardItem >

                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Raisa Live In Concert</Text>

                        </CardItem>
                        <CardItem footer>
                            <CardItem>
                                <Left>
                                    <Button rounded style={{ backgroundColor: '#fa163f' }} size="small">
                                        <Text>Buy</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Text></Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>Rp. 400.000</Text>
                                </Right>
                            </CardItem>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const styles = {
    textdesc: {
        textAlign: 'justify'
    },
    titleeven: {
        fontSize: 12,
        fontWeight: 'bold',
    }
}