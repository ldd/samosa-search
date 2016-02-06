'use strict';
import React, {
    StyleSheet,
    MapView,
} from 'react-native';

function MapViewRender(props,state){
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                            latitude: state.lat,
                            longitude: state.lon,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
            region={{
                latitude: state.lat,
                longitude: state.lon,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        />
    );
}
const styles = StyleSheet.create({
    map:{
        flex: 1
    }
});
export default MapViewRender;