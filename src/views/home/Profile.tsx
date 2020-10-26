import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Screen } from 'react-native-screens'

export default function Profile({navigation} : any) {
    return (
       <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
           <Text>
               This is profile
           </Text>
           <TouchableOpacity onPress={()=>navigation.navigate(
               'Login',
               {
                 screen:'CreateAccount'
               }
           )}>
               <Text style={{color:"blue"}}>
                   Create account
               </Text>
           </TouchableOpacity>
       </View>
    )
}
