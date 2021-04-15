import React from 'react'

import { FlatList, SafeAreaView, ScrollView } from 'react-native'
import nachos from '../data/nachos'
import ListItem, { Separator } from '../components/ListItem'
export default () => {
    return (
        <SafeAreaView>
            <FlatList
                data={nachos}
                renderItem={({ item, index }) => {
                   return <ListItem
                        name={item.name}
                        onFavoritePress={() => alert("TODO: Do something here")}
                        isFavorite={index < 2}
                    />
                }}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
    // return (
    //     <SafeAreaView>
    //         <ScrollView>
    //             {nachos.map((item, index) => {
    //                 return <React.Fragment key={item.id}>
    //                     <ListItem
    //                         name={item.name}
    //                         onFavoritePress={() => alert("TODO: Do something here")}
    //                         isFavorite={index < 2}
    //                     />
    //                     <Separator />
    //                 </React.Fragment>
    //             })}
    //         </ScrollView>
    //     </SafeAreaView>
 

};