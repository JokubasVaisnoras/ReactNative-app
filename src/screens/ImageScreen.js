import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
        
        <ImageDetail ImageScore = "Image score is 7 " ImageTitle = "Forest" ImageSource = {require ('../../assets/forest.jpg')} />
        <ImageDetail ImageScore = "Image score is 7 " ImageTitle = "Beach" ImageSource = {require ('../../assets/beach.jpg')}/>
        <ImageDetail ImageScore = "Image score is 7 " ImageTitle = "Mountain" ImageSource = {require ('../../assets/mountain.jpg')}/>
    </View>
}

const styles = StyleSheet.create({});

export default ImageScreen;