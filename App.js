/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ...']);
// import {Image } from 'react-native';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

import ListItem from './src/co'
import { AppRegistry, Image } from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    // android: 'Double tap R on your keyboard to reload,\n' +
    // 'Shake or press menu button for dev menu',
    android: '',
});

type Props = {};
export default class App extends Component <Props> {
    render() {
        // console.error();
        // console.warn();
        // console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <Bananas/>
                <Bananas2/>

                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />


                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>

            </View>


        );

    }

}


class Bananas2 extends Component {
    render() {
        let pic = {
            uri:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/CeleusSpectabilisSmit.png/368px-CeleusSpectabilisSmit.png'
            // uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'

        };
        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        // let pic2={
        //     uri:'https://en.wikipedia.org/wiki/File:Mars_Ice_Home_concept.jpg'
        // };

        // console.log(pic);
        return (
            <Image source={pic} style={{width: 123, height: 80}}/>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {

                //console.warn(previousState);
                // console.log(previousState);
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    // const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    // });
});
