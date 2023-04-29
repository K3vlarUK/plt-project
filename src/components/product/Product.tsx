import { View, Text, Image } from 'react-native'
import React from 'react'
import { ProductType } from '../../helpers/types/types'
import tw from 'twrnc'
import AddToBasketButton from '../buttons/AddToBasketButton'

interface ProductProps {
    product: ProductType
    onAddToBasketPress?: () => void;
}

const Product: React.FC<ProductProps> = ({product, onAddToBasketPress}) => {
  return (
    <View style={tw`flex-1 justify-center bg-gray-800 rounded-2xl p-4 my-2`}>
        <Image style={tw`w-2/3 h-75 rounded-2xl self-center`} source={{uri: product.img}} />
        <View>
            <Text style={tw`text-2xl font-bold text-center pt-4 text-gray-200`}>{product.name}</Text>
            <Text style={tw`text-xl font-semibold mb-4 text-center pt-4 text-gray-200`}>£{product.price}</Text>
        </View>
        <AddToBasketButton onPress={onAddToBasketPress}/>
    </View>
  )
}

export default Product