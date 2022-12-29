import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GMAP_API_KEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFaves from './NavFaves';
import { Icon } from '@rneui/base';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-2`}>Good Afternoon, Abubakar</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
                placeholder="Where would you like to go?"
                styles={toInputBoxStyles}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }))
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                    key: GMAP_API_KEY,
                    language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
            />
        </View>
        <NavFaves />
      </View>

      <View style={tw`flex-row justify-between bg-white justify-evenly py-2 mt-auto`}>

        <TouchableOpacity 
        onPress={() => navigation.navigate("RideOptionsCard")}
        style={tw`flex flex-row bg-black w-24 pl-5 px-3 py-3 rounded-full text-center`}>
            <Icon name="car" type="ionicon" color="white" size={18} />
            <Text style={tw`text-white text-center`}>Let's Go</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#ECECEC",
        
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})