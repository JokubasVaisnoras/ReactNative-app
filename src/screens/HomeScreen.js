import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
     <Text style = {styles.text}>hello dipshit</Text>
     <Button
     onPress = {() => navigation.navigate("Components")}
     title = "Go to commenents Demo"/>
     <Button 
        title = "Go to List Demo"
        onPress = {() => navigation.navigate('List')}
     />
     <Button 
     title = "Go to image Screen"
     onPress = {() => navigation.navigate("Image")}
       />
       <Button 
     title = "Go to Counter Screen"
     onPress = {() => navigation.navigate("Counter")}
       />
    <Button 
     title = "Go to Add Color screen"
     onPress = {() => navigation.navigate("Color")}
       />
       <Button 
     title = "Go to Add Square Demo"
     onPress = {() => navigation.navigate("Square")}
       />
     {/* <TouchableOpacity onPress = {() => props.navigation.navigate('List')}>
       <Text>Go to list Demo</Text>
     </TouchableOpacity> */}
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
