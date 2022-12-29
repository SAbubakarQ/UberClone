import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Icon, Image } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import golfCart from '../img/golfCart.png';
import rbChariot from '../img/rbChariot.png';
import funny from '../img/funny.png';
import { useSelector } from 'react-redux';
import { selectTravelTimeInfo } from '../slices/navSlice';

const data = [
    {
        id: "QueueRide-X-123",
        title: "Hog Golf Cart",
        multiplier: 1,
        image: golfCart
    },
    {
        id: "QueueRide-X-456",
        title: "Razorback Bike",
        multiplier: 1.2,
        image: rbChariot
    },
    {
        id: "QueueRide-X-789",
        title: "Miltiary Escort",
        multiplier: 50,
        image: funny
    }
]

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

  return (
    <SafeAreaProvider style={tw`bg-white -p-12 flex-grow`}>
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate("NavigateCard")}
            style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
            >
                <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Method</Text>
        </View>

        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item: { id, title, multiplier, image }, item}) => (
                <TouchableOpacity 
                    onPress={() => setSelected(item)}
                    style={tw`flex-row justify-between items-center px-3 ${
                        id === selected?.id && "bg-green-200"
                    }`}
                    >
                    <Image
                        style={{
                            width: 75,
                            height: 75,
                            resizeMode: "contain",
                        }}
                        source={item.image}
                    />
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font semibold`}>{title}</Text> 
                        <Text>Travel Time</Text>
                    </View>
                    <Text style={tw`text-xl`}>$14.99</Text>
                </TouchableOpacity>
            )}
        />

        <View>
            <TouchableOpacity style={tw`bg-black py-2 m-2 ${!selected && "bg-gray-300"}`}>
                <Text style={tw`text-center text-white text-xl`}>Order {selected?.title}</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaProvider>
  );
};

export default RideOptionsCard

const styles = StyleSheet.create({})