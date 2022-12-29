import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import tw from 'twrnc';
import { selectOrigin, selectDestination } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import MapViewDirections from "react-native-maps-directions";
import { GMAP_API_KEY } from "@env";

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    // Attaching map view to view point A and B
    const mapRef = useRef(null);

    useEffect(() => {
      if (!origin || !destination) return;

      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
    }, [origin, destination])

  return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    mapType="mutedStandard"
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
    >

      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GMAP_API_KEY}
          mode="WALKING"
          strokeWidth={3}
          strokeColor="black"
        />
      )}

        {/* Markers */}
        {origin?.location && (
            <Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                }}
                title="My Location"
                description={origin.description}
                identifier="origin"
            />
        )}

        {destination?.location && (
            <Marker 
                coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng,
                }}
                title="The Destination"
                description={destination.description}
                identifier="destination"
            />
        )}

    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})