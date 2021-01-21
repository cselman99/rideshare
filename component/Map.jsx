import React from 'react';
import MapView from 'react-native-maps';
import {View, Dimensions, StyleSheet} from 'react-native'

export default function Map(){
    

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map} initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}/>
        </View>
    );
}

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    map: {
    ...StyleSheet.absoluteFillObject,
    },
    mapContainer: {
        width: width,
        flex: 9,
        marginTop: 0,
    },
});

    
