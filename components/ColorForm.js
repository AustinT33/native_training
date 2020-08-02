import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function ColorForm() {
    const [inputValue, setValue] = useState('');
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.txtInput} 
                autoCapitalize='none' 
                value={inputValue}
                onChangeText={setValue}
            />
            <Button title='add' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5,
    }
})