import { useEffect } from "react"
import { View, Image } from "react-native"

const logo = require('../assets/icons/logo.png');

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
      navigation.replace('MainTab');
    }, 2000);
  })

  return(<View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF'}}>
    <Image source={logo} style={{width:48, height:48}} />
  </View>)
}

export default Splash