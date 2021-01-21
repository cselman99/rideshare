import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';

export default function NavBar(){
    return (
        <View style={styles.navBar}>
            <Text style={styles.title} >Ride Share</Text>
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    navBar: {
        height: 100,
        width: width,
        backgroundColor: '#3ade7f',
        paddingTop: 50,
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '300',
        fontSize: 30,
    }
})