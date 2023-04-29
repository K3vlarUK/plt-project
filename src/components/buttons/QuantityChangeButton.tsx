import { Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Pressable } from 'react-native'

export enum QuantityDirection {
    DOWN = 'down',
    UP = 'up'
}

interface QuantityChangeButtonProps {
    direction: QuantityDirection;
    onPress: () => void;
}

const QuantityChangeButton: React.FC<QuantityChangeButtonProps> = ({direction, onPress}) => {
  return (
    <Pressable onPress={onPress}>
        <Text style={tw`font-extrabold text-center text-white text-2xl ${direction === QuantityDirection.DOWN ? 'pr-4' : 'pl-4'}`}>
            {direction === QuantityDirection.DOWN ? '-' : '+'}
        </Text>
    </Pressable>
  )
}

export default QuantityChangeButton