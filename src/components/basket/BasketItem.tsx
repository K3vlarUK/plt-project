import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import RemoveFromBasketButton from '../buttons/RemoveFromBasketButton';
import QuantityChangeButton, { QuantityDirection } from '../buttons/QuantityChangeButton';

interface BasketItemProps {
    image: string;
    productName: string;
    quantity: number;
    costForProduct: number;
    onPress?: () => void;
    onDecrease: () => void;
    onIncrease: () => void;
}

const BasketItem: React.FC<BasketItemProps> = ({image, productName, quantity, costForProduct, onPress, onDecrease, onIncrease}) => {

  return (
    
    <View style={tw`justify-center bg-gray-800 rounded-2xl p-4 my-2`}>
        <Image style={tw`w-1/3 h-50 rounded-2xl justify-start mb-4 self-center`} source={{uri: image}} />
        <Text style={tw`text-center text-white text-xl font-semibold`}>{productName}</Text>
        <View style={tw`flex-row justify-center`}>
            <QuantityChangeButton direction={QuantityDirection.DOWN} onPress={onDecrease} />
            <Text style={tw`text-center text-white text-xl`}>Quantity: {quantity}</Text>
            <QuantityChangeButton direction={QuantityDirection.UP} onPress={onIncrease} />
        </View>
        <Text style={tw`text-center text-white text-xl pb-4`}>Cost: £{costForProduct.toFixed(2)}</Text>
        <RemoveFromBasketButton onPress={onPress}/>
    </View>

  )
}

export default BasketItem