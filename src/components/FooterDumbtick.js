import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
export default class FooterDumbTick extends Component {
    render() {
        return (

            <Footer >
                <FooterTab style={styles.footer}>
                    <Button full btnUppercaseAndroidText={false}>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
const styles = {
    footer: {
        backgroundColor: '#fa163f'
    }
}