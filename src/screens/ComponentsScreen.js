import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponenetsScreen = () => {
    const yourname = 'Jokubas';
    // variables are used with curly brases
    // can be any variable int shit like that
    return(
     <View>
        <Text style = {styles.textStyle}> Getting started with react native!</Text>
        <Text style = {styles.tsubHeaderStyle}>My name is {yourname}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize:20
    }
});

export default ComponenetsScreen;