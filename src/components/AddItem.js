import React, { useRef } from 'react';
import { StyleSheet, View, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 10,
    },
    input: {
        backgroundColor: "#fff",
        fontSize: 18,
        padding: 10,
        borderRadius: 3,
    },
});

const AddItem = ({ onSubmitEditing, style, ...rest }) => {
    const input = useRef(null);

    return (
        <View style={styles.container}>
            <TextInput
                ref={input}
                style={[styles.input, style]}
                placeholder="Add new item..."
                onSubmitEditing={e => {
                    if (onSubmitEditing) {
                        onSubmitEditing(e)
                    }
                    input.current.clear()
                }}
                {...rest}
            />
        </View>
    )
}

export default AddItem;