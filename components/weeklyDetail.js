import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function WeeklyDetail({navigation}) {

    const weather = navigation.getParam('weather')
    let iconUrl = "https://openweathermap.org/img/wn/"+weather["weather"][0]["icon"]+"@2x.png";
    return (
        <View style={styles.detailStyle}>
        <Image source={{uri:iconUrl}} style={{width:150, height:150}}/>
        <Text>{weather["weather"][0]["main"]}</Text>
        <Text>{weather["weather"][0]["description"]}</Text>
        <Text>{(weather["temp"]["day"] -273.15).toFixed(2)}) C</Text>
        <Text>Pressure: {weather["pressure"]}</Text>
        <Text>Humidity: {weather["humidity"]}</Text>
        <View>
            <Text>{(new Date(weather["sunrise"]* 1000)).toTimeString()}</Text>
        </View>
        <View>
            <Text>{(new Date(weather["sunset"]* 1000)).toTimeString()}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailStyle: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },

})