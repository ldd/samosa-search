'use strict';
import React, {
    StyleSheet,
    MapView,
} from 'react-native';
import SamosaSearchAPI from '../../api/samosaSearchAPI';
function MapViewRender(props,state){
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                            latitude: state.lat,
                            longitude: state.lon,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
            region={{
                latitude: state.lat,
                longitude: state.lon,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            annotations={
                SamosaSearchAPI.getTags(props.saleList).map((marker) => {
                  return (
                    {longitude: marker.position.lng, latitude: marker.position.lat, title: ''+marker.count}
                  );
                })
            }
        />
    );
}
const styles = StyleSheet.create({
    map:{
        flex: 1
    }
});
export default MapViewRender;