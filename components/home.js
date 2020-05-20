import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, SafeAreaView, 
    ImageBackground, Image, ActivityIndicator } from 'react-native';

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const retrieveWeather = () => {
        setIsLoading(true)
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9fd7a449d055dba26a982a3220f32aa2')
        .then(response=>response.json())
        .then(responseJson => {
            setIsLoading(false)
            console.log(responseJson);
            setWeather(responseJson);
        })
        .catch(error=> {
            setIsLoading(false);
            console.log(error);
        })
            
    }
    let mainView;
    if (weather){
        if (isLoading){
            mainView = (<View><ActivityIndicator></ActivityIndicator></View>)
        }
        else {
         
            let iconUrl = "https://openweathermap.org/img/wn/"+weather["weather"][0]["icon"]+"@2x.png";
            let sunriseTime = Date(weather["sys"]["sunrise"])
            let sunsetTime = Date(weather["sys"]["sunset"])
   
        mainView = (<View style={styles.mainStyle}>
            <Text>{weather.name}</Text>
            <Image source={{uri:iconUrl}} style={{width:150, height:150}}/>
            <Text>{weather["weather"][0]["main"]}</Text>
            <Text>{weather["weather"][0]["description"]}</Text>
            <Text>{(weather["main"]["temp"] -273.15).toFixed(2)} C</Text>
            <Text>Pressure: {weather["main"]["pressure"]}</Text>
            <Text>Humidity: {weather["main"]["humidity"]}</Text>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text>{sunriseTime}</Text>
                </View>
                <View>
                    <Text>{sunsetTime}</Text>
                </View>
            </View>
            </View>)
        }
    }
   
  return (
      <ImageBackground source={require('../assets/weatherbg.jpg')} style={{width:'100%',height:'100%'}}>
    <SafeAreaView style={styles.container}>
        <View style={styles.inputRow}>
      <TextInput placeholder="Enter city name" style={{flex:2}} 
      onChangeText={(text)=> setCity(text)} value={city}></TextInput>
      <TouchableOpacity onPress={retrieveWeather} style={styles.buttonStyle} >
          <View><Text style={styles.buttonText}>Search City</Text></View>
      </TouchableOpacity>
      </View>
      {mainView}
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    mainStyle:{
       
        alignItems:'center'
    },
  container: {
    flex: 1,
    
  },
  buttonStyle:{
      backgroundColor:'indigo',
      padding:20,
      flex:1
  },
  buttonText:{
      color:'white'
  },
  inputRow : {
      flexDirection:'row',
      padding:20
  }
});
