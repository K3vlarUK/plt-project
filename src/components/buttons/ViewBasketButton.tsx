import { Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'

interface ViewBasketButtonProps {
    homeScreen?: boolean;
    onPress?: () => void;
}

const ViewBasketButton: React.FC<ViewBasketButtonProps> = ({homeScreen = true, onPress}) => {
  return (
    <Pressable style={tw`justify-center items-center py-2 px-4 mt-4 mx-6 bg-white rounded-2xl`} onPress={onPress}>
        <Text style={tw`text-lg font-bold text-black`}>{homeScreen ? 'View Basket' : 'Return'}</Text>
    </Pressable>
  )
}

export default ViewBasketButton