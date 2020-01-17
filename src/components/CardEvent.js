import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Button, View, Left, Body, Right } from 'native-base';

export default class CardEvent extends Component {
    render() {
        return (
            <View style={styles.cardView}>
                <Card >

                    <CardItem cardBody>
                        <Image source={{ uri: `${this.props.image}` }} style={{ height: 200, width: null, flex: 1 }} />
                        <Button transparent style={styles.btnprice} bordered>

                        </Button>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.titleevent}>
                            {this.props.title}</Text>
                        {/* <Right>
                            <Button transparent>
                                <Icon name="bookmark" />
                            </Button>
                        </Right> */}

                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button style={{ backgroundColor: '#fa163f' }} success rounded size="small">
                                <Text>Buy</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Text></Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>{`Rp. ${this.props.price}`}</Text>
                        </Right>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const styles = {
    titleeven: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    btnprice: {
        position: 'absolute',
    },
    cardView: {
        margin: 10
    }
}