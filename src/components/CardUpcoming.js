import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Button, View, FlatList, Left, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation';
import moment from 'moment';



class CardUpcoming extends Component {


    handlePress = (value) => () => {
        this.props.navigation.navigate('EventDetail', { id: value })
        // alert(value);
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.handlePress(this.props.id)}>
                    <Card>
                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>

                            <Image style={{ width: 100, height: 100, margin: 5 }} source={{ uri: this.props.img }} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 5, marginRight: 3 }}>
                                    {this.props.title.length <= 25 ? this.props.title : this.props.title.substr(0, 30) + '...'}
                                </Text>
                                <Text style={{ fontSize: 13, marginLeft: 5 }}>
                                    {moment(`${this.props.start_time}`).format('MMM Do, YYYY')}
                                </Text>
                                <Text style={{ fontSize: 13, marginLeft: 5, marginRight: 5 }}>
                                    {this.props.description.substr(0, 40) + '...'}
                                </Text>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Left>
                                        <Text style={{ marginLeft: 5, marginBottom: 2, fontSize: 13 }}>
                                            Rp. {this.props.price}
                                        </Text>
                                    </Left>
                                    <Body>
                                    </Body>
                                    {/* <Right>
                                        <View>
                                            <Text style={{ fontSize: 13 }}>See Detail</Text>
                                        </View>
                                    </Right> */}

                                </View>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View >
        );
    }
}

export default withNavigation(CardUpcoming)
