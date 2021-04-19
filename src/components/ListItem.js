import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, Animated } from 'react-native';
import { Swipeable } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 18,
        color: "#69696969"
    },
    icon: {
        height: 30,
        tintColor: "#69696969",
        ...Platform.select({
            ios: {
                tintColor: 'blue'
            },
            android: {
                tintColor: 'red'
            }
        })
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    leftActions: {
        flex: 1,
        backgroundColor: '#388e3c',
        justifyContent: 'center'
    },
    rightActions: {
        flex: 1,
        backgroundColor: '#dd2c00',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    actionText: {
        color: '#fff',
        fontWeight: '600',
        padding: 20
    }
});

export const Separator = () => <View style={styles.separator} />;
const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })

    return <View style={styles.leftActions}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
            Add to cart
        </Animated.Text>
    </View>
}

const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })

    return <View style={styles.rightActions}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
            Delete
        </Animated.Text>
    </View>
}
const ListItem = ({ name, onFavoritePress, isFavorite, onAddedSwipe, onDeleteSwipe, onRowPress }) => {
    let startIcon;

    if (isFavorite) {
        startIcon = Platform.select({
            ios: require('../assets/icons/ios-star.png'),
            android: require('../assets/icons/md-star.png')
        }
        )
    } else {
        startIcon = Platform.select(
            {
                ios: require('../assets/icons/ios-star-outline.png'),
                android: require('../assets/icons/md-star-outline.png')
            }
        )
    };

    return (
        <Swipeable
            renderLeftActions={onAddedSwipe && LeftActions}
            renderRightActions={RightActions}
            onSwipeableLeftOpen={onAddedSwipe}
            onSwipeableRightOpen={onDeleteSwipe}
        >
            <TouchableOpacity onPress={onRowPress}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {name}
                </Text>
                {
                    onFavoritePress && <TouchableOpacity onPress={onFavoritePress}>
                        <Image
                            source={startIcon}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                }
            </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default ListItem;
