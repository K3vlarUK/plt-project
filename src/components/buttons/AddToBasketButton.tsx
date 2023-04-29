import { Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'

interface AddToBasketButtonProps {
    onPress?: () => void;
}

const AddToBasketButton: React.FC<AddToBasketButtonProps> = ({onPress}) => {
  return (
    <Pressable style={tw`justify-center items-center py-2 px-4 bg-white rounded-2xl`} onPress={onPress}>
        <Text style={tw`text-lg font-bold text-black`}>Add to Basket</Text>
    </Pressable>
  )
}

export default AddToBasketButton