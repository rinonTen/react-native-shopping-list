import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { FlatList, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import nachos from '../data/nachos';
import ListItem, { Separator } from '../components/ListItem';
import AddItem from '../components/AddItem';

export default () => {
    const [list, setList] = useState(nachos)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
            >
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => {
                        return <ListItem
                            name={item.name}
                            onFavoritePress={() => alert("TODO: Do something here")}
                            isFavorite={index < 2}
                            onAddedSwipe={() => alert("on added swipe")}
                            onDeleteSwipe={() => alert("on delete swipe")}
                        />

                    }}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <Separator />}
                    ListHeaderComponent={() => {
                        return <AddItem onSubmitEditing={({ nativeEvent: { text } }) => {
                            setList([{ id: uuid(), name: text }, ...list])
                        }} />
                    }}
                />
            </KeyboardAvoidingView>
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