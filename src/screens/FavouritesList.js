import React from 'react'; 
import { SectionList, KeyboardAvoidingView, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import ListItem, { SectionHeader, Separator } from '../components/ListItem';
import { useCurrentList } from '../utils/ListManager';
 
export default ({navigation}) => {
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
 
    console.log(favourite)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
            >
                <SectionList
                    // sections={[
                    //     {title: 'List', data: list},
                    //     {title: 'Cart', data: cart}, 
                    // ]}
                    data={favourite}
                    renderItem={({ item, index }) => {
                        return <ListItem
                            name={item.name}
                            // onFavoritePress={() => addToFavourites(item)}
                            // isFavorite={index < 2}
                            onAddedSwipe={() => addToCart(item)}
                            onDeleteSwipe={() => removeItem(item.id)}
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
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
 
};
 
 