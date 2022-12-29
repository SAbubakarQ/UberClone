import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';

const data = [
    {
        id: "123",
        icon: "bed-outline",
        location: "Hotel",
        destination: "465 Arkansas Ave, Fayetteville, AR",
    },
    {
        id: "456",
        icon: "trophy-outline",
        location: "Event",
        destination: "350 N Razorback Rd, Fayetteville, AR",
    }
]

const NavFaves = () => {
    // const dispatch = useDispatch();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-400`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity 
            style={tw`flex-row items-center p-5`}
            // onPress={(data, destination = null) => {
            //     dispatch(setDestination({
            //         location: destination.geometry.location,
            //         description: data.description,
            //     }))
            // }}
            >
            <Icon
                style={tw`mr-4 rounded-full bg-black p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500 pr-10`}>{destination}</Text>
          </View>
        </TouchableOpacity> 
       )}
     />
   );
 };

export default NavFaves

const styles = StyleSheet.create({})