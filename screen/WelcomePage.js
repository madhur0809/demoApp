import React from 'react'
import {
    View,
    StyleSheet, Text, ImageBackground, Button, TouchableOpacity, TouchableHighlight,
} from 'react-native'

const AppBtn = (props) => {
    return(
    <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer} >
        <Text style={styles.appButtonText}> {props.title} </Text>
    </TouchableOpacity>
    )
}
export default function WelcomePage({navigation}){
    return (
        <View style={styles.welcomeScreen}> 
            <ImageBackground source={require('../assets/backimage.jpg')} blurRadius={3}
            style={styles.backImage}>
                <View style={styles.headingContainer}>
                    <Text style={{color: 'white', fontSize: 78, fontWeight: 'bold'}}> Shopify </Text>
                </View>
                <View style={styles.credentialContainer}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.registerText}> Already have an account? </Text>
                        <AppBtn title={'LOGIN'} ></AppBtn>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.registerText}> New to Shopify? </Text>
                        <View>
                        <AppBtn title='REGISTER' onPress={()=>navigation.navigate("RegisterPage")} ></AppBtn>
                        </View> 
                    </View>
                </View>
            </ImageBackground>

        </View>        
    )
    }
const styles = StyleSheet.create({
    welcomeScreen: {
        flex: 1,
        backgroundColor: 'white',
    },
    backImage: {
        width: '100%',
        height: '100%',
    },
    headingContainer: {
        flex : 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    credentialContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    registerText: {
        color: 'white',
        fontSize: 28,
        marginBottom:10,

    },
    buttonContainer: {
        marginBottom: 90,
        alignItems: 'center',
    },
    appButtonContainer: {
        backgroundColor: '#03b5fc',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 300,
        alignSelf: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    
})
