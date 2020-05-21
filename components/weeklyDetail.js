import React, {useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
export default function WeeklyDetail({navigation}) {

    const weather = navigation.getParam('weather')
    return (
    <View><Text>{new Date(weather.dt* 1000).toDateString()}</Text></View>
    )
}