import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Header = () => {
  return (
    <SafeAreaView style={tw`flex-row py-2 bg-black border-b border-white justify-center`}>
      <Text style={tw`text-lg font-bold text-white`}>PrettyLittleTest</Text>
    </SafeAreaView>
  )
}

export default Header