import React, { Component } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon, } from 'native-base';

import { withNavigation } from 'react-navigation';





class Navbar extends Component {
    handleLogin = () => {
        this.props.navigation.navigate('CategoryPage')
    }
    render() {
        return (
            <Header androidStatusBarColor="#fa163f" style={styles.navbar}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>DumbTick</Title>
                </Body>
                <Right>
                    <Button onPress={this.handleLogin} transparent>
                        <Icon name='person' />
                    </Button>
                </Right>
            </Header>
        );
    }
}

export default withNavigation(Navbar)

const styles = {
    navbar: {
        backgroundColor: '#fa163f'
    }
}