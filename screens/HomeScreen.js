import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GMAP_API_KEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFaves from '../components/NavFaves';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-6`}>

            {/* This is the image/logo of my personal brand */}
            <Image 
                style={{
                    width: 75,
                    height: 80,
                    resizeMode: "contain",
                    alignSelf: 'center',
                }}
                source={require('../img/LogoREDBLACK.png')}
            />
            <View style={tw`py-2 border-b border-gray-300`}><Text style={tw`text-center`}>- SABQ Enterprise -</Text></View>

            {/*This is used to search for detination using Google API */}
            <GooglePlacesAutocomplete
              placeholder="Enter Current Location"
              styles={{
                container: {
                  flex: 0,
                },
                textInput: {
                  fontSize: 18,
                },
              }}

              onPress={(data, details = null) => {
                dispatch(
                  setOrigin({
                    location: details.geometry.location,
                    description: data.description,
                  })
                );
                dispatch(setDestination(null));
              }}

              fetchDetails={true}
              returnKeyType={"search"}
              enablePoweredByContainer={false}
              minLength={2}
              query={{
                key: GMAP_API_KEY,
                language: 'en',
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
            />

            <NavOptions />
            <NavFaves />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

// Will be using Tailwind for styling
const styles = StyleSheet.create({})