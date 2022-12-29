import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import golfCart from '../img/golfCart.png';
import shopping from '../img/shopping.png';
import giftEE from '../img/giftEE.png';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const data = [
    {
        id: "123",
        title: "Get a Ride",
        image: golfCart,
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order Apparel", // May have to remove this due to app function
        image: shopping,
        screen: "ApparelScreen" 
    },
    {
        id: "789",
        title: "Easter Egg Page",
        image: giftEE,
        screen: "EasterEgg"
    }
];


const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
    <View>
        <FlatList
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-2 pb-4 pt-4 bg-gray-100 m-4 w-35`}
                    disabled={!origin}>

                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Image
                        style={{width: 120, height: 120, resizeMode: "contain"}}
                            source={item.image}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold pb-2`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-16`}
                            name="chevron-right" color="white" type="feather"
                        />
                    </View>
                </TouchableOpacity>
            )} 
        />
    </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({})