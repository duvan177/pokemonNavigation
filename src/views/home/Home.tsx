import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import { Card, Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';

const Item = ({name , index}: any)=>(
    <Card>
  <Card.Title>{name}</Card.Title>
  <Card.Divider/>
    <View style={{justifyContent:"space-around" ,  flexDirection:"row" , alignItems:"center"}}>

          <Image
          containerStyle={{backgroundColor:"white"}}
            style={{width:100 , height:100 }}
            source={{ uri:`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png` }}
            PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
          />
          <Text style={{}}>{name}</Text>
    </View>
</Card>
)


export default function Home() {
  const [data, seData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (): Promise<any> => {
    let response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    );
    seData(response.data.results)
    setLoading(false);
    console.log('poke api', data);
    
  };

  const renderItem  = ({item ,index } : any)=> {
      console.log(index);
      return(
        <Item  index={index}  name={item.name} />
  )
  }

  useEffect(() => {
    getData();
  }, []);

  return(

      <View style={{flex:1}}>
          {
              loading ? <View style={{justifyContent:"center" , 
              flex:1}}>
                   <ActivityIndicator 
              size="large" color="#BD1212"
              />
              </View> 
                : 
               <FlatList 
         data={data}
         renderItem={renderItem }
         keyExtractor={(item: any) => item.name}
         />
          }
  
         </View>
         
         )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
        color:"red"
      },
})