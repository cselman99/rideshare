import React from 'react';
import {StyleSheet, View, Dimensions, Text, SafeAreaView} from 'react-native';

export default function BottomNav(){
    return (
        <View style={styles.bottomNav}>
            <Text style={styles.title}>&spades;</Text>
            <Text style={styles.title}>&clubs;</Text>
            <Text style={styles.title}>&hearts;</Text>
            <Text style={styles.title}>&diams;</Text>
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bottomNav: {
        flex: 1,
        paddingTop: 20,
        width: width,
        backgroundColor: '#3ade7f',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        bottom: 0,
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '300',
        fontSize: 30,
        width: width / 4,
    }
})