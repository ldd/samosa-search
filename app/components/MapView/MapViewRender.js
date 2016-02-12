import React from 'react';
import GoogleMapLoader from 'react-google-maps/lib/GoogleMapLoader';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import Marker from 'react-google-maps/lib/Marker';

import SamosaSearchAPI from '../../api/samosaSearchAPI';

function MapViewRender(props,state){
    return (
        <section style={{height: '100%'}}>
            <GoogleMapLoader
                containerElement={
            <div
                {...props}
                style={{
                /*64 is the height of the AppBar,
                 we set these values to the max possible*/
                    width:window.innerWidth,
                    height:window.innerHeight-64,
                    position: 'absolute'
                }}
            >
            </div>
            }
                googleMapElement={
            <GoogleMap
                ref={()=>{}}
                options={{
                /*these are options that affect the controls shown in the map*/
                    streetViewControl:false,
                    mapTypeControl:false,
                    zoomControl: true,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    }
                }}
                defaultZoom={16}
                defaultCenter={{lat: state.lat, lng: state.lon}}
                center={{lat: state.lat, lng: state.lon}}
                onClick={()=>{}}>
                {/*we get tags from the sale list, by getting unique keys.
                   then we display markers from these tags */}
                {SamosaSearchAPI.getTags(props.saleList).map((marker,i) => {
                  return (
                    <Marker key={''+i} position={marker.position} label={''+marker.count}/>
                  );
                })}
            </GoogleMap>
            }
            />
        </section>
    );
}

export default MapViewRender;