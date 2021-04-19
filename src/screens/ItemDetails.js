import React from 'react'
import { Text, View } from 'react-native'

export default ({ route }) => {
     return (
        <View>
            <Text>{JSON.stringify(route.params.item, null, 2)}</Text>
        </View>
)
}
 


