import React from 'react';
import {Text,View, StyleSheet,TouchableOpacity} from 'react-native';

export default class OrderingScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:'#1ba100', paddingBottom:10,margin:3, borderWidth:3, borderRadius:18}}>
            <View style={styles.viewOfHeader}>
                <Text style={styles.headerStyle}>The Dauntless Food Delivery App!!</Text>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    viewOfHeader:{
        marginTop:30,
        backgroundColor:'#2bff00',
        justifyContent:'center',
        alignItems:'center',
        height:70,
        borderRadius:100,
        borderWidth:3,
        borderColor:'yellow',
        marginLeft:10,
        marginRight:10
    },
    headerStyle:{
        fontWeight:'bold',
        fontSize:25,
        fontFamily:'Arial',
        color:'#262617',
        justifyContent:'center'
    }
})
