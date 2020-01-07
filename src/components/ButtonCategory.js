import React, { Component } from 'react';
import { View, Button, Text } from 'native-base';

import { withNavigation } from 'react-navigation';

class ButtonCategory extends Component {
    handlePress = () => () => {
        this.props.navigation.navigate('CategoryPage')
    }
    render() {
        return (
            <View>
                <Button onPress={this.handlePress(`${this.props.idCategory}`)} rounded style={styles.btncategory}>
                    <Text>{this.props.name}</Text>
                </Button>
            </View>
        );
    }
}
export default withNavigation(ButtonCategory)
const styles = {
    btncategory: {
        margin: 10,
        marginBottom: 10,
        backgroundColor: '#fa163f',
    },

}
