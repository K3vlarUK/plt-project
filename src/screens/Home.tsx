import { ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductType } from '../helpers/types/types'
import tw from 'twrnc'
import Product from '../components/product/Product'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '../navigation/navigation'
import axios from 'axios'
import ViewBasketButton from '../components/buttons/ViewBasketButton'
import { useDispatch } from 'react-redux'
import { addItemToBasket } from '../redux/basket/actionCreators'
import Toast from 'react-native-toast-message'

const Home = () => {

    const [products, setProducts] = useState<ProductType[]>([])
    const navigation = useNavigation<NavigationProps>();
    const dispatch = useDispatch();

    // I could probably look at storing this in redux also but for this small example I think storing it in state like this should be okay
    const getProducts = async () => {
        const products = await axios.get(`https://my-json-server.typicode.com/benirvingplt/products/products`)
        setProducts(products.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Added item to Basket',
        });
    }

    const productList = products.map(product => {
        return (
            <Product 
            product={product} 
            onAddToBasketPress={() => {
                dispatch(addItemToBasket(product))
                showToast()
            }} 
            key={product.id}/>
        )
    })

  return (
    <SafeAreaView style={tw`bg-black`}>
        <ViewBasketButton onPress={() => navigation.navigate('Basket')}/>
        <ScrollView style={tw`mx-6 pt-6`}>
            {productList}
        </ScrollView>
        <Toast position={'bottom'} bottomOffset={80} />
    </SafeAreaView>
  )
}

export default Home