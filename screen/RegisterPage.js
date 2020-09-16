import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function RegisterPage() {
    const AppBtn = (props) => {
        return(
        <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer} >
            <Text style={styles.appButtonText}> {props.title} </Text>
        </TouchableOpacity>
        )
    }
    return (
       <View>
           <ImageBackground blurRadius={3}
           style={styles.backImage}
           source={require('../assets/backimage.jpg')}>
            <View style={styles.headingContainer}>
                <Text style={{color: 'white', fontSize: 78, fontWeight: 'bold'}}> Shopify </Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput placeholder={'Enter Name'} style={styles.textInputBox}></TextInput>
                <TextInput keyboardType={'email-address'} placeholder={'Enter Email Address'} style={styles.textInputBox}></TextInput>
                <TextInput keyboardType={'number-pad'} 
                placeholder={'Enter Mobile Number'} 
                maxLength={10}
                style={styles.textInputBox}></TextInput>
                <AppBtn title='SIGN UP' onPress={() => alert('Successfully Registered')}></AppBtn>

            </View>
           </ImageBackground>

       </View>
    )
}

const styles = StyleSheet.create({
    backImage: {
        width: '100%',
        height: '100%',
    },
    headingContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 0.7,
        alignItems: 'center',
        paddingTop: 100,
        // justifyContent: 'center',

    },
    textInputBox: {
        backgroundColor: 'white',
        color: 'black',
        width: 300,
        height: 50,
        borderRadius: 30,
        paddingHorizontal: 10,
        alignItems: 'center',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 70,
    },
    appButtonContainer: {
        backgroundColor: '#03b5fc',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 200,
        alignSelf: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
})
