import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Login (props: any) {
    // console.log(props);
    const { navigation } = props
    return (
        <>
        <View style={{flex:1 , justifyContent:'center' , alignItems:"center"}}>
            <TouchableOpacity onPress={ ()=> navigation.push('CreateAccount')}>
                <Text style={{color:"red"}}>
                    Go create Account
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical:20}} onPress={ ()=> navigation.push('Home')}>
                <Text style={{color:"blue"}}>
                    Go home
                </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}
