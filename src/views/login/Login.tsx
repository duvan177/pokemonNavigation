import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get("window").width
export default function Login(props: any) {
  // console.log(props);
  const {navigation} = props;
  return (
    <View style={{flex: 1 }}>
      <View style={styles.Logo}>
          <Image 
          style={{height:400}}
          width={WIDTH}
          height={600}
           source={require('../../assets/images/login.png')}
          />
      </View>
      <View style={styles.contentButtonSubmit}>
            <TouchableOpacity style={styles.btnGo}  onPress={ ()=> navigation.push('Home')}>
                <Text style={{textAlign:"center" , color:"#C1381A"}}>Inicar</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    flex: 5,
    justifyContent:"center",
    alignItems:"center"
  
  },
  contentButtonSubmit: {
    flex: 1,
    justifyContent:"center",
    alignContent:"center",
    flexDirection:"row"
  },
  btnGo:{
    justifyContent:"center",
    alignContent:"center",
    borderColor:"#C1381A",
    borderWidth:2,
    backgroundColor:"#F2F2F2",
    height:40,
    width:WIDTH/2,
    borderRadius:20
    
  }
});
