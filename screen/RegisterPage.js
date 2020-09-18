import React from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
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
       <SafeAreaView>
           <ImageBackground blurRadius={3}
           style={styles.backImage}
           source={require('../assets/backimage.jpg')}>
               
                <View style={styles.headingContainer}>
                    <Text style={{color: 'white', fontSize: 78, fontWeight: 'bold'}}> Shopbit </Text>
                </View>
                <View style={{width:300, alignSelf:'center', flex:0.1}}>
                    <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>Create your account </Text>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Please fill the forms below with your details </Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput placeholder={'Name'} style={styles.textInputBox}></TextInput>
                    <TextInput keyboardType={'email-address'} placeholder={'Email Address'} style={styles.textInputBox}></TextInput>
                    <TextInput keyboardType={'number-pad'} 
                    placeholder={'Password'}
                    style={styles.textInputBox}></TextInput>
                    <TextInput keyboardType={'number-pad'} 
                    placeholder={'Confirm Password'}
                    style={styles.textInputBox}></TextInput>
                    <AppBtn title='SIGN UP' onPress={() => alert('Successfully Registered')}></AppBtn>
                </View>
           </ImageBackground>

       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backImage: {
        width: '100%',
        height: '100%',
    },
    headingContainer: {
        flex: 0.21,
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
        height: 60,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 45,
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
