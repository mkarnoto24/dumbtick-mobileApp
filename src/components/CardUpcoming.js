import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Button, View, FlatList } from 'native-base';
import { withNavigation } from 'react-navigation';



class CardUpcoming extends Component {
    // handlePress = () => {
    //     this.props.navigation.navigate('EventDetail')
    // }
    render() {
        return (
            <View style={styles.container}>
                {/* <Card >

                    <CardItem cardBody>
                        <Image source={{ uri: `${this.props.image}` }} style={{ height: 200, width: null, flex: 1 }} />
                        
                    </CardItem>
                    <CardItem>
                        <Text onPress={this.handlePress} >
        {this.props.title}</Text>


                    </CardItem>
                    <CardItem>
                        <Text style={styles.titleevent} onPress={this.handlePress}>
                            See Detail
                             </Text>
                    </CardItem>

                </Card> */}
                <FlatList
                    data={[{ key: '1' }, { key: '2' }]}
                    renderItem={({ item }) => <Text > {item.key} </Text>}
                    keyExtractor={item => item.id}
                />
            </View >
        );
    }
}

export default withNavigation(CardUpcoming)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
}