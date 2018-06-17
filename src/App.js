import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCO8cHjxdDCDnGwy0_E3Kf5nWiJnNZr6HI',
            authDomain: 'authentication-fd7bc.firebaseapp.com',
            databaseURL: 'https://authentication-fd7bc.firebaseio.com',
            projectId: 'authentication-fd7bc',
            storageBucket: 'authentication-fd7bc.appspot.com',
            messagingSenderId: '176418569547'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
