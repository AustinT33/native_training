import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function ColorForm() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.txtInput} />
            <Button title='add' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
    }
})