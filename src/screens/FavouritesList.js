import React from 'react';
import { FlatList, View, SectionList, KeyboardAvoidingView, SafeAreaView, ScrollView, ActivityIndicator, Text } from 'react-native';
import ListItem, { SectionHeader, Separator } from '../components/ListItem';
import { useCurrentList } from '../utils/ListManager';

export default ({ navigation }) => {
    const {
        list,
        loading,
        removeItem,
        cart,
        addToCart,
        favourite,
    } = useCurrentList()

    if (loading) {
        return (
            <SafeAreaView>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        )
    } 
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
             <SectionList
                    sections={[
                        {title: 'List', data: list},
                        {title: 'Cart', data: cart}, 
                    ]}
                    renderSectionHeader={({ section }) => {
                       return <SectionHeader title={section.title} />
                    }}
                    data={favourite}
                    renderItem={({ item, index}) => {
                        return <ListItem
                            name={item.name} 
                            onAddedSwipe={() => addToCart(item)}
                            onDeleteSwipe={() => removeItem(item.id)}
                            isFavorite={index < 2}
                            onRowPress={() => {
                                navigation.navigate('ItemDetails', { 
                                    item,
                                })
                            }}
                        />

                    }}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <Separator />}
                   
                />
        </SafeAreaView>
    )

};

