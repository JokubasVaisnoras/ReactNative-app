import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = props => {
    console.log(props);
    return <View>
        <Image source = {props.ImageSource} />
        <Text>{props.ImageTitle}</Text>
        <Text> {props.ImageScore} </Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;