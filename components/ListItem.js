import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity  } from 'react-native';



export default function ListItem(props) {

    const weather = props.weather
    const weatherDate = new Date(weather.dt*1000)
    let iconUrl = "https://openweathermap.org/img/wn/"+weather["weather"][0]["icon"]+"@2x.png";
    return (
        <TouchableOpacity onPress={()=>props.openDetail(props.weather)}>
        <View style={styles.mainView}>
            
            <View style={{ flex: 1 }}>
                <Image source={{ uri: iconUrl }} style={{ width: 150, height: 150 }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text>{weatherDate.toDateString()}</Text>
                <Text>{weather.temp.day}</Text>
                <Text>{weather.weather[0].main}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems:'center'
    },

})