import { Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useTypedSelector } from '../redux/basket/reducer'
import { BasketItemType, ProductType } from '../helpers/types/types'
import BasketItem from '../components/basket/BasketItem'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromBasket } from '../redux/basket/actionCreators'
import ViewBasketButton from '../components/buttons/ViewBasketButton'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../navigation/navigation'

const Basket = () => {

    const basket = useTypedSelector(state => {return state})
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProps>();

    const removeFromBasket = (id: number, product: ProductType, quantity: number) => {
        dispatch(removeItemFromBasket(id, product, quantity))
    }

    const increaseQuantity = (id: number, price: number) => {
        dispatch(increaseItemQuantity(id, price))
    }

    const decreaseQuantity = (id: number, price: number) => {
        dispatch(decreaseItemQuantity(id, price))
    }

    const basketContents = (
        basket.items.map((basketItem: BasketItemType) => {
            return (
                <BasketItem 
                    image={basketItem.product.img}
                    productName={basketItem.product.name} 
                    quantity={basketItem.quantity} 
                    costForProduct={basketItem.productCost} 
                    key={basketItem.product.id} 
                    onPress={() => removeFromBasket(basketItem.product.id, basketItem.product, basketItem.quantity)} 
                    onDecrease={() => decreaseQuantity(basketItem.product.id, basketItem.product.price)} 
                    onIncrease={() => increaseQuantity(basketItem.product.id, basketItem.product.price)} 
                />
            )
        })
    )

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
        <ViewBasketButton homeScreen={false} onPress={() => navigation.navigate('Home')} />
        <Text style={tw`text-white text-4xl pt-4`}>Basket</Text>
        <ScrollView>
            {basketContents}
        </ScrollView>
        <Text style={tw`font-semibold text-white text-2xl`}>Total Cost: £{basket.totalCost.toFixed(2)}</Text>
    </SafeAreaView>
  )
}

export default Basket