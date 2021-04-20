import { useEffect, useState } from 'react'
import AsyncStorage from "@react-native-community/async-storage";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

const updateStoredCurrentList = (list) => {
    AsyncStorage.setItem('@@GroceryList/currentList', JSON.stringify(list))
}

const updateStoredCurrentCart = (list) => {
    AsyncStorage.setItem('@@GroceryList/currentCart', JSON.stringify(list))
}


const updateStoredCurrentFavourite = (list) => {
    AsyncStorage.setItem('@@GroceryList/currentFavourite', JSON.stringify(list))
}

export const useCurrentList = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [favourite, setFavourite] = useState([]);
    const [isFavourite, setIsfavourite] = useState(false);

    const addItem = (text) => {
        const newList = [{ id: uuid(), name: text, isFavourited: false }, ...list];
        setList(newList)
        updateStoredCurrentList(newList)
    }
 
    console.log(list)
    const removeItem = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
        updateStoredCurrentList(newList)
    }

    const addToCart = (item) => {
        removeItem(item.id);
        const newCart = [item, ...cart];
        setCart(newCart);
        updateStoredCurrentCart(newCart);
    }

    const addToFavourites = (item, idToPass) => {
        const newList = [item, ...favourite];
        const updatedList = newList.map(item => {
            if (item.id === idToPass) {
                return {
                    ...item,
                    isFavourited: true
                }
            }
        })
        setList(updatedList);
        setFavourite(updatedList);
        updateStoredCurrentFavourite(updatedList);
    }

    useEffect(() => {
        setTimeout(() => {
            Promise.all(
                [
                    AsyncStorage.getItem('@@GroceryList/currentList'),
                    AsyncStorage.getItem('@@GroceryList/currentCart'),
                    AsyncStorage.getItem('@@GroceryList/currentFavourite')
                ]
            )
                .then(([list, cartItems, favouriteItems]) => [JSON.parse(list), JSON.parse(cartItems), JSON.parse(favouriteItems)])
                .then(([list, cartItems, favouriteItems]) => {
                    if (list) {
                        setList(list);
                    }
                    if (cartItems) {
                        setCart(cartItems)
                    }

                    if (favouriteItems) {
                        setFavourite(favouriteItems)
                    }

                    setLoading(false)
                })
        }, 1000);
    }, [])


    return {
        list,
        loading,
        addItem,
        removeItem,
        cart,
        addToCart,
        favourite,
        isFavourite,
        addToFavourites
    }
}
