import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'

interface RemoveFromBasketButtonProps {
    onPress?: () => void;
}

const RemoveFromBasketButton: React.FC<RemoveFromBasketButtonProps> = ({onPress}) => {
  return (
    <Pressable style={tw`justify-center items-center py-2 px-4 bg-white rounded-2xl`} onPress={onPress}>
        <Text style={tw`text-lg font-bold text-black`}>Remove From Basket</Text>
    </Pressable>
  )
}

export default RemoveFromBasketButton