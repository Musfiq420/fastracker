import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from "@expo/vector-icons/Ionicons";


function IntroScreen({navigation}){



    function pressHandler_HPD(){
        navigation.navigate("HOURLY PRODUCTION CONTAINER")
    }
    function pressHandler_Moptz(){
        navigation.navigate("MACHINE OPTIMIZATION")
    }
    function pressHandler_SquareNews(){
        navigation.navigate("SQUARE NEWS")
    }
    function pressHandler_CapacityAnalysis(){
      navigation.navigate('CAPACITY ANALYSIS')
    }

    return(
        <LinearGradient colors={["#66ff5f", "#b4feb1"]} styles={styles.backgroundimage}>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          
          <View style={styles.buttonGroupContainer}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttontext} onPress={pressHandler_HPD}>HOURLY PRODUCTION DATA</Text>
              <Ionicons name="arrow-forward-outline" color={"#008921"} size={28} onPress={pressHandler_HPD}/>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttontext} onPress={pressHandler_Moptz}>MACHINE OPTIMIZATION</Text>
              <Ionicons name="arrow-forward-outline" color={"#008921"} size={28} onPress={pressHandler_Moptz}/>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttontext} onPress={pressHandler_CapacityAnalysis}>CAPACITY ANALYSIS</Text>
              <Ionicons name="arrow-forward-outline" color={"#008921"} size={28} onPress={pressHandler_CapacityAnalysis}/>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttontext} onPress={pressHandler_SquareNews}>SQUARE NEWS</Text>
              <Ionicons name="arrow-forward-outline" color={"#008921"} size={28} onPress={pressHandler_SquareNews}/>
            </View>
          </View>
    
          <View style={styles.powerbyContainer}>
            <Text style={styles.powerbytext}>Powered By SQUARE</Text>
            <Text style={styles.powerbytext}>Developed By - Industrial Engineering Department</Text>
            <Text style={styles.powerbytext}>Version - 3.3.4</Text>
          </View>
    
        </LinearGradient>
      )
    
}

export default IntroScreen

screen_width = Dimensions.get("window").width
screen_height = Dimensions.get("window").height

// console.log(screen_width, screen_height)

const styles = StyleSheet.create({
    backgroundimage:{
      width:screen_width,
      height: screen_height*1.1
    },
    logo:{
      marginTop: screen_height*0.165,
      marginLeft: screen_width*0.23,
      resizeMode: 'contain'
    },
    versionText: {
      textAlign: 'center'
    },  
    buttonGroupContainer:{
      marginTop: screen_height*0.22,
      margin: 10
    },
    buttonContainer:{
      flexDirection:'row',
      marginTop: screen_height*0.02,
      marginLeft: screen_width*0.05,
    },
    buttontext:{
      fontSize: screen_width < 200 ? 18:23,
      fontWeight: 'bold',
      color: '#008921',
    },
    buttonimage:{
      width: screen_width < 200 ? 25:30,
      height: screen_width < 200 ? 25:30,
      resizeMode: 'contain',
      marginLeft: screen_width*0.01,
    },
    powerbyContainer:{
      marginVertical:screen_height*0.2,
    },
    powerbytext:{
      textAlign: 'center',
      color: '#616161',
    }
  });