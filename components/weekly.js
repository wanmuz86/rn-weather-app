import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground,SafeAreaView,TouchableOpacity,TextInput,FlatList } from 'react-native';
import ListItem from './ListItem';
export default function Weekly({navigation}) {

    const [city,setCity] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [weathers, setWeathers] = useState([])
    const retrieveWeather = () => {
        setIsLoading(true)
        fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&appid=9fd7a449d055dba26a982a3220f32aa2')
        .then(response=>response.json())
        .then(responseJson => {
            setIsLoading(false);
            console.log(responseJson);
            setWeathers(responseJson["list"])
         
        })
        .catch(error=> {
            setIsLoading(false);
            console.log(error);
        //when it got error jump back to previous
        })
    }

    const openDetail = (evt) => {
        console.log(evt)
        navigation.push('WeeklyDetail',{weather:evt})
    }
    return (
        <ImageBackground source={require('../assets/weatherbg.jpg')} 
        style={{width:'100%', height:'100%'}}>
        <SafeAreaView style={styles.container}>
            <View style={styles.inputRow}>
            <TextInput placeholder="Enter city name" style={{flex:2}} 
            onChangeText={(text)=> setCity(text)} value={city}></TextInput>
            <TouchableOpacity onPress={(retrieveWeather)} style={styles.buttonStyle}>
                <View><Text style={styles.buttonText}>Search City</Text></View>
            </TouchableOpacity>
        </View>
        <FlatList
        data={weathers}
        renderItem={({ item }) => (
        <ListItem weather={item} openDetail={openDetail}/>
        )}
        keyExtractor={item => item.dt}
      />
     
        </SafeAreaView>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainStyle: {
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: 'indigo',
        padding:20,
        flex: 1
    },
    buttonText: {
      color:'white'
    },
    inputRow: {
      flexDirection:'row'
    }
  });